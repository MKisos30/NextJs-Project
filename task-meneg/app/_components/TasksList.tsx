import React from 'react'
import { getAllTasks } from '../lib/data/task.data';
import { Itask } from '../typescript.type/interface';
import Link from 'next/link';

const TasksList = async () => {
    const data: Itask[] = await getAllTasks() || [];

    return (
        <div>
            {data.map((task, i: number) => (
                <div key={i} className="onetask">
                    <section
                        className={`onetask__section ${task.done ? 'donecss' : 'nonecsss'}`}
                    >
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <p>{task.ddLine.toLocaleDateString()}</p>
                        <p>{task.adress}</p>
                        {/* <EditCheckBox done={task.done} id={task._id.toString()} /> */}
                    </section>
                    <Link href={`/edit-task/${task._id}`}>Edit task</Link>
                </div>
            ))}
        </div>
    )
}

export default TasksList