import { client } from "./cloudflare";

async function generatePdfFromUrl(url: string) {
  const pdfResponse = await client.browserRendering.pdf.create({
    account_id: process.env.CLOUDFLARE_ACCOUNT_ID!,
    url: url,
  });

  const pdfBuffer = await (pdfResponse as Response).arrayBuffer();

  return pdfBuffer;
}

async function generatePdfFromHtml(html: string) {
  const pdfResponse = await client.browserRendering.pdf.create({
    account_id: process.env.CLOUDFLARE_ACCOUNT_ID!,
    html: html,
  });

  const pdfBuffer = await (pdfResponse as Response).arrayBuffer();

  return pdfBuffer;
}

export { generatePdfFromUrl, generatePdfFromHtml };
