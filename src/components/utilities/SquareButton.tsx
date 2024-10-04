import {ReactNode} from "react";

interface Properties {
  children?: ReactNode,
  className?: String,
  style?: Object,
  onClick?: () => void,
}

export default function SquareButton({ children,
                                       style,
                                       className,
                                       onClick = () => {} }: Properties) {

  return (
    <button className={"aspect-square p-px " + className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};