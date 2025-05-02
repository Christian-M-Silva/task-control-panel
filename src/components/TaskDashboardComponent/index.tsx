import { useTaskContext } from "../../contexts/TaskContext";
import { StatusType } from "../../tipagens/types";
import { Card } from "../CardComponent";

export function TaskDashboard() {
    const { tasks } = useTaskContext()
    function isChecked(status: StatusType): boolean {
        return status === 'concluida'
    }

    return (
        <>
            <button
                className="mt-4 bg-red-700 text-white py-2 rounded-lg hover:bg-red-950 transition cursor-pointer"
            >
                Limpar modal
            </button>
            {tasks.map(task => <Card description={task.descriptions} id={task.id} isChecked={isChecked(task.status)} priority={task.priority} status={task.status} title={task.title}></Card>)}
        </>
    )
}