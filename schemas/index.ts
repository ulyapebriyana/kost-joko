import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
});

export const registerSchema = z.object({
    fullName: z.string().min(1).max(30),
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Password minimal 6 karakter").max(10, "Password maksimal 10 karakter"),
    passwordConfirmation: z.string().min(6, "Password minimal 6 karakter").max(10, "Password maksimal 10 karakter"),
}).refine(
    (values) => {
        return values.password === values.passwordConfirmation;
    },
    {
        message: "Password dan konfirmasi password tidak sesuai",
        path: ["passwordConfirmation"],
    }
);