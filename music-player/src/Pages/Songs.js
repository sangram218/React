import React,{useState} from 'react'
import getAlbums from '../Services/FakeAlbumsService'
import getArtists from '../Services/FakeArtistsService'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function Songs() {

    const [artists, setArtists] = useState(getArtists())
    const [albums, setAlbums] = useState(getAlbums())
    const [artistName, setArtistId] = useState("0")
    const [albumName, setAlbumId] = useState("0")
    const [isArtistSelected,setSelectArtist] = useState(true)
    const [isAlbumSelected,setSelectAlbum] = useState(true)
    const history = useHistory()

    const onArtistSelect = (event)=>{
        setArtistId(event.target.value)
    }

    const onAlbumSelect = (event)=>{
        setAlbumId(event.target.value)
    }

    const onClickedArtist = ()=>{
        if(artistName==="0")
            setSelectArtist(false)
        else{
            setSelectArtist(true)
            history.push(`/displaySongs/${artistName}/${albumName}`)
        }
        
    }

    const onClickedAlbum = ()=>{
        if(albumName==="0")
            setSelectAlbum(false)
        else{
            setSelectAlbum(true)
            history.push(`/displaySongs/${artistName}/${albumName}`)
        }
        
    }

    return (
        <div>
            <h1 className="pagetitle">Songs</h1>
            <Link to={'/addSong'} className="btn btn-primary">Add Song</Link>
            <div style={{marginTop:"25px"}} class="mb-3">
                <label for="artistName" class="form-label">Artist Name</label>
                <select onChange={(event)=>{onArtistSelect(event)}} class="form-select" aria-label="Default select example">
                    <option selected>Select Artist</option>
                    {artists.map((Artist)=>{
                        return <option value={Artist.name}>{Artist.name}</option>
                    })}
                </select>   
            </div>
            <button onClick={onClickedArtist} class="btn btn-secondary">Display Songs</button>
            <div style={{marginTop:"25px"}} class="mb-3">
                <label for="albumName" class="form-label">Album Name</label>
                <select onChange={(event)=>{onAlbumSelect(event)}} class="form-select" aria-label="Default select example">
                <option selected>Select Album</option>
                    {albums.map((Album)=>{
                        return <option value={Album.albumName}>{Album.albumName}</option>
                    })}
                </select>   
            </div>
            <button onClick={onClickedAlbum} class="btn btn-secondary">Display Songs</button>
            {!isArtistSelected && <div class="myAlert-bottom alert alert-danger" role="alert">Artist Name is required</div>}
            {!isAlbumSelected && <div class="myAlert-bottom alert alert-danger" role="alert">Album Name is required</div>}
        </div>
    )
}
