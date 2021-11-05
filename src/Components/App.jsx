import React, { Component } from 'react';
import axios from 'axios'
import "./App.css" 
import CompleteSongsList from './CompleteSongsList/CompleteSongsList';
import AddNewSong from './CompleteSongsList/AddNewSong/AddNewSong';
import SingleSongDisplay from './CompleteSongsList/SingleSongDisplay/SingleSongDisplay';



class App extends Component {
   
        state = { 
            songs:[],
            id: this.props.arrayNumber,
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
            likes:0,
            songCount:0
         }
    
    
    componentDidMount=()=>{
        this.loadSongs()
    }
    
    loadSongs=async()=>{
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs:response.data
        })
    }    

    addSong=async()=>{
        let title = this.state.title
        let artist = this.state.artist
        let album = this.state.album
        let genre = this.state.genre
        let release_date = this.state.release_date
        let likes = this.state.likes

        await axios.post('http://127.0.0.1:8000/music/', title,artist,album,genre,release_date,likes)
        this.setState({
            songCount: this.songCount +1
        })

    }
    
    render() { 
        
        return ( 
           
            
            <div>
              
                
                <div>
                  
                 <CompleteSongsList songs={this.state.songs}/>
                 <AddNewSong songs={this.state.songs} addSong={this.addSong()} />
                 <SingleSongDisplay songs={this.state.songs} />
                </div>
               
                
            </div>

         );
    }
}
 
export default App;