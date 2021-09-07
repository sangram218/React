import getSongs from "./FakeSongsService";
import { updateAlbumOfSong } from "./FakeSongsService";

const Albums = [
    {
        id:1,
        albumName:"Astroworld",
        artistName:"Travis Scott",
        duration:0
    },
    {
        id:2,
        albumName:"The Real Slim Shady",
        artistName:"Eminem",
        duration:0
    },
    {
        id:3,
        albumName:"Rolling Papers",
        artistName:"Wiz Khalifa",
        duration:0
    }
]

function getDuration(){
    let songs = getSongs()
    let duration
    Albums.map(Album=>{
        duration=0
        songs.map(song=>{
            if(Album.albumName===song.albumName)
                duration=duration+song.duration
        })
        Album.duration=duration
    })
}

export default function getAlbums(){
    getDuration()
    return Albums;
}

export function addAlbums(albumName,artistName){
    let Id=0;
    Albums.map((Album)=>{
        if(Album.id>Id)
            Id=Album.id
    })
    Albums.push({id:Id+1,albumName:albumName,artistName:artistName,duration:0})
}

export function updateAlbums(albumName,albumId){
    let oldAlbumName;
    Albums.map(Album=>{
        if(Album.id===Number(albumId)){
            oldAlbumName=Album.albumName
            Album.albumName=albumName
        }
        updateAlbumOfSong(oldAlbumName,albumName)
                        
    })
}

export function updateAlbumArray(oldArtistName,newArtistName){
    Albums.map(Album=>{
        if(Album.artistName===oldArtistName){
            console.log("2")
            Album.artistName=newArtistName
        }
                        
    })
}

export function deleteAlbums(album){
    Albums.splice(Albums.indexOf(album),1)
    return Albums.filter((Album)=>{
       return Album.id!==album.id
    })
}

export function deleteRecord(artistName){

    Albums.map((Album)=>{
        if(Album.artistName===artistName){
            Albums.splice(Albums.indexOf(Album),1)
        }
    })
}