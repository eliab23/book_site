import BookForm from "@/components/BookForm";
import Navbar from "@/components/Navbar";
import { BookOpen, Library } from "lucide-react";

export default function AddBookPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f1] text-[#172033]">

    

      <section className="px-6 py-12 md:px-10 md:py-16">

        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-10 text-center">

            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9e1d2] text-[#b7791f]">
              <BookOpen size={28} />
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#172033]">
              Add a New Book
            </h1>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Add a book to your digital library by providing
              its title, author, description, cover image, and PDF.
            </p>

          </div>

          {/* Main Card */}
          <div className="grid overflow-hidden rounded-3xl border border-[#e5dfd4] bg-white shadow-xl md:grid-cols-[0.8fr_1.2fr]">

            {/* Left information */}
            <div className="relative hidden overflow-hidden bg-[#172033] p-10 text-white md:block">

              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#b7791f]/20 blur-3xl" />

              <div className="relative">

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b7791f]">
                  <Library size={27} />
                </div>

                <h2 className="text-3xl font-bold leading-tight">
                  Build your
                  <br />
                  personal library.
                </h2>

                <p className="mt-5 leading-7 text-gray-300">
                  Keep your favorite books organized in one
                  beautiful place. Add books now and access
                  them whenever you need them.
                </p>

                <div className="mt-10 space-y-5">

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d49a3a]">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Enter book information
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        Title, author and description.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d49a3a]">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Add your resources
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        Add the cover and PDF links.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#d49a3a]">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Save your book
                      </h3>
                      <p className="mt-1 text-sm text-gray-400">
                        Your book will appear in your library.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8 md:p-10">
              <BookForm />
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}