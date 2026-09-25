import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Library,
  Plus,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#1f2937]">
     

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">

          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e9e1d2] px-4 py-2 text-sm font-medium text-[#7c5c35]">
              <Sparkles size={16} />
              Ebenezer Book App
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#172033] md:text-6xl">
              Discover.
              <br />
              Read.
              <br />
              <span className="text-[#b7791f]">Grow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Manage your favorite books in one beautiful place.
              Discover new stories, keep your collection organized,
              and enjoy reading anytime.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/books"
                className="group flex items-center gap-2 rounded-xl bg-[#172033] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#25304a]"
              >
                <BookOpen size={19} />
                Explore Books
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/add-book"
                className="flex items-center gap-2 rounded-xl border border-[#d6cbb9] bg-white px-6 py-3.5 font-semibold text-[#172033] transition hover:bg-[#f3eee5]"
              >
                <Plus size={19} />
                Add a Book
              </Link>

            </div>
          </div>

          {/* Right - Book Illustration */}
          <div className="relative flex justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-[#e8d5b5] blur-3xl" />

            <div className="relative w-full max-w-md">

              {/* Back books */}
              <div className="absolute right-8 top-10 h-64 w-40 rotate-12 rounded-lg bg-[#8b5e3c] shadow-xl" />

              <div className="absolute left-8 top-16 h-64 w-40 -rotate-12 rounded-lg bg-[#30475e] shadow-xl" />

              {/* Main book */}
              <div className="relative mx-auto flex h-80 w-52 rotate-[-4deg] flex-col justify-between rounded-xl bg-[#b7791f] p-7 shadow-2xl">

                <div>
                  <BookOpen
                    size={40}
                    className="text-white/90"
                  />

                  <p className="mt-8 text-sm font-medium uppercase tracking-[0.25em] text-white/80">
                    Book Library
                  </p>

                  <h2 className="mt-3 text-4xl font-bold leading-tight text-white">
                    Read
                    <br />
                    More.
                  </h2>
                </div>

                <p className="text-sm text-white/70">
                  Discover your next favorite book.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-t border-[#e5dfd4] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-[#ebe6dd] bg-[#faf9f6] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9e1d2] text-[#9a6b27]">
                <Library size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#172033]">
                Manage Your Library
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Add, edit, view, and delete books while keeping
                your collection organized.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ebe6dd] bg-[#faf9f6] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9e1d2] text-[#9a6b27]">
                <BookOpen size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#172033]">
                Read Your Books
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Keep your PDF resources connected to each book
                for quick access.
              </p>
            </div>

            <div className="rounded-2xl border border-[#ebe6dd] bg-[#faf9f6] p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9e1d2] text-[#9a6b27]">
                <Sparkles size={24} />
              </div>

              <h3 className="text-xl font-bold text-[#172033]">
                Build Your Collection
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Create a growing collection of books that you
                can access whenever you need them.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#172033]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Start building your library
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-300">
            Add your first book and start creating your personal
            digital collection.
          </p>

          <Link
            href="/add-book"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#d49a3a] px-6 py-3.5 font-semibold text-white transition hover:bg-[#bd8429]"
          >
            <Plus size={19} />
            Add Your First Book
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101827] px-6 py-8 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Book Management System.
          Built for readers.
        </p>
      </footer>

    </main>
  );
}