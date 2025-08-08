import { type FC } from "react";

interface InputProps {
  label?: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'phone';
  placeholder?: string;
  onChange: () => void;
  value: string | number;
}

const TextInput: FC<InputProps> = ({label, name, type, onChange, value, ...rest}) => {
  return (
    <div className="input-wrapper">
      {label && (<label>{label}</label>)}
      <input 
        type={type}
        name={name}
        aria-label={label}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  )
}

export default TextInput;