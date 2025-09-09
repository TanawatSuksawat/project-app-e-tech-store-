// placeholder
// src/lib/validators/product.ts
import { z } from "zod";


export const ProductCreateSchema = z.object({
    name: z.string().min(2),
    slug: z.string().min(2),
    description: z.string().min(10),
    price: z.number().int().min(0),
    images: z.array(z.string().url()).min(1),
    category: z.string().min(2),
    stock: z.number().int().min(0),
});