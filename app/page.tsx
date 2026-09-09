import BookCard from "@/components/BookCard";
import Navbar from "@/components/Navbar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      
      <h1 className="text-3xl font-bold">
        Book Management System
      </h1>
      <p className="mt-4">
        Manage your books frome on place.
      </p>

      <div className="mt-6 flex gap-4">
        <Link href={"/books"}>View Books</Link>

        <Link href={"/add-book"}>Add Book</Link>
      </div>
    </main>
  );
}
