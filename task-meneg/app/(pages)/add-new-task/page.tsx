"use client"

import React, { useActionState } from 'react'
import { createNewTask } from '@/app/lib/data/task.action'

const Page = () => {
    const initalState: any = { message: null, errors: {} }
    const [state, formAction] = useActionState(createNewTask, initalState)
    
    return (
        <div>
            <h1>Add New Task</h1>
            <form action={formAction}>
                <input type="text" name="title" placeholder='כותרת למשימה' />
                <input type="text" name="description" placeholder='תיאור למשימה' />
                <input type="date" name="ddLine" />
                <input type="text" name="adress" placeholder='כתובת למשימה' />
                <button type="submit">הוסף משימה</button>
            </form>
        </div>
    )
}

export default Page