import { ComponentPropsWithoutRef, FC } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {}

export const Input: FC<InputProps> = (props) => {
  return <input className="rounded-md shadow-md p-4" {...props} />;
};
