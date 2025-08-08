import {useState, type ChangeEvent, type FC} from 'react';

type Option = {
  label: string;
  value: string | number;
}

interface SelectProps{
  label?: string;
  name: string;
  options: Option[];
  defaultValue?: string;
  onChange: (selectedValue: string) => void;
  disabled: boolean;
}

//  Design a dropdown
const Select: FC<SelectProps> = ({label, name, options, defaultValue, onChange, disabled}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || '');
  // handleChange

  const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(newValue);
  }

  return (
    <>
      <div className="select-wrapper">
        {label && <label htmlFor={name}>{label}</label>}
        <select 
          name={name} 
          value={selectedValue} 
          onChange={handleChange} 
          aria-label={label}
          disabled={disabled}
        >
            {options.map((o:Option) => {
              return (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              )
            })}
        </select>
      </div>
    </>
  )
}

export default Select;