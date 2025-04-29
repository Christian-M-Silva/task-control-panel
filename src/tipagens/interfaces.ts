import { InputHTMLAttributes } from "react";
import { PriorityType, StatusType } from "./types";

export interface ITask{
    title: string,
    descriptions: string,
    priority: PriorityType,
    status: StatusType,
    id: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}