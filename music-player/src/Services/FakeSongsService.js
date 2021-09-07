const Songs = [
    {
        id: 1,
        songName: "Goosebumps",
        artistName: "Travis Scott",
        albumName: "Astroworld",
        duration:4.17
    },
    {
        id: 2,
        songName: "Highest in the room",
        artistName: "Travis Scott",
        albumName: "Astroworld",
        duration:4.27
    },
    {
        id: 3,
        songName: "Not afraid",
        artistName: "Eminem",
        albumName: "The Real Slim Shady",
        duration:4.51
    },
    {
        id: 4,
        songName: "Lose yourself",
        artistName: "Eminem",
        albumName: "The Real Slim Shady",
        duration:3.59
    },
    {
        id: 5,
        songName: "We own it",
        artistName: "Wiz Khalifa",
        albumName: "Rolling Papers",
        duration:5.21
    },
]

export default function getSongs(){
    return Songs;
}

export function addSongs(songName,albumName,artistName,duration){
    let Id=0;
    Songs.map((Song)=>{
        if(Song.id>Id)
            Id=Song.id
    })
    Songs.push({id:Id+1,songName:songName,albumName:albumName,artistName:artistName,duration:Number(duration)})   
}

export function updateSongArray(oldArtistName,newArtistName){
    Songs.map(Song=>{
        if(Song.artistName===oldArtistName){
            console.log("2")
            Song.artistName=newArtistName
        }
                        
    })
}

export function updateAlbumOfSong(oldAlbumName,newAlbumName){
    Songs.map(Song=>{
        if(Song.albumName===oldAlbumName){
            console.log("2")
            Song.albumName=newAlbumName
        }
                        
    })
}

