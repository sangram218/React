import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import { updateAlbums } from '../Services/FakeAlbumsService';
import { Link } from 'react-router-dom';

export default function UpdateAlbum(props) {

    let album = props.match.params.albumName;
    let artist = props.match.params.artistName;
    const [counter, setCounter] = useState(false)
    const [albumName, setAlbumName] = useState(album)
    const [isAlbumNameSet, setAlbum] = useState(true)
    const history = useHistory()

    const onclicked = ()=>{
        setCounter(false)
        if(albumName.length==0) 
            setAlbum(false)
        else{
            updateAlbums(albumName,props.match.params.id)
            setAlbum(true)
            setCounter(true)
            setTimeout(()=>{
                history.push("/albums")
            },2000)
        }
    }

    return (
        <div>
            <h1 className="pagetitle">Update Album</h1>
            <div class="mb-3">
                <label for="albumName" class="form-label">Album Name</label>
                <input value={albumName} onChange={(event)=>{setAlbumName(event.target.value)}} type="text" class="form-control" id="albumname"/>
            </div>
            <button onClick={onclicked} className="btn btn-primary" style={{ "margin-right": "10px" }}>Update</button>
            <Link to={'/albums'} className="btn btn-danger">Cancel</Link>
            {!isAlbumNameSet && <div class="myAlert-bottom alert alert-danger" role="alert">Album Name is required</div>}
            {isAlbumNameSet && counter && <div class="myAlert-bottom alert alert-success" role="alert">Album updated successfully</div>}
        </div>
    )
}
