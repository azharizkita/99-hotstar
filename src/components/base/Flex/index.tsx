import React, { FC, HTMLAttributes } from "react";
import { flexStyles } from "./styles";

const Flex: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, style, ...restProps } = props;
  return (
    <div {...restProps} style={{ ...flexStyles, ...style }}>
      {children}
    </div>
  );
};

export default Flex;
