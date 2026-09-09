import { NextResponse } from "next/server";
import {prisma }from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const book = await prisma.book.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!book) {
      return NextResponse.json(
        { error: "Book not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(book);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}