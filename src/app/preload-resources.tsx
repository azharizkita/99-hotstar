"use client";

import { TMDB_API_URL, TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";
import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preconnect(TMDB_API_URL);
  ReactDOM.preconnect(TMDB_IMAGE_BASE_URL);

  return null;
}
