import React, { Component } from 'react';

class FilterObject extends Component{

    constructor() {
        super();

        this.state= {
            
            cars:[
                {
                    make:'toyta',
                    model:'tc',
                    color:'silver'
                },

                {
                    make:'ford',
                    model:'f150',
                    year: 2025
                },

                {
                    make:'audi',
                    model:'i8',
                    mileage:2017
                }

            ],

            userInput:'',
            filteredCars:[]
        }
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    filterCars(prop) {
        let cars = this.state.cars;
        let filteredCars = [];

        for(let i = 0; i < cars.length; i++) {
            if(cars[i].hasOwnProperty(prop)) {
                filteredCars.push(cars[i]);
            }
        }
        this.setState({filteredCars:filteredCars});
    }


    render() {
        return (

        
        <div className='puzzleBox filterObjectPB'>
            
            <h4>Filter Object</h4>

            <span className='puzzleText filteredObjectRB'>Original:{JSON.stringify(this.state.cars,null,10)}</span>
          
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            
            <button className='confirmationButton' onClick={()=> this.filterCars(this.state.userInput)}>cars</button>

            <span className='resultsBox filteredObjectRB' >Filtered:{JSON.stringify(this.state.filteredCars, null, 10)}</span>
            
        </div>

        );
    }
}

export default FilterObject;