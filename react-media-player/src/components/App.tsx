import { Header } from "./Header";
import { Player } from "./Player";
import { PlayList } from "./PlayList";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className="main-container">
          <PlayList />
          <Player />
        </main>
      </div>
    </>
  );
}

export default App;
