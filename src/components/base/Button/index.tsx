import React, { CSSProperties, FC, HTMLAttributes } from "react";
import { buttonStyles } from "./styles";
import styles from "./styles.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "translucent";
}

const Button: FC<ButtonProps> = (props) => {
  const { children, style, variant = "secondary", ...restProps } = props;

  let background: CSSProperties["backgroundColor"];
  let color: CSSProperties["color"];
  let backdropFilter: CSSProperties["backdropFilter"];

  switch (variant) {
    case "primary":
      background = "whitesmoke";
      color = "black";
      break;
    case "translucent":
      background = "var(--translucent-background)";
      color = "white";
      backdropFilter = "blur(4px)";
      break;
    case "secondary":
    default:
      background = "";
      color = "white";
      break;
  }

  return (
    <button
      className={styles.button}
      {...restProps}
      style={{ ...buttonStyles, color, background, backdropFilter, ...style }}
    >
      {children}
    </button>
  );
};

export default Button;
