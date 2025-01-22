"use client"

import React, { useActionState } from 'react'
import { ITaskEditInputs, State } from '../typescript.type/interface'
import { editTask } from '../lib/data/task.action';


const TaskEditInputs = ({ task }: ITaskEditInputs) => {
    const initialState: State = { message: null, errors: {} };
    const [state, formAction] = useActionState(editTask, initialState);

    return (
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
                <input type="text" name="title" placeholder="כותרת למשימה" defaultValue={task.title} />
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
                <input type="text" name="description" placeholder='תיאור למשימה' defaultValue={task.description} />
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
                <input type="date" name="ddLine" defaultValue={task.ddLine} />
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
                <input type="text" name="adress" placeholder='כתובת למשימה' defaultValue={task.adress} />
            </div>

            <input type="hidden" name="_id" value={task._id} />
            <button type="submit">שמור</button>
        </form>
    )
}

export default TaskEditInputs