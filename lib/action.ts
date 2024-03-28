"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export const createTransaction = async (values: any) => {
    const data = await prisma.transaction.create({
        data: values
    })

    revalidatePath('/')
    return redirect("/")
}