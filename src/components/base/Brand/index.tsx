import Link from "next/link";
import { brandStyles } from "./styles";

const Brand = () => {
  return (
    <Link href="/" style={brandStyles}>
      <h1 className="brand-logo-color" style={{ lineHeight: "27px" }}>
        99
      </h1>
      <p>Hotstar</p>
    </Link>
  );
};

export default Brand;
