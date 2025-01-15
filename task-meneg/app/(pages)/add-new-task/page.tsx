"use client"

import React, { useActionState } from 'react'
import { createNewTask } from '@/app/lib/data/task.action'
import { State } from '@/app/typescript.type/interface';

const Page = () => {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(createNewTask, initialState);

    return (
        <div>
            <h1>Add New Task</h1>
            <div>{state.message}</div>
            <form action={formAction}>
                <div>

                    <div>
                        {state.errors?.title &&
                            state.errors.title.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <input type="text" name="title" placeholder='כותרת למשימה' />
                </div>
                <div>
                    <div>
                        {state.errors?.description &&
                            state.errors.description.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <input type="text" name="description" placeholder='תיאור למשימה' />
                </div>
                <div>
                    <div>
                        {state.errors?.ddLine &&
                            state.errors.ddLine.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <input type="date" name="ddLine" />
                </div>
                <div>
                    <div>
                        {state.errors?.adress &&
                            state.errors.adress.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                    <input type="text" name="adress" placeholder='כתובת למשימה' />
                </div>
                <button type="submit">הוסף משימה</button>
            </form>
        </div>
    )
}

export default Page