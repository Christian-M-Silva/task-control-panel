import { ITask } from "./interfaces"

export type StatusType = 'Pendente'| 'Em andamento'| 'Concluída'
export type PriorityType = 'Alta'| 'Média'| 'Baixa'
export type TaskWithoutIdType = Omit<ITask, 'id'>
export type ModalProp = {
    task: ITask
}

type Options = {
    value: string
    options: string
}
export type SelectProp = {
    label: string
    options: Options[]
}