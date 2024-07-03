import React, { CSSProperties, FC, HTMLAttributes } from "react";
import { buttonStyles } from "./styles";
import styles from "./styles.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, style, variant = "secondary", ...restProps } = props;
  const background: CSSProperties["backgroundColor"] =
    variant === "primary" ? "whitesmoke" : "";
  const color: CSSProperties["color"] =
    variant === "primary" ? "black" : "white";

  return (
    <button
      className={styles.button}
      {...restProps}
      style={{ ...buttonStyles, color, background, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
