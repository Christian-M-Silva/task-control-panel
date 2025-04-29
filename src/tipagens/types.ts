import { SelectHTMLAttributes } from "react";
import { ITask } from "./interfaces";

export type StatusType = "pendente" | "andamento" | "concluida";
export type PriorityType = "alta" | "media" | "baixa";
export type TaskWithoutIdType = Omit<ITask, "id">;
export type ModalProp = {
  task?: ITask;
  isOpen: boolean;
  onClose: () => void;
};

type Options = {
  value: string;
  options: string;
};
export type SelectProp = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Options[];
};
