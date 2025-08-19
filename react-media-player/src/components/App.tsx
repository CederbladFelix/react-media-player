import { Header } from "./Header";
import { Player } from "./Player";
import { SongSelector } from "./SongSelector";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className="main-container">
          <SongSelector />
          <Player />
        </main>
      </div>
    </>
  );
}

export default App;
