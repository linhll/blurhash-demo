import "./App.css";
import Image from "./components/Image";

function App() {
  const srcFromServer = `https://images.wallpaperscraft.com/image/single/girl_grass_city_213102_3840x2160.jpg?t=${Date.now()}#KH8*9ot7d[*IWSH|ulW8R6`;
  const url = new URL(srcFromServer);
  const hash = url.hash.substring(1);

  return (
    <div className="App">
      <header className="App-header">
        <Image hash={hash} src={srcFromServer} />
      </header>
    </div>
  );
}

export default App;
