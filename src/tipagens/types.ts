import { ITask } from "./interfaces"

export type StatusType = 'Pendente'| 'Em andamento'| 'Concluída'
export type PriorityType = 'Alta'| 'Média'| 'Baixa'
export type TaskWithoutIdType = Omit<ITask, 'id'>
export type ModalProp = {
    task: ITask
}
export type SelectProp = {
    value: string
    options: string
}