import type { APIRoute } from "astro";

interface MailchimpResponse {
  id: string;
  email_address: string;
  status: string;
}

interface ErrorResponse {
  error: string;
}

const mailchimpApiKey = import.meta.env.MAILCHIMP_API_KEY;
const mailchimpListId = import.meta.env.MAILCHIMP_LIST_ID;

export const POST: APIRoute = async ({ request }) => {
  // Validate environment variables
  if (!mailchimpApiKey || !mailchimpListId) {
    return new Response(
      JSON.stringify({ error: "Newsletter não está configurado" }),
      { status: 500 }
    );
  }

  // Only POST
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
    });
  }

  try {
    const { email } = (await request.json()) as { email?: string };

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Email inválido" }), {
        status: 400,
      });
    }

    // Extract datacenter from API key (e.g., "us1" from "xxxxx-us1")
    const datacenter = mailchimpApiKey.split("-")[1];

    // Add to Mailchimp list
    const response = await fetch(
      `https://${datacenter}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`anystring:${mailchimpApiKey}`)}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "pending", // Double opt-in for compliance
          tags: ["zunrel-guide"],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();

      // Handle already subscribed
      if (error.title === "Member Exists") {
        return new Response(
          JSON.stringify({ error: "Este email já está subscritor" }),
          { status: 400 }
        );
      }

      throw new Error(error.detail || "Erro ao adicionar à lista");
    }

    const data = (await response.json()) as MailchimpResponse;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Subscrição pendente. Confirma no teu email.",
        id: data.id,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao processar subscrição" }),
      { status: 500 }
    );
  }
};

// Email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}
