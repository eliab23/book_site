"use client";

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string | null;
  pdf: string | null;
};

export default function BookCard({
  id,
  title,
  author,
  description,
  image,
  pdf,
}: BookCardProps) {

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${title}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/books/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        alert("Failed to delete the book.");
        return;
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Something went wrong while deleting the book.");
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-md">
      
      {image && (
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
        />
      )}

      <div className="p-5">
        
        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          By {author}
        </p>

        <p className="mt-3 text-sm text-gray-700">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">

          {pdf && (
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-black px-4 py-2 text-white hover:bg-gray-800"
            >
              Read PDF
            </a>
          )}

          <a
            href={`/book/${id}`}
            className="rounded border px-4 py-2 hover:bg-gray-100"
          >
            View Details
          </a>

          <button
            onClick={handleDelete}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  );
}