"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

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

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const data = {
            title,
            author,
            description,
            image,
            pdf,
        };
        const url = book? `/api/books/${book.id}`:
         "/api/books";

        const method = book ? "PUT" : "POST";

        const response = await fetch (url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            alert("Something went wrong");
            return;
        }

        router.push("/books");
        router.refresh();
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value ={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Book title"
                required
                className="w-full rounded border p-2" />
                
            <input
                value ={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author"
                required
                className="w-full rounded border p-2" />
                
            <input
                value ={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                required
                className="w-full rounded border p-2" />
                
            <input
                value ={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
                required
                className="w-full rounded border p-2" />
                
            <input
                value ={pdf}
                onChange={(e) => setPdf(e.target.value)}
                placeholder="PDF URL"
                required
                className="w-full rounded border p-2" />

            <button
                type="submit"
                className="rounded bg-black px-4 py-2 text-white cursor-pointer hover:bg-gray-800">
                    {book ? "Update Book" : "Add Book"}</button>  
        </form>
    )
}