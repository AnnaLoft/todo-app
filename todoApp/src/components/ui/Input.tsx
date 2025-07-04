import React from 'react';
import styles from '../../style/input.module.scss';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  disabled,
  style,
}) => {

  console.log('Input');

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
};