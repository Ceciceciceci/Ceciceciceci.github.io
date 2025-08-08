import { type FC } from "react";
import Button from "./Button";

type AlertTypes = 'error' | 'warning';

interface AlertProps {
  text: string;
  type: AlertTypes;
  isVisible: boolean;
  isClosable?: boolean;
  onClose: () => void;
}

const Alert:FC<AlertProps> = ({text, type, isVisible, isClosable, onClose}) => {

  if (!isVisible) return null;

  return (
    <div className={`alert alert-${type} ${!isVisible && 'alert-hidden'}`}>
        <span>{text}</span>
        {isClosable && (
            <Button
                title='Close'
                disabled={false} 
                type={"disabled"} 
                size={"small"} 
                hasIcon={false} 
                onClick={onClose} 
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    onClose();
                  }
                }}
            />
        )}
    </div>
  )
}

export default Alert