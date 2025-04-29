import React, { createContext, useContext, useState } from 'react';
import { ITask } from '../tipagens/interfaces';
import { StatusType, TaskWithoutIdType } from '../tipagens/types';

type ContextValueType = {
    tasks: ITask[];
    addTask: (task: TaskWithoutIdType) => void;
    editTask: (task: ITask) => void;
    removeTask: (id: string) => void;
    toggleStatusTask: (id: string, status: StatusType) => void;
};

const TaskContext = createContext<ContextValueType | undefined>(undefined);

type ChildrenProp = {
    children: React.ReactNode
}
export const TaskProvider = ({ children }: ChildrenProp) => {
    const [tasks, setTasks] = useState<ITask[]>([]);

    function addTask(task: TaskWithoutIdType) {
        const id = crypto.randomUUID();
        setTasks(prevTasks => [...prevTasks, { ...task, id }])
    }

    function editTask(task: ITask) {
        setTasks(prevTasks => prevTasks.map(taskFound => taskFound.id === task.id ? task : taskFound))
    };
    function removeTask(id: string) { 
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
    };
    function toggleStatusTask(id: string, status: StatusType) { 
        setTasks(prevTasks => prevTasks.map(taskFound => taskFound.id === id ? {...taskFound, status} : taskFound))
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, editTask, removeTask, toggleStatusTask }}>
            {children}
        </TaskContext.Provider>
    );
};


export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {

        throw new Error('useGenericContext deve ser usado dentro de GenericProvider');
    }
    return context;
};
