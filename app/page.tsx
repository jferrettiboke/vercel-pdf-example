import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vercel PDF Example
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate PDFs and screenshots from web pages using Puppeteer. Deploy
            serverless PDF generation on Vercel with React templates.
          </p>
        </header>

        {/* API Examples */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* PDF from URL */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                PDF from URL
              </h3>
            </div>
            <p className="text-gray-600 mb-4">Convert any web page to PDF</p>
            <Link
              href="/api/generate-pdf-from-url?url=https://en.wikipedia.org/wiki/Hello_World"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Try Example
            </Link>
          </div>

          {/* PDF from Template */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                PDF from Template
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Generate PDFs from HTML templates
            </p>
            <Link
              href="/api/generate-pdf-from-template?template=hello-world&data=%7B%22name%22%3A%22John%20Doe%22%7D"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Try Example
            </Link>
          </div>

          {/* Screenshot */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Screenshot
              </h3>
            </div>
            <p className="text-gray-600 mb-4">Capture webpage screenshots</p>
            <Link
              href="/api/generate-screenshot?url=https://en.wikipedia.org/wiki/Hello_World"
              className="inline-block bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Try Example
            </Link>
          </div>
        </div>

        {/* React Template Example */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            React Template - Stateless
          </h2>
          <p className="text-gray-600 mb-6">
            Simple stateless &ldquo;Hello World&rdquo; template using query
            parameters. Clean, fast, and easy to understand.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Hello John
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Hello World with name parameter
              </p>
              <div className="space-y-2">
                <Link
                  href="/templates/hello-world?name=John"
                  className="block w-full text-center bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 transition-colors text-sm"
                >
                  View Template
                </Link>
                <Link
                  href="/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=John"
                  className="block w-full text-center bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                >
                  Generate PDF
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Hello Alice
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Hello World with different name
              </p>
              <div className="space-y-2">
                <Link
                  href="/templates/hello-world?name=Alice"
                  className="block w-full text-center bg-indigo-500 text-white px-3 py-2 rounded-md hover:bg-indigo-600 transition-colors text-sm"
                >
                  View Template
                </Link>
                <Link
                  href="/api/generate-pdf-from-url?url=http://localhost:3000/templates/hello-world?name=Alice"
                  className="block w-full text-center bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors text-sm"
                >
                  Generate PDF
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Benefits
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✅ Stateless design</li>
                <li>✅ Query parameters</li>
                <li>✅ No database needed</li>
                <li>✅ Fast and simple</li>
                <li>✅ Easy to extend</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Development
              </h3>
              <div className="bg-gray-900 rounded-md p-4 text-green-400 font-mono text-sm">
                pnpm install
                <br />
                pnpm dev
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Deploy
              </h3>
              <p className="text-gray-600">
                Push to GitHub and connect to Vercel for automatic deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
