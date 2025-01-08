"use server"

import { revalidatePath } from "next/cache";
import connectToDatabase from "../mongodb";
import Task from "../task.model";
import { taskValidation } from "../validation/task.valid"
import { redirect } from "next/navigation";

export const createNewTask = async (prevState: any, formData: FormData) => { //check
    try {
        const taskValid = taskValidation.safeParse({
            title: formData.get('title'),
            description: formData.get('description'),
            ddLine: formData.get('ddLine'),
            adress: formData.get('adress'),
        });

        if (!taskValid.success) {
            return {
                errors: taskValid.error.flatten().fieldErrors,
                message: 'שגיאה, המשימה לא נוצרה',
            };
        }

        const { title, description, ddLine, adress } = taskValid.data;

        await connectToDatabase();
        await Task.create({ title, description, ddLine, adress })

        revalidatePath('/') // update cache of the page that you want to update 
        redirect('/') //redirect to the page that you want //check

    } catch (error) {
        console.log(error);
    }
}