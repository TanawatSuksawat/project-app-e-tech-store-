// placeholder
// src/lib/validators/order.ts
import { z } from "zod";


export const CheckoutSchema = z.object({
    address: z.string().min(6),
    token: z.string().min(8),
});