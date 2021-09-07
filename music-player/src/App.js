import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Artists from './Pages/Artists';
import Albums from './Pages/Albums';
import Songs from './Pages/Songs';
import AddArtist from './Pages/AddArtist';
import AddAlbum from './Pages/AddAlbum';
import UpdateArtist from './Pages/UpdateArtist';
import UpdateAlbum from './Pages/UpdateAlbum';
import DisplaySongs from './Pages/DisplaySongs';
import AddSong from './Pages/AddSong';

function App() {
  return (
    <div data-testid="id-1">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div data-testid="id-3" className="container-fluid">
            <Link className="navbar-brand" to={'/artists'}>eMCee</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/artists'}>Artists</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/albums'}>Albums</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to={'/songs'}>Songs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route path="/artists" component={Artists}/>
            <Route path="/albums" component={Albums}/>
            <Route path="/songs" component={Songs}/>
            <Route path="/addArtist" component={AddArtist}/>
            <Route path="/addAlbum" component={AddAlbum}/>
            <Route path="/updateArtist/:id/:name" component={UpdateArtist}/>
            <Route path="/updateAlbum/:id/:albumName/:artistName" component={UpdateAlbum}/>
            <Route path="/displaySongs/:artistName/:albumName" component={DisplaySongs}/>
            <Route path="/addSong" component={AddSong}/>
            <Route path="/" component={Artists}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
