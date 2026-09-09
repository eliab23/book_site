import BookCard from "@/components/BookCard";
import { prisma } from "@/lib/prisma";

export default async function BooksPage() {
    const books = await prisma.book.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <main className="min-h-screen bg-gray-50 p-8">
            
            <h1 className="mb-8 text-3xl font-bold">
                Books
            </h1>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        image={book.image}
                        pdf={book.pdf}
                    />
                ))}

            </div>

        </main>
    );
}