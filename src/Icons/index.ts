// I used https://fonts.google.com/icons for icons and
// https://react-svgr.com/playground/ to transform the
// SVGs into react component.

import type { SVGProps } from "react";
import HomeIcon from "./HomeIcon";
import SearchIcon from "./SearchIcon";
import PlaylistIcon from "./PlaylistIcon";
import PlaylistAddIcon from "./PlaylistAddIcon";

export type IconElement = (props: SVGProps<SVGSVGElement>) => JSX.Element;

export { HomeIcon, SearchIcon, PlaylistIcon, PlaylistAddIcon };
