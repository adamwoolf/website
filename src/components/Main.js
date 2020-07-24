import React, {Component} from 'react'
import '../styles/stylesheet.css'
import Hero from './Hero'
import Biog from './Biog'
import Features from './Features'

class Main extends Component {
    render(){
        return <div> 
            <Hero/>
            <div className='contents'>
            <Biog/>
            <Features/>
            </div>
    
        </div>
            
    }

}

export default Main
