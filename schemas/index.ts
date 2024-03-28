import { z } from "zod";

export const bookingSchema = z.object({
    fullName: z.string().min(3).max(30),
    address: z.string().min(5).max(50),
    invoice: z.string()
});