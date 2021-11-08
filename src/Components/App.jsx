import React, { Component } from 'react';
import axios from 'axios'
import "./App.css" 
import CompleteSongsList from './CompleteSongsList/CompleteSongsList';
import AddNewSong from './AddNewSong/AddNewSong';
import SearchBar from './SearchBar/SearchBar';
import UpdateSong from './UpdateSong/UpdateSong';



class App extends Component {
   
        state = { 
            songs:[],
            
         }
    
    
    componentDidMount=()=>{
        this.loadSongs()
    }

    filterSongsByValue = (searchTerm) => {

        let filteredSongs = this.state.songs.filter(function(song){
            if(song.title.includes(searchTerm)){
                return true;
            }else{
                return false;
            }
        });

        this.setState({
            songs: filteredSongs
        })

    }
    
    loadSongs = async () => {
        
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs:response.data
        })
    }    
    updateSong = async (songID,updateInfo)=>{

        let updatedSongInfo = {
            title: updateInfo.title,
            artist: updateInfo.artist,
            album: updateInfo.album,
            genre: updateInfo.genre,
            release_date: updateInfo.release_date,
            likes: updateInfo.likes 
        }


        await axios.put('http://127.0.0.1:8000/music/'+ songID +'/', updatedSongInfo)

        this.loadSongs()
        
    }


    updateSongChoice=(song)=>{
        UpdateSong(song)
        
    }

    deleteSong = async (songID)=> {
        debugger
        
        await axios.delete('http://127.0.0.1:8000/music/'+ songID +'/')

        this.loadSongs()
    }
    addSong = async (objectBeingPassedIn) => {

        let newSong = {
            title: objectBeingPassedIn.title,
            artist: objectBeingPassedIn.artist,
            album: objectBeingPassedIn.album,
            genre: objectBeingPassedIn.genre,
            release_date: objectBeingPassedIn.release_date,
            likes: objectBeingPassedIn.likes 
        }

        await axios.post('http://127.0.0.1:8000/music/', newSong)

        this.loadSongs()

    }
    
    render() { 
        
        return ( 
           
            
            <div>
              
                
                <div>
                <SearchBar filterSongsByValue={this.filterSongsByValue}/> <button onClick={()=>this.loadSongs()}>Reset List</button>
                <br/><br/><br/><br/><CompleteSongsList songs={this.state.songs} deleteSong={this.deleteSong} updateSongChoice={this.updateSongChoice}/>
                 
                 <div><br/><br/> Added New Song Here!<AddNewSong songs={this.state.songs} addSong={this.addSong} /></div>
                 
                 <div><br/><br/> Update Song here!
                 <UpdateSong songs={this.state.songs} updateSong={this.updateSong} /></div>
                


                </div>
               
                
            </div>

         );
    }
}
 
export default App;