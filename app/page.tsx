import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-1">
            <span className="text-xl font-bold">STV</span>
            <span className="text-lg font-semibold text-gray-600">Labs</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/stvlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com/stvlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-black"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto flex flex-1 max-w-6xl px-6">
        {/* Hero Section */}
        <section className="flex w-full flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Building in public</span>
          </div>

          <h1 className="mb-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Modern SaaS Starters for Developers
          </h1>

          <p className="mb-8 max-w-2xl text-xl text-gray-600">
            Ship faster with production-ready templates. Beautiful code, best practices, everything you need to launch.
          </p>

          {/* Product Card */}
          <div className="mt-12 w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-block rounded-md bg-green-100 px-3 py-1 text-sm font-medium text-green-900">
              Just Launched
            </div>

            <h2 className="mb-3 text-3xl font-bold">LaunchAI</h2>

            <p className="mb-4 text-lg text-gray-600">
              Complete Next.js AI SaaS Starter
            </p>

            <div className="mb-6 flex flex-wrap justify-center gap-2 text-sm text-gray-500">
              <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1">
                Authentication
              </span>
              <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1">
                Payments
              </span>
              <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1">
                AI Chat
              </span>
              <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1">
                Admin Dashboard
              </span>
            </div>

            <a
              href="https://stvlabs.gumroad.com/l/launchai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Get LaunchAI
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
            <p>&copy; 2026 STV Labs. All rights reserved.</p>
            <a
              href="mailto:hello@stvlabs.dev"
              className="transition-colors hover:text-black"
            >
              hello@stvlabs.dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
