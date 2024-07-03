import { HomeIcon, IconElement, PlaylistIcon, SearchIcon } from "@/Icons";

export type NavigationCandidates = "/home" | "/search" | "/watchlist";

interface NavigationItem {
  title: string;
  href: NavigationCandidates;
}

export const NAVIGATIONS: NavigationItem[] = [
  { title: "Home", href: "/home" },
  { title: "Search", href: "/search" },
  { title: "Watchlist", href: "/watchlist" },
];

export const NAVIGATION_ORDER: NavigationCandidates[] = NAVIGATIONS.map(
  ({ href }) => href,
);

export const NAVIGATION_ICON: { [key: string]: IconElement } = {
  "/home": HomeIcon,
  "/search": SearchIcon,
  "/watchlist": PlaylistIcon,
};
