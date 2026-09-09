import BookForm from "@/components/BookForm";

export default function AddBookPage() {
    return (
        <main className="mx-auto max-w-2xl p-8">
           <h1 className="mb-6 text-3xl font-bold">Add Book</h1> 

           <BookForm/> 
        </main>
    )
}