import { Pencil, Trash2 } from "lucide-react";
import { memo, useState } from "react";
import { CardProps, PriorityType, StatusType } from "../../tipagens/types";
import { useTaskContext } from "../../contexts/TaskContext";
import { Modal } from "../ModalComponent";

function CardComponent({ description, id, isChecked, priority, status, title }: CardProps) {
  const { toggleStatusTask, removeTask } = useTaskContext()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  function serializarLabels(label: StatusType | PriorityType) {
    switch (label) {
      case "alta":
        return "Alta"
      case "andamento":
        return "Em andamento"
      case "baixa":
        return "Baixa"
      case "concluida":
        return "Concluída"
      case "media":
        return "Média"
      case "pendente":
        return "Pendente"
    }
  }
  function alterStatus(isFinish: boolean) {
    const newStatus: StatusType = isFinish ? 'concluida' : 'pendente'
    toggleStatusTask(id, newStatus)
  }

  return (
    <div className="flex flex-col p-4 border rounded-2xl shadow-sm bg-white w-full max-w-md">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            className="mt-1"
            checked={isChecked}
            onClick={() => { alterStatus(!isChecked) }}
          />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
        <span className={`text-sm font-medium`}>
          {serializarLabels(priority)}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">{serializarLabels(status)}</span>
        <div className="flex gap-2">
          <button
            className="text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            title="Editar"
            onClick={() => setIsOpenModal((prevValue) => !prevValue)}
          >
            <Pencil size={18} />
          </button>
          <button
            className="text-red-600 hover:text-red-800 transition-colors cursor-pointer"
            title="Remover"
            onClick={() => removeTask(id)}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal((prevValue) => !prevValue)} task={{description, id, priority, status, title}} />
    </div>
  );
}

export const Card = memo(CardComponent);