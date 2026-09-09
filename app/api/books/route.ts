import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export  async function GET() {
    const books = await prisma.book.findMany({
        orderBy:{
            createdAt: "desc",
        },
    });
    return NextResponse.json(books);

}

export async function POST(request: Request) {
    const body = await request.json();

    const book = await prisma.book.create({
        data:{
            title: body.title,
            author: body.author,
            description: body.description,
            image: body.image || null,
            pdf: body.pdf || null,
        },
    });
    return NextResponse.json(book, { status: 201})
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  const book = await prisma.book.update({
    where: {
      id: Number(id),
    },
    data: {
      title: body.title,
      author: body.author,
      description: body.description,
      image: body.image || null,
      pdf: body.pdf || null,
    },
  });

  return NextResponse.json(book);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.book.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json({
    message: "Book deleted successfully",
  });
}