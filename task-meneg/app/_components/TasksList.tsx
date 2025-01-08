import React from 'react'
import { getAllTasks } from '../lib/data/task.data';

const TasksList = async () => {
    const data: any = await getAllTasks(); //check

    return (
        <div>
            {data.map((task: any, i: number) => ( //check
                <div key={i} className="onetask">
                    <section
                        className={`onetask__section ${task.done ? 'donecss' : 'nonecsss'}`}
                    >
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        {/* <p>{task.ddLine}</p> */}
                        <p>{task.adress}</p>
                        {/* <EditCheckBox done={task.done} id={task._id.toString()} /> */}
                    </section>
                    {/* <Link href={`/edit-task/${task._id}`}>Edit Task</Link> */}
                </div>
            ))}
        </div>
    )
}

export default TasksList