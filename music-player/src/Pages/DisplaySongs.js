import React from 'react'
import getAlbums from '../Services/FakeAlbumsService'
import getArtists from '../Services/FakeArtistsService'
import getSongs from '../Services/FakeSongsService'
import { useState } from 'react'

export default function DisplaySongs(props) {
    // console.log(props.match.params.artistName)
    // console.log(props.match.params.albumName)
    const {artistName,albumName} = props.match.params
    const [artists, setArtists] = useState(getArtists())
    const [albums, setAlbums] = useState(getAlbums())
    const [songs, setSongs] = useState(getSongs())
    let songsArray=[];
    if(albumName=="0"){
    artists.map((artist)=>{
        if(artist.name===artistName){
            albums.map((album)=>{
                if(album.artistName===artist.name){
                    songs.map((song)=>{
                        if(song.albumName===album.albumName)
                            songsArray.push({song:song.songName,artistName:artist.name,albumName:album.albumName,duration:song.duration})
                    })
                }
                    
            })
            
        }
            
    })}

    if(artistName=="0"){
        albums.map((album)=>{
            if(album.albumName===albumName){
                artists.map((artist)=>{
                    if(artist.name===album.artistName){
                        songs.map((song)=>{
                            if(song.albumName===album.albumName)
                                songsArray.push({song:song.songName,artistName:artist.name,albumName:album.albumName,duration:song.duration})
                        })
                            }
                        
                })
            }
                
        })}

    // console.log(songsArray)    

    return (
        <div>
            <h1 className="pagetitle">Songs</h1>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Song</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                {songsArray.map((song) => {
                        return <tr>
                            <td>{song.song}</td>
                            <td>{song.artistName}</td>
                            <td>{song.albumName}</td>
                            <td>{song.duration}</td>
                        </tr>
                    })}
                </tbody>
        </table>
        </div>
    )
}
