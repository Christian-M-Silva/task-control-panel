import { forwardRef, memo } from "react";
import { ModalProp } from "../../tipagens/types";



const ModalComponent = forwardRef<HTMLFormElement, ModalProp>((props, ref) => {
    console.log(props)
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">
                {/* Botão de Fechar */}
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer">
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-6 text-center">Adicionar Tarefa</h2>

                <form ref={ref} className="flex flex-col space-y-4">
                    {/* Input Título */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Digite o título"
                        />
                    </div>

                    {/* Input Descrição */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Digite a descrição"
                        />
                    </div>

                    {/* Select Prioridade */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Prioridade</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Selecione a prioridade</option>
                            {/* Mapear os priorityType aqui */}
                        </select>
                    </div>

                    {/* Select Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                            <option value="">Selecione o status</option>
                            {/* Mapear os statusType aqui */}
                        </select>
                    </div>

                    {/* Botão Adicionar */}
                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Adicionar
                    </button>
                </form>
            </div>
        </div>);
});

export const Modal = memo(ModalComponent);
