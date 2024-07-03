"use client";

import Link, { type LinkProps } from "next/link";
import { useState, useEffect, type CSSProperties, type FC } from "react";
import { usePathname } from "next/navigation";
import { NAVIGATION_ICON, NavigationCandidates } from "@/constants/navigation";
import styles from "./styles.module.css";
import { navigationButtonStyles } from "./styles";

interface NavigationButtonProps {
  title?: string;
  style?: CSSProperties;
  expand: boolean;
}

interface INavigationButton extends LinkProps, NavigationButtonProps {
  href: NavigationCandidates;
}

const NavigationButton: FC<INavigationButton> = ({
  title,
  style,
  href,
  expand,
  ...restProps
}) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (expand) {
      setShouldAnimate(true);
    }
  }, [expand]);

  const Icon = NAVIGATION_ICON[href];
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${styles.navWrapper} ${isHovered ? styles.navWrapperHover : ""} ${isActive ? styles.active : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ ...navigationButtonStyles, ...style }}
      {...restProps}
    >
      <Icon
        className={`${styles.navIcon} ${isHovered ? styles.navIconHover : ""} ${isActive ? styles.active : ""}`}
      />
      {title && shouldAnimate && (
        <p
          className={`${styles.navTitle} ${expand ? styles.fadeIn : styles.fadeOut}`}
        >
          {title}
        </p>
      )}
    </Link>
  );
};

export default NavigationButton;
