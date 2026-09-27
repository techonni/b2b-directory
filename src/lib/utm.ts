// UTM parameter utilities for tracking traffic sources

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

/**
 * Add UTM parameters to a URL
 */
export function addUTMParams(
  url: string,
  params: UTMParams,
  override?: boolean
): string {
  const urlObj = new URL(url);

  // Add parameters if not already present (unless override)
  if (params.utm_source && (override || !urlObj.searchParams.has("utm_source"))) {
    urlObj.searchParams.set("utm_source", params.utm_source);
  }
  if (params.utm_medium && (override || !urlObj.searchParams.has("utm_medium"))) {
    urlObj.searchParams.set("utm_medium", params.utm_medium);
  }
  if (params.utm_campaign && (override || !urlObj.searchParams.has("utm_campaign"))) {
    urlObj.searchParams.set("utm_campaign", params.utm_campaign);
  }
  if (params.utm_content && (override || !urlObj.searchParams.has("utm_content"))) {
    urlObj.searchParams.set("utm_content", params.utm_content);
  }
  if (params.utm_term && (override || !urlObj.searchParams.has("utm_term"))) {
    urlObj.searchParams.set("utm_term", params.utm_term);
  }

  return urlObj.toString();
}

/**
 * Generate UTM params for social shares
 */
export function getShareUTMParams(platform: string, guide: string): UTMParams {
  return {
    utm_source: platform,
    utm_medium: "social",
    utm_campaign: "guide-share",
    utm_content: guide,
  };
}

/**
 * Generate UTM params for affiliate links
 */
export function getAffiliateUTMParams(tool: string, guide: string, context?: string): UTMParams {
  return {
    utm_source: "zunrel",
    utm_medium: "affiliate",
    utm_campaign: guide,
    utm_content: `${tool}-${context || "cta"}`,
    utm_term: tool,
  };
}

/**
 * Get current page UTM params from URL
 */
export function getCurrentUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
    utm_term: params.get("utm_term") || undefined,
  };
}
