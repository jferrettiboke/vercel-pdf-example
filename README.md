# Vercel PDF Example

Generate PDFs from stateless templates using Puppeteer on Vercel.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Generate a PDF via URL

Convert any external website to PDF.

[http://localhost:3000/api/generate-pdf-from-url?url=https://en.wikipedia.org/wiki/Hello_World](http://localhost:3000/api/generate-pdf-from-url?url=https://en.wikipedia.org/wiki/Hello_World)

## Generate a PDF via URL using an HTML file template (Plain HTML + CSS)

[http://localhost:3000/api/generate-pdf-from-file-template?template=hello-world&data=%7B%22name%22%3A%22John%20Doe%22%7D](http://localhost:3000/api/generate-pdf-from-file-template?template=hello-world&data=%7B%22name%22%3A%22John%20Doe%22%7D)

## Generate a PDF via URL using page.tsx (Next.js + React + Tailwind CSS)

Using Next.js pages with React and Tailwind CSS offers dynamic templating with component reuse, type safety, and modern styling - perfect for complex, maintainable PDF templates.

- [Hello John](http://localhost:3000/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=John)
- [Hello Alice](http://localhost:3000/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=Alice)
- [Hello Bob](http://localhost:3000/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=Bob)

### Template Preview

Since templates are regular pages in the Next.js app, you can preview them directly without generating PDFs:

- [Preview Hello Bob](http://localhost:3000/templates/hello-world?name=Bob)
- [Preview Hello Alice](http://localhost:3000/templates/hello-world?name=Alice)

_Note: You can adapt these templates to your own needs by modifying the React components and adding your own parameters._

### Security

To protect your `/templates/*` pages from direct access, you can add middleware to redirect requests that don't come from your PDF generation API.
