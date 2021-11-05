import React, { Component } from 'react';
import axios from 'axios'
import "./App.css" 
import CompleteSongsList from './CompleteSongsList/CompleteSongsList';
import AddNewSong from './CompleteSongsList/AddNewSong/AddNewSong';
import SearchBar from './CompleteSongsList/SearchBar/SearchBar';



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
                  
                 <CompleteSongsList songs={this.state.songs}/>
                 <button onClick={()=>this.loadSongs()}>Complete List</button>
                 <AddNewSong songs={this.state.songs} addSong={this.addSong} />
                 <SearchBar filterSongsByValue={this.filterSongsByValue}/>
                </div>
               
                
            </div>

         );
    }
}
 
export default App;