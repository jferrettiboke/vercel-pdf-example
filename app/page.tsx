export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          PDF Generation API Testing
        </h1>

        <div className="space-y-8">
          {/* URL to PDF */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Generate PDF via URL
            </h2>
            <p className="text-gray-600 mb-4">Convert any page to PDF.</p>
            <a
              href="/api/generate-pdf-from-url?url=https://en.wikipedia.org/wiki/Hello_World"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test Wikipedia Hello World
            </a>
          </section>

          {/* URL to PDF with Cloudflare */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Generate PDF via URL with Cloudflare
            </h2>
            <p className="text-gray-600 mb-4">
              Convert any page to PDF using Cloudflare&apos;s Browser Rendering
              API.
            </p>
            <a
              href="/api/generate-pdf-from-url-with-cf?url=https://en.wikipedia.org/wiki/Hello_World"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test with Cloudflare
            </a>
          </section>

          {/* HTML Template */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Generate PDF via HTML Template
            </h2>
            <p className="text-gray-600 mb-4">
              Generate PDF from HTML file template (Plain HTML + CSS).
            </p>
            <a
              href="/api/generate-pdf-from-file-template?template=hello-world&data=%7B%22name%22%3A%22John%20Doe%22%7D"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test HTML Template
            </a>
          </section>

          {/* HTML Template with Cloudflare */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Generate PDF via HTML Template with Cloudflare
            </h2>
            <p className="text-gray-600 mb-4">
              Generate PDF from HTML file template using Cloudflare&apos;s
              Browser Rendering API.
            </p>
            <a
              href="/api/generate-pdf-from-file-template-with-cf?template=hello-world&data=%7B%22name%22%3A%22John%20Doe%22%7D"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test with Cloudflare
            </a>
          </section>

          {/* Next.js Template */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Generate PDF via Next.js Template
            </h2>
            <p className="text-gray-600 mb-4">
              Using Next.js pages with React and Tailwind CSS for dynamic
              templating.
            </p>
            <div className="space-x-4">
              <a
                href="/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=John"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hello John
              </a>
              <a
                href="/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=Alice"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hello Alice
              </a>
              <a
                href="/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=Bob"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hello Bob
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
