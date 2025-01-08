"use server"

import { revalidatePath } from "next/cache";
import connectToDatabase from "../mongodb";
import Task from "../task.model";
import { taskValidation } from "../validation/task.valid"
import { redirect } from "next/navigation";
import { State } from "@/app/typescript.type/interface";

export const createNewTask = async (prevState: State, formData: FormData) => { //check
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

    try { // check
        await connectToDatabase();
        await Task.create({ title, description, ddLine, adress })

    } catch (error) {
        console.log(error);
        return {
            message: 'שגיאה, המשימה לא נוצרה',
        }
    }
    revalidatePath('/') // update cache of the page that you want to update 
    redirect('/') //redirect to the page that you want //check
}