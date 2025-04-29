import { SelectProp } from "../../tipagens/types";

export function Select({ label, options }: SelectProp) {
    <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            {options.map(option => <option value={option.value}>{option.options}</option>)}
        </select>
    </div>
}