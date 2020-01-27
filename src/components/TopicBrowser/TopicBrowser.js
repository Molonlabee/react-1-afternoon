import React, { Component } from 'react';

    import EvenAndOdd from '../Topics/EvenAndOdd'
    import FilterObject from '../Topics/FilterObject'
    import FilterSting from '../Topics/FilterString'
    import Palindrome from '../Topics/Palindrome'
    import Sum from '../Topics/Sum'


class TopicBrowser extends Component {
    render() {
        return(
           <div>
               <EvenAndOdd />
               <FilterObject />
               <FilterSting />
               <Palindrome />
               <Sum />
           </div>
        )
    }

}


export default TopicBrowser;