import { ITask } from "./interfaces"

export type StatusType = 'Pendente'| 'Em andamento'| 'Concluída'
export type PriorityType = 'Alta'| 'Média'| 'Baixa'
export type TaskWithoutIdType = Omit<ITask, 'id'>