import React, { type FC } from "react";

type ButtonSizes = 'small' | 'med' | 'large';

type ButtonTypes = 'primary' | 'secondary' | 'outline' | 'disabled';

interface ButtonProps {
  title: string;
  disabled: boolean;
  type: ButtonTypes;
  size: ButtonSizes;
  hasIcon: boolean;
  iconName?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

const Button: FC<ButtonProps> = ({
  title, 
  disabled, 
  type, 
  size,
  hasIcon = false,
  iconName,
  onClick, 
  onKeyDown,

}) => {
  const btnSizes = {
    small: 'btn-small',
    med: 'btn-med',
    large: 'btn-large'
  }

  return (
    <button
      className={`btn btn-${type} ${btnSizes[size]}}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      aria-label={title}
    >
      {hasIcon && <i className="">{iconName}</i>}
      {title}
    </button>
  )
}

export default Button;