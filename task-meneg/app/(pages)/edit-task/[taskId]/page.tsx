import { getOneTask } from '@/app/lib/data/task.action';
import { IPageEdit, Itask } from '@/app/typescript.type/interface'
import React from 'react'

const Page = async ({params}: IPageEdit) => {
  const {taskId} = params;
  const task: any = await getOneTask(taskId) 


  console.log(task)

  return (
    <div>Edit Task Page</div>
  )
}

export default Page