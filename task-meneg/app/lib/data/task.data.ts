"use server"

import connectToDatabase from "../mongodb"
import Task from "../task.model";

export const getAllTasks = async () => {
    try {
        await connectToDatabase();
        const allTasks = await Task.find();
        
        return allTasks;
    } catch (error) {
        console.log(error);
    }
}