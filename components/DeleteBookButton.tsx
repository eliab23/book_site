"use client"

import { useRouter } from "next/navigation";

export default function DeleteBookButton({
    id,
}: {
    id: number;
}) {
    const router = useRouter();

    async  function handleDelete(){
            const confirmed = confirm(
                "are you sure you want to delete this book/"
            );

            if(!confirmed){
                return;
            }
            
            const response = await fetch(`/api/books/${id}`,{
                method: "DELETE",
    });
    if(!response.ok)
     {
        alert("Failed to delete the book");
        return;
     }
    
    router.push("/books");
    router.refresh();
    }

    return (
        <button
      onClick={handleDelete}
      className="rounded bg-red-600 px-4 py-2 text-white"
    >
      Delete
    </button>
    )
}