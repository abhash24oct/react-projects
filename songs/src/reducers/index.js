import {combineReducers} from 'redux';

const songsReducer =() =>{
    return [
        {title : 'Fix you', duration :'4:05'},
        {title : 'All of you', duration :'3:15'},
        {title : 'Yellow', duration :'1:05'},
        {title : 'I want it that way', duration :'5:05'}
    ];
};

 const selectedSongReducer =(selectedSong=null,action)=>{

    if(action.type==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};


export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});