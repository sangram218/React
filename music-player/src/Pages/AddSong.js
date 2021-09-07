import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import getArtists from '../Services/FakeArtistsService'
import getAlbums from '../Services/FakeAlbumsService'
import { useHistory } from 'react-router'
import { addSongs } from '../Services/FakeSongsService'

export default function AddSong() {

    const [artists, setArtists] = useState(getArtists())
    const [albums, setAlbums] = useState(getAlbums())
    const [songName, setSongName] = useState("")
    const [albumName, setAlbumName] = useState("")
    const [artistName, setArtistName] = useState("")
    const [duration, setDuration] = useState(0)
    const [isSongNameSet, setSong] = useState(true)
    const [isArtistNameSet, setArtist] = useState(true)
    const [isAlbumNameSet, setAlbum] = useState(true)
    const [isDurationSet, setDuration1] = useState(true)
    const [counter, setCounter] = useState(false)
    const history = useHistory()

    const onArtistSelect = (event) =>{
        setArtistName(event.target.value)
    }

    const onAlbumSelect = (event) =>{
        console.log(event.target.value)
        setAlbumName(event.target.value)
    }

    const onclicked = ()=>{
        console.log(albumName.length)
        setCounter(false)
        if(songName.length==0)
            setSong(false)
        else if(artistName.length==0)
            setArtist(false)
        else if(albumName.length==0){
            console.log("h1")
            setAlbum(false)
        }
        else if(duration==0)
            setDuration1(false)
        else{
            setCounter(false)
            addSongs(songName,albumName,artistName,duration)
            setSong(true)
            setArtist(true)
            setAlbum(true)
            setDuration1(true)
            setCounter(true)
            setTimeout(()=>{
                history.push("/songs")
            },2000)
        }

    }

    return (
        <div>
            <h1 className="pagetitle">Add Song</h1>
            <div class="mb-3">
                <label for="songName" class="form-label">Song Name</label>
                <input onChange={(event)=>{setSongName(event.target.value)}} type="text" class="form-control" id="songName"/>
            </div>
            <div class="mb-3">
                <label for="artistName" class="form-label">Artist Name</label>
                <select onChange={(event)=>{onArtistSelect(event)}} class="form-select" aria-label="Default select example">
                    <option selected>Select Artist</option>
                    {artists.map((Artist)=>{
                        return <option value={Artist.name}>{Artist.name}</option>
                    })}
                </select>   
            </div>
            <div class="mb-3">
                <label for="albumName" class="form-label">Album Name</label>
                <select onChange={(event)=>{onAlbumSelect(event)}} class="form-select" aria-label="Default select example">
                <option selected>Select Album</option>
                    {albums.map((Album)=>{
                        return <option value={Album.albumName}>{Album.albumName}</option>
                    })}
                </select>   
            </div>
            <div class="mb-3">
                <label for="duration" class="form-label">Duration</label>
                <input onChange={(event)=>{setDuration(event.target.value)}} type="text" class="form-control" id="duration"/>
            </div>
            <button onClick={onclicked} className="btn btn-primary" style={{"margin-right":"10px"}}>Add</button>
            <Link to={'/songs'} className="btn btn-danger">Cancel</Link>
            {!isSongNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Song Name is required</div>}
            {!isAlbumNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Album Name is required</div>}
            {!isArtistNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Artist Name is required</div>}
            {!isDurationSet && <div class="myAlert-bottom alert alert-danger" role="alert">Duration is required</div>}
            {isSongNameSet && isAlbumNameSet && isArtistNameSet && isDurationSet && counter && <div class="myAlert-bottom alert alert-success" role="alert">Song added successfully</div>}
        </div>
    )
}
