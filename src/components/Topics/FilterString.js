import React, { Component } from 'react';

class FilterString extends Component{
    constructor() {
        super();

        this.state = {
            colors:['red', 'blue', 'purple', 'green', 'yellow'],
            userInput:'',
            filteredColors:[]
        };     
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterColors(userInput) {
        let colors = this.state.colors;
        let filteredColors = [];
    
        for ( let i = 0; i < colors.length; i++ ) {
          if ( colors[i].includes(userInput) ) {
            filteredColors.push(colors[i]);
          }
          
          this.setState({filteredColors:filteredColors});
        }

    }


    render() {
        return(

        <div className='puzzleBox filterStringPB'>

            <h4>Filter String</h4>

            <span className='puzzleText'>Colors:{JSON.stringify(this.state.colors,null,10)}></span>
           
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
           
            <button className='confirmationButton' onClick={ ()=> this.filterColors(this.state.userInput)}>Filter</button>
           
            <span className='resultsBox filterStringRB'>filtered Colors:{JSON.stringify(this.state.FilteredColors, null, 10)}</span>

        </div>

        ); 
    }
}

export default FilterString;