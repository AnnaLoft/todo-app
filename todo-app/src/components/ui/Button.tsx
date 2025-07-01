import React from 'react';
import styles from '../../style/button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, style }) => {
  return (
    <button  onClick={onClick} className={`button ${styles.button}`} style={style} >
      {children}
    </button>
  );
};