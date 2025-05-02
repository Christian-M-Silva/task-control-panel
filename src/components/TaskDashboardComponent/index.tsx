import { useTaskContext } from "../../contexts/TaskContext";
import { StatusType } from "../../tipagens/types";
import { Card } from "../CardComponent";

export function TaskDashboard() {
    const {tasks} = useTaskContext()
    function isChecked(status:StatusType): boolean {
        return status === 'concluida' 
    }

    return (
        <>
            {tasks.map(task => <Card description={task.descriptions} id={task.id} isChecked={isChecked(task.status)} priority={task.priority} status={task.status} title={task.title}></Card>)}
        </>
    )
}