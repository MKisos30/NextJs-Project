import { Suspense } from "react";
import TasksList from "./_components/TasksList";

export default async function Home() {
  return (
    <section>
      <h1>My List</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TasksList />
      </Suspense>
    </section>
  );
}
