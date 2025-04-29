import { forwardRef, memo } from "react";
import { ModalProp } from "../../tipagens/types";
import { Input } from "../InputComponent";
import { Select } from "../SelectComponent";



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
                    <Input
                        label="Título"
                        placeholder="Digite o título"
                    />

                    {/* Input Descrição */}
                    <Input
                        label="Descrição"
                        placeholder="Digite a descrição"
                    />

                    {/* Select Prioridade */}
                    <Select label="Prioridade" options={[
                        { options: 'Alta', value: 'alta' },
                        { options: 'Média', value: 'media' },
                        { options: 'Baixa', value: 'baixa' }

                    ]} />

                    {/* Select Status */}
                    <Select label="Status" options={[
                        { options: 'Pendente', value: 'pendente' },
                        { options: 'Em andamento', value: 'andamento' },
                        { options: 'Concluída', value: 'concluida' }

                    ]} />

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
