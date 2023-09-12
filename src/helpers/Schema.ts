import { z } from "zod";

export const validationSchema = z.object({
    category: z.string().min(3, { message: "3 caracteres requeridos" }),
    price: z.string().min(1, { message: "1 caractere requerido" }),
    description: z.string().min(3, { message: "3 caracteres requeridos" }),
    type: z.string().min(2, { message: "Selecione uma opção" }).nullable(),
});
