import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { addAlbums } from '../Services/FakeAlbumsService'
import getArtists from '../Services/FakeArtistsService'

export default function AddAlbum() {

    const [artists, setArtists] = useState(getArtists())
    const [albumName, setAlbumName] = useState("")
    const [artistName, setArtistName] = useState("")
    const [isAlbumNameSet, setAlbum] = useState(true)
    const [isArtistNameSet, setArtist] = useState(true)
    const [counter, setCounter] = useState(false)
    const history = useHistory()

    const onArtistSelect = (event) =>{
        setArtistName(event.target.value)
    }

    const onclicked = ()=>{
        setCounter(false)
        if(albumName.length==0) 
            setAlbum(false)
        else if(artistName.length==0) 
            setArtist(false)
        else{
            setCounter(false)
            addAlbums(albumName,artistName)
            setAlbum(true)
            setArtist(true)
            setCounter(true)
            setTimeout(()=>{
                history.push("/albums")
            },2000)
        }
    }

    return (
        <div>
            <h1 className="pagetitle">Add Album</h1>
            <div class="mb-3">
                <label for="albumName" class="form-label">Album Name</label>
                <input onChange={(event)=>{setAlbumName(event.target.value)}} type="text" class="form-control" id="albumname"/>
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
            <button onClick={onclicked} className="btn btn-primary" style={{"margin-right":"10px"}}>Add</button>
            <Link to={'/albums'} className="btn btn-danger">Cancel</Link>
            {!isAlbumNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Album Name is required</div>}
            {!isArtistNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Artist Name is required</div>}
            {isAlbumNameSet && isArtistNameSet && counter && <div class="myAlert-bottom alert alert-success" role="alert">Album added successfully</div>}
        </div>
    )
}
