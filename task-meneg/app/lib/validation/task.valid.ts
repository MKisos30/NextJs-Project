import { z } from 'zod'

export const taskValidation = z.object({
    title: z
        .string({ invalid_type_error: 'חייב לכלול אותיות' })
        .min(10, { message: 'מינימום 10 אותיות' }),
    description: z
        .string({ invalid_type_error: 'חייב לכלול אותיות' })
        .min(5, { message: 'מינימום 5 אותיות' }),
    ddLine: z.string().date(),
    adress: z.string({ invalid_type_error: 'חייב להכיל אותיות בלבד' }),
});