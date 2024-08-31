"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function addTodo(title: string) {
  await prisma.todo.create({
    data: { title },
  });
  revalidatePath("/");
}

export async function updateTodo(id: string, completed: boolean) {
  await prisma.todo.update({
    where: { id },
    data: { completed },
  });
  revalidatePath("/");
}

export async function deleteTodo(id: string) {
  await prisma.todo.delete({ where: { id } });
  revalidatePath("/");
}
