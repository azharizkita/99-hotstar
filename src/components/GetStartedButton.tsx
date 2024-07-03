"use client";

import { useRouter } from "next/navigation";
import Button from "./base/Button";

const GetStartedButton = () => {
  const { replace } = useRouter();
  const handleOnClick = () => {
    replace("/home");
  };
  return (
    <Button
      onClick={handleOnClick}
      variant="primary"
      style={{ alignSelf: "end" }}
    >
      Get started
    </Button>
  );
};

export default GetStartedButton;
