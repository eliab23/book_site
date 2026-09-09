import BookForm from "@/components/BookForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function EditBookPage({
     params,
}: {
     params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const book = await prisma.book.findUnique({
    where: {
        id: Number(id),
    }
  });
    if (!book) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Book
      </h1>

      <BookForm book={book} />
    </main>
  );
}