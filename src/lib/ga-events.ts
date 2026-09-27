// Google Analytics event tracking utilities
// Uses gtag (loaded by GoogleAnalytics component)

export type EventName =
  | "affiliate_click"
  | "social_share"
  | "pdf_download"
  | "newsletter_signup"
  | "guide_view"
  | "search";

export interface EventParams {
  [key: string]: string | number | boolean;
}

/**
 * Track a conversion event to Google Analytics
 */
export function trackEvent(eventName: EventName, params?: EventParams): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      ...params,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * Track affiliate link clicks
 * Usage: Add to affiliate links
 */
export function trackAffiliateClick(
  tool: string,
  url: string,
  context?: string
): void {
  trackEvent("affiliate_click", {
    tool,
    url,
    context: context || "guide",
  });
}

/**
 * Track social media shares
 * Usage: Add to share buttons
 */
export function trackSocialShare(
  platform: string,
  guide: string,
  title?: string
): void {
  trackEvent("social_share", {
    platform,
    guide,
    title: title || guide,
  });
}

/**
 * Track PDF downloads
 * Usage: Add to print/download button
 */
export function trackPdfDownload(guide: string): void {
  trackEvent("pdf_download", {
    guide,
  });
}

/**
 * Track newsletter signups
 * Usage: Add after successful subscription
 */
export function trackNewsletterSignup(email?: string, source?: string): void {
  trackEvent("newsletter_signup", {
    email: email ? "valid" : "unknown",
    source: source || "guide",
  });
}

/**
 * Track guide views (page_view is automatic, this is for custom tracking)
 * Usage: Add to guide page template
 */
export function trackGuideView(guide: string, theme: string): void {
  trackEvent("guide_view", {
    guide,
    theme,
  });
}

/**
 * Track searches
 * Usage: Add to search form
 */
export function trackSearch(query: string, results: number): void {
  trackEvent("search", {
    search_term: query,
    results_count: results,
  });
}
