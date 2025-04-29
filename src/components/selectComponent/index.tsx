import { SelectProp } from "../../tipagens/types";

export function Select({ label, options, ...rest }: SelectProp) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <select {...rest} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
                {options.map((option, index) => <option value={option.value} key={index}>{option.options}</option>)}
            </select>
        </div>
    )
}