import { PlaylistAddIcon } from "@/Icons";
import { Flex } from "../base";
import Button from "../base/Button";
import {
  buttonContainerStyle,
  flexContentStyle,
  flexInnerContainerStyle,
} from "./styles";
import styles from "./styles.module.css";
import { Fragment } from "react";

interface ContentSectionProps {
  itemName: string;
  itemDescription: string;
}

export const HerotronContent = ({
  itemName,
  itemDescription,
}: ContentSectionProps) => {
  return (
    <Flex style={flexInnerContainerStyle}>
      <Flex style={flexContentStyle}>
        <Fragment key={itemName}>
          <h2 className={styles.slideIn}>{itemName}</h2>
          <p className={`${styles.descriptionText} ${styles.slideIn}`}>
            {itemDescription}
          </p>
        </Fragment>
        <Flex style={buttonContainerStyle}>
          <Button
            variant="translucent"
            style={{ width: "100%" }}
            aria-label="More details"
          >
            More details
          </Button>
          <Button
            variant="translucent"
            style={{ width: "fit-content" }}
            aria-label="Watch list"
          >
            <PlaylistAddIcon width="1.5em" height="1.5em" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
