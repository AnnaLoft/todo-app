import React from 'react';
import styles from '../../style/input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const areEqual = (prevProps: InputProps, nextProps: InputProps) => {
  return (
    prevProps.value === nextProps.value 
  );
};

export const Input: React.FC<InputProps>  = React.memo(({
  value,
  onChange,
  placeholder,
  disabled,
  style,
}) => {
  console.log('input')
  return (
    <input
    className={`input ${styles.input}`}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
    />
  );
},areEqual);