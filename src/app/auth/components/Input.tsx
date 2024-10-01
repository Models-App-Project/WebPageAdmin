const Input = ({ placeholder, type, value, onChange }: { placeholder: string, type: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full px-4 py-2 mb-5 bg-transparent border-0 border-b border-gray-600 focus:outline-none"
            value={value}
            onChange={onChange} // Adicionar o onChange
        />
    );
};

export default Input;