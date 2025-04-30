import { Pencil, Trash2 } from "lucide-react";
import { memo } from "react";

function CardComponent() {
    return (
        <div className="flex flex-col p-4 border rounded-2xl shadow-sm bg-white w-full max-w-md">
          <div className="flex justify-between items-start">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
              />
              <div>
                <h2 className="text-lg font-semibold">Titulo visual</h2>
                <p className="text-gray-600 text-sm">Descrição maior descrita com mais uinformações e mais dados nsssssssssssssssssssssssssssssssnssssssssssssssss</p>
              </div>
            </div>
            <span className={`text-sm font-medium`}>
             baixa
            </span>
          </div>
    
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">Em andamento</span>
            <div className="flex gap-2">
              <button
                className="text-blue-600 hover:text-blue-800 transition-colors"
                title="Editar"
              >
                <Pencil size={18} />
              </button>
              <button
                className="text-red-600 hover:text-red-800 transition-colors"
                title="Remover"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      );
}

export const Card = memo(CardComponent);