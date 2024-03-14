import { z } from "zod" ;

export const searchSchema = z.object({
    title: z
    .string()
    .nonempty({message : "A pesquisa nao pode ser vazia"})
    .refine(value => !/^\s*$/.test(value),
    {message : "A pesquisa nao pode ter apenas espaços"})
})