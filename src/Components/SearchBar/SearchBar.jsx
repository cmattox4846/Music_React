import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title:'Search Titles',
            titleClear:""
         }
    }

    
    handleChange=(event)=>{
        this.setState({
              [event.target.name]:event.target.value,
          });
         
  
      }
  
    handleSubmit = (event) => {
          event.preventDefault();
          this.props.filterSongsByValue(this.state.title)
      }
  
      

    render() { 
        return ( 
            <div className="ms-2 me-2">
                <form onSubmit={this.handleSubmit}>

                        
                    <label></label>
                    <input className=" ms-2 me-2" name='title'  onChange={this.handleChange} value={this.state.title}/>
                    
                    
                    <button type="submit"className="btn btn-link button1 ms-2 me-2">Search Songs</button>


                </form>
        </div> 

        );
    }
}
 
export default SearchBar;


