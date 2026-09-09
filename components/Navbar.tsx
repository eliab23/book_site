import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between border-b p-4">
            <Link href="/">
                Book App
            </Link>
            <div className="flex gap-4">
                <Link href="/books">Books</Link>
                <Link href="/add-book">Add Book</Link>
            </div>
        </nav>
        
    )
}