import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../style/button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = observer(({ 
  onClick, 
  children, 
  style }) => {
    
  return (
    <button onClick={onClick} className={`button ${styles.button}`} style={style}>
      {children}
    </button>
  );
});