"use server";

import TaskEditInputs from "@/app/_components/TaskEditInputs";
import { getOneTask } from "@/app/lib/data/task.action";
import { IPageEdit } from "@/app/typescript.type/interface";

const Page = async ({ params }: IPageEdit) => {
  const { taskId } = params;
  const task: any = await getOneTask(taskId)

  return (
    <div>
      <TaskEditInputs task={JSON.parse(JSON.stringify(task))} />
    </div>
  )
}

export default Page