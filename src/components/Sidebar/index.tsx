"use client";

import { useState } from "react";
import { Brand, Flex, NavigationButton } from "../base";
import { spacing } from "@/styles/utils";
import { NAVIGATIONS } from "@/constants/navigation";
import useDebouncedValue from "@/hooks/use-debounced-value";
import styles from "./styles.module.css";
import { sidebarStyles } from "./styles";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const debouncedIsHovered = useDebouncedValue(isHovered, 550);

  return (
    <>
      <Flex
        id="backdrop"
        className={`${styles.backdrop} ${debouncedIsHovered ? styles.backdropExpanded : ""}`}
      />
      <Flex style={sidebarStyles}>
        <Brand />
        <Flex
          id="menu"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            alignItems: "start",
            justifyContent: "center",
            gap: spacing(10),
            flexShrink: 0,
          }}
        >
          {NAVIGATIONS.map(({ href, title }, i) => (
            <NavigationButton
              key={i}
              href={href}
              title={title}
              expand={debouncedIsHovered}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Sidebar;
