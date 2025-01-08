"use client"

import React, { useActionState } from 'react'
import { createNewTask } from '@/app/lib/data/task.action'
import { State } from '@/app/typescript.type/interface';

const Page = () => {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createNewTask, initialState); // check - state was not right

    console.log(state)
    return (
        <div>
            <h1>Add New Task</h1>
            <div>{state.message}</div>
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