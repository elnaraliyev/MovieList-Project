import { useSelector } from "react-redux";
import "./App.css";

import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { List } from "./components/Lists/Lists";
import { Favourites } from "./components/Favourites/Favourites";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          
            <Search />
            <List />
      
        </main>
        <aside>
          <Favourites/>
        </aside>
      </div>
  );
}

export default App;
