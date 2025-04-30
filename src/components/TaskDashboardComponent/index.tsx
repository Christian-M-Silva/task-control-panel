import { StatusType } from "../../tipagens/types";

export function TaskDashboard() {
    function isChecked(status:StatusType): boolean {
        return status === 'concluida' 
    }
}