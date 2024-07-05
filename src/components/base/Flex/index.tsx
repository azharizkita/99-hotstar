import React, { forwardRef, HTMLAttributes, CSSProperties } from "react";
import { flexStyles } from "./styles";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  style?: CSSProperties;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { children, style, ...restProps } = props;
  return (
    <div ref={ref} {...restProps} style={{ ...flexStyles, ...style }}>
      {children}
    </div>
  );
});

Flex.displayName = "Flex";

export default Flex;
