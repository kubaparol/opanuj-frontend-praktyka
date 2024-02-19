import { ComponentPropsWithoutRef, FC } from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      {...rest}
    >
      {text}
    </button>
  );
};
