import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { ModalProp, PriorityType, StatusType } from "../../tipagens/types";
import { Input } from "../InputComponent";
import { Select } from "../SelectComponent";
import { useTaskContext } from "../../contexts/TaskContext";



const ModalComponent = forwardRef<HTMLFormElement, ModalProp>((props, ref) => {

    const inputRefFocusTitle = useRef<HTMLInputElement>(null);

    const [titleValue, setTitleValue] = useState<string>('')
    const [descriptionValue, setDescriptionValue] = useState<string>('')
    const [statusValue, setStatusValue] = useState<StatusType>('pendente')
    const [priorityValue, setPriorityValue] = useState<PriorityType>('baixa')
    const isProps = !!props.task
    const { addTask, editTask } = useTaskContext()

    useEffect(() => {
        inputRefFocusTitle.current?.focus()
        if (props.task) {
            setDescriptionValue(props.task.descriptions)
            setPriorityValue(props.task.priority)
            setStatusValue(props.task.status)
            setTitleValue(props.task.title)
        }
    }, [props.isOpen])

    if (!props.isOpen) { return null }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
                {/* Botão de Fechar */}
                <button onClick={() => {
                    props.onClose()
                }}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">Adicionar Tarefa</h2>

                <form ref={ref} className="flex flex-col space-y-4">
                    {/* Input Título */}
                    <Input
                        ref={inputRefFocusTitle}
                        label="Título"
                        placeholder="Digite o título"
                        value={titleValue}
                        onChange={(e) => setTitleValue(e.target.value)}
                    />

                    {/* Input Descrição */}
                    <Input
                        label="Descrição"
                        placeholder="Digite a descrição"
                        value={descriptionValue}
                        onChange={(e) => setDescriptionValue(e.target.value)}

                    />

                    {/* Select Prioridade */}
                    <Select label="Prioridade" options={[
                        { options: 'Alta', value: 'alta' },
                        { options: 'Média', value: 'media' },
                        { options: 'Baixa', value: 'baixa' }
                    ]}
                        value={priorityValue}
                        onChange={(e) => setPriorityValue(e.target.value as PriorityType)}

                    />

                    {/* Select Status */}
                    <Select label="Status" options={[
                        { options: 'Pendente', value: 'pendente' },
                        { options: 'Em andamento', value: 'andamento' },
                        { options: 'Concluída', value: 'concluida' }

                    ]}
                        value={statusValue}
                        onChange={(e) => setStatusValue(e.target.value as StatusType)}
                    />

                    {/* Botão Adicionar ou editar */}
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            if (isProps) {
                                editTask({ descriptions: descriptionValue, priority: priorityValue, status: statusValue, title: titleValue, id: props.task?.id as string })
                            }
                            addTask({ descriptions: descriptionValue, priority: priorityValue, status: statusValue, title: titleValue })

                            props.onClose()
                        }}
                        type="submit"
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {isProps ? 'Editar' : 'Adicionar'}
                    </button>
                </form>
            </div>
        </div>);
});

export const Modal = memo(ModalComponent);
