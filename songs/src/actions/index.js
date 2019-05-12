//Action creator
export const selectSong = (song) =>{
    //REturn an action
    return {
        type:'SONG_SELECTED',
        payload:song
    };
}