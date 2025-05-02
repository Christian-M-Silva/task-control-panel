import { useMemo } from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { StatusType } from "../../tipagens/types";
import { Card } from "../CardComponent";

export function TaskDashboard() {
    const { tasks } = useTaskContext()
    function isChecked(status: StatusType): boolean {
        return status === 'concluida'
    }

    const totalTasks = useMemo(() => {
        return tasks.length
      }, [tasks.length]);


    return (
        <>
            {tasks.map(task => <Card description={task.description} id={task.id} isChecked={isChecked(task.status)} priority={task.priority} status={task.status} title={task.title}></Card>)}

            <span className="text-emerald-500">
                Total de tasks: {totalTasks}
            </span>
        </>
    )
}