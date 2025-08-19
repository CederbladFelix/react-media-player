import type { ReactElement } from "react";

export const Header = (): ReactElement => {
  return (
    <header className="header">
      <span className="material-symbols-outlined">arrow_back_ios</span>
      <h2>Playlist - Moody</h2>
      <span className="material-symbols-outlined">more_vert</span>
    </header>
  );
};
