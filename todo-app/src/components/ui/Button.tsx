import React from 'react';
import styles from '../../style/button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;

}

export const Button = React.memo(({ onClick, children }: ButtonProps) => {
  console.log("button");
  return (
    <button  onClick={onClick} className={`button ${styles.button}`}  >
      {children}
    </button>
  );
});
