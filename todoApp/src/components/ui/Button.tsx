import React from 'react';
import styles from '../../style/button.module.scss';
import { observer } from 'mobx-react-lite';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button = observer(({ onClick, children, style }: ButtonProps) => {
  console.log('Button');
  
  return (
    <button  
      onClick={onClick} 
      className={`button ${styles.button}`}  
      style={style}
    >
      {children}
    </button>
  );
});
