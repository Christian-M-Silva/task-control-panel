import { SelectHTMLAttributes } from "react";
import { ITask } from "./interfaces";

type Options = {
  value: string;
  options: string;
};
export type StatusType = "pendente" | "andamento" | "concluida";
export type PriorityType = "alta" | "media" | "baixa";
export type TaskWithoutIdType = Omit<ITask, "id">;
export type ModalProp = {
  task?: ITask;
  isOpen: boolean;
  onClose: () => void;
};

export type SelectProp = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Options[];
};

export type CardProps = {
  status: StatusType
  title: string
  description: string
  priority: PriorityType
  id: string
  isChecked: boolean
}
