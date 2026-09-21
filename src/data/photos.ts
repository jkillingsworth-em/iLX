import type { SportId } from "./types";

/** Night-game photos from electro-mech.com — real LX cabinets, not generated art. */
export const fieldPhotos: Partial<Record<SportId, string>> = {
  baseball: "/images/installs/baseball.jpg",
  basketball: "/images/installs/basketball.jpg",
  football: "/images/installs/football.jpg",
  soccer: "/images/installs/soccer.jpg",
  multisport: "/images/installs/shots.jpg",
};

export const sitePhotos = {
  video: "/images/installs/video.jpg",
  shots: "/images/installs/shots.jpg",
  baseball: "/images/installs/baseball.jpg",
  basketball: "/images/installs/basketball.jpg",
  football: "/images/installs/football.jpg",
  soccer: "/images/installs/soccer.jpg",
  consoles: "/images/hardware/consoles.jpg",
  "mp-console": "/images/hardware/mp-console.jpg",
  "mm-console": "/images/hardware/mm-console.jpg",
  logo: "/images/em-logo.svg",
};

export function fieldPhotoFor(sport: string): string | undefined {
  return fieldPhotos[sport as SportId];
}
