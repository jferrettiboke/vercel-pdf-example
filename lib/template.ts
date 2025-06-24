interface TemplateData {
  [key: string]: any;
}

/**
 * Simple template interpolation - replaces {{key}} with values
 * @param html - HTML template string with {{variable}} placeholders
 * @param data - Object with key-value pairs to replace in the template
 * @returns Processed HTML string with variables replaced
 */
export function renderTemplate(html: string, data: TemplateData = {}): string {
  let processedHtml = html;

  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{\\s*${escapeRegExp(key)}\\s*}}`, "g");
    processedHtml = processedHtml.replace(regex, String(value));
  }

  return processedHtml;
}

/**
 * Parses JSON data from URL parameter with error handling
 * @param dataParam - URL parameter string containing JSON data
 * @returns Parsed data object or empty object if parsing fails
 */
export function parseTemplateData(dataParam: string | null): TemplateData {
  if (!dataParam) return {};

  try {
    return JSON.parse(decodeURIComponent(dataParam));
  } catch (error) {
    console.warn("Failed to parse template data:", error);
    return {};
  }
}

/**
 * Escapes special regex characters in a string
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
