import DeleteBookButton from "@/components/DeleteBookButton";
import { prisma } from "@/lib/prisma";
import { AwardIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BookDetailsPage({
    params,
}:{ params: Promise<{id: string }>;
}){
    const { id } = await params;

    const book = await prisma.book.findUnique({
        where: {
            id: Number(id),
        },
     
    });
    if (!book) {
         notFound();
  }
  return (
     <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold">
        {book.title}
      </h1>

      <p className="mt-2">
        Author: {book.author}
      </p>

      <p className="mt-6">
        {book.description}
      </p>

      <div className="mt-6 flex gap-4">
        {book.image && (
          <img
            src={book.image}
            alt={book.title}
            className="max-w-sm rounded"
          />
        )}

        {book.pdf && (
          <a
            href={book.pdf}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Open PDF
          </a>
        )}
      </div>

      <Link
        href={`/books/${book.id}/edit`}
        className="mt-6 inline-block"
      >
        Edit Book
      </Link>
      <DeleteBookButton id={book.id}/>
    </main>
  )
}