import type { SVGProps } from "react";
import HomeIcon from "./HomeIcon";
import SearchIcon from "./SearchIcon";
import PlaylistIcon from "./PlaylistIcon";

export type IconElement = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export { HomeIcon, SearchIcon, PlaylistIcon };
