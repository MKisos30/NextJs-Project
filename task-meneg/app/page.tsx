import { Suspense } from "react";
import TasksList from "./_components/TasksList";
import Link from "next/link";

export default async function Home() {
  return (
    <section>
      <h1>My List</h1>
      <Link href="/add-new-task">Add new Task</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <TasksList />
      </Suspense>
    </section>
  );
}





