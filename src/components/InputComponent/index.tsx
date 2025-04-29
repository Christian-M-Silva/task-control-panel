import { forwardRef } from "react";
import { InputProps } from "../../tipagens/interfaces";

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
            <input
                ref={ref}
                {...rest}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
});
