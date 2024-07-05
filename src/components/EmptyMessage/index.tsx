import { Flex } from "../base";
import { emptyMessageStyle } from "./styles";

const EmptyMessage = (props: { message: string }) => {
  const { message } = props;
  return (
    <Flex style={emptyMessageStyle}>
      <p>{message}</p>
    </Flex>
  );
};

export default EmptyMessage;
