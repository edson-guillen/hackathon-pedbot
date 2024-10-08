import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Credenciais Inválidas!"
    }),
    password: z.string().min(1, {
        message: "Credenciais Inválidas!"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email é obrigatório"
    }),
    password: z.string().min(6, {
        message: "Mínimo de 6 caracteres"
    }),
    name: z.string().min(1, {
        message: "Nome é obrigatório",
    })

});