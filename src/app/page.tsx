import { Flex } from "@/components/base";
import GetStartedButton from "@/components/GetStartedButton";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";

export default function Home() {
  return (
    <Flex
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: spacing(4),
        ...contentSafeAreaStyles,
      }}
    >
      <Flex style={{ flexGrow: 0, alignItems: "center", lineHeight: "30px" }}>
        <h2 style={{ lineHeight: "inherit" }}>Welcome to</h2>
        <h1 className="brand-logo-color" style={{ lineHeight: "inherit" }}>
          99 Hotstar
        </h1>
      </Flex>
      <p style={{ textAlign: "justify" }}>
        99 Hotstar is a movie catalog app built with Next.js and no UI
        libraries. Explore our vast collection of movies with a sleek, intuitive
        interface. Discover blockbusters, classics, and hidden gems in a
        user-friendly environment crafted for movie enthusiasts.
      </p>
      <GetStartedButton />
    </Flex>
  );
}
