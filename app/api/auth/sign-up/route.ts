import { NextResponse } from "next/server";
import bcrypt from "bcrypt"

import { registerSchema } from "@/schemas";

export async function POST(request: Request, response: Response) {
    try {
        const requestData = await request.json()
        const validated = registerSchema.safeParse(requestData)

        if (!validated.success) {
            const { errors } = validated.error
            let messages: string[] = [] 
            errors.map((error: any) => {
                messages.push(error.message)
            })
            return NextResponse.json({
                status: 422,
                message: messages
            })
        }

        const { fullName, email, password, passwordConfirmation } = validated.data;

        const hashedPassword = await bcrypt.hash(password, 10)



        return NextResponse.json({
            status: 201,
            message: "user registered sucessfully",
            data: validated.data
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            status: 500,
            message: "internal server error"
        })
    }
}