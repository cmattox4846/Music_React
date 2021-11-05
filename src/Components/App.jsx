import React, { Component } from 'react';
import axios from 'axios'
import "./App.css" 
import CompleteSongsList from './CompleteSongsList/CompleteSongsList';



class App extends Component {
   
        state = { 
            songs:[]
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
    
    
    render() { 
        
        return ( 
            console.log(this.state.songs[0]),
            
            <div>
              
                {this.state.songs > 0 &&
                <div>
                  <h1> Complete Songs List</h1>
                  <h2>{this.state.songs[0]}</h2>
                  </div>
                }
                 
            </div>

         );
    }
}
 
export default App;