"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BookOpen, FileText, Image as ImageIcon, User, Plus, Save } from "lucide-react";

type BookFormProps = {
  book?: {
    id: number;
    title: string;
    author: string;
    description: string;
    image: string | null;
    pdf: string | null;
  };
};

export default function BookForm({ book }: BookFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(book?.title ?? "");
  const [author, setAuthor] = useState(book?.author ?? "");
  const [description, setDescription] = useState(book?.description ?? "");
  const [image, setImage] = useState(book?.image ?? "");
  const [pdf, setPdf] = useState(book?.pdf ?? "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);

    const data = {
      title,
      author,
      description,
      image,
      pdf,
    };

    const url = book
      ? `/api/books/${book.id}`
      : "/api/books";

    const method = book ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        alert("Something went wrong");
        setLoading(false);
        return;
      }

      router.push("/books");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7"
    >

      {/* Book Title */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]">
          <BookOpen size={17} className="text-[#b7791f]" />
          Book Title
        </label>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the book title"
          required
          className="w-full rounded-xl border border-[#ddd6c9] bg-[#faf9f6] px-4 py-3 text-[#172033] outline-none transition placeholder:text-gray-400 focus:border-[#b7791f] focus:ring-2 focus:ring-[#b7791f]/20"
        />
      </div>

      {/* Author */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]">
          <User size={17} className="text-[#b7791f]" />
          Author
        </label>

        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter the author's name"
          required
          className="w-full rounded-xl border border-[#ddd6c9] bg-[#faf9f6] px-4 py-3 text-[#172033] outline-none transition placeholder:text-gray-400 focus:border-[#b7791f] focus:ring-2 focus:ring-[#b7791f]/20"
        />
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]">
          <FileText size={17} className="text-[#b7791f]" />
          Description
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write a short description of the book..."
          required
          rows={5}
          className="w-full resize-none rounded-xl border border-[#ddd6c9] bg-[#faf9f6] px-4 py-3 text-[#172033] outline-none transition placeholder:text-gray-400 focus:border-[#b7791f] focus:ring-2 focus:ring-[#b7791f]/20"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]">
          <ImageIcon size={17} className="text-[#b7791f]" />
          Book Cover Image URL
        </label>

        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/book-cover.jpg"
          required
          className="w-full rounded-xl border border-[#ddd6c9] bg-[#faf9f6] px-4 py-3 text-[#172033] outline-none transition placeholder:text-gray-400 focus:border-[#b7791f] focus:ring-2 focus:ring-[#b7791f]/20"
        />

        <p className="mt-2 text-xs text-gray-500">
          Paste a direct URL to the book cover image.
        </p>
      </div>

      {/* PDF URL */}
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#172033]">
          <FileText size={17} className="text-[#b7791f]" />
          PDF URL
        </label>

        <input
          value={pdf}
          onChange={(e) => setPdf(e.target.value)}
          placeholder="https://example.com/book.pdf"
          required
          className="w-full rounded-xl border border-[#ddd6c9] bg-[#faf9f6] px-4 py-3 text-[#172033] outline-none transition placeholder:text-gray-400 focus:border-[#b7791f] focus:ring-2 focus:ring-[#b7791f]/20"
        />

        <p className="mt-2 text-xs text-gray-500">
          Use a legal PDF or authorized book resource.
        </p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#172033] px-5 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[#25304a] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          "Saving..."
        ) : book ? (
          <>
            <Save size={18} />
            Update Book
          </>
        ) : (
          <>
            <Plus size={18} />
            Add Book
          </>
        )}
      </button>

    </form>
  );
}