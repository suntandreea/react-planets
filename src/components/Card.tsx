import React from 'react';

interface CardProps {
  color?: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'medium' | 'light';
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({color, className, children}) => {

  return (
    <div className={`card ${color ? color : ''} ${className ? className : ''}`}>
      {children}
    </div>
  );
};

export default Card;