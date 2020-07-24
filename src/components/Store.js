import React, {Component} from 'react'
import Item from './Item'


const items = [
    {name:'Sackbut Solutions', description: 'First published in 2010, this is the original, first ever method book for sackbut players of all levels and backgrounds', image: '/imgs/SS.jpg', paypal: '', price: '55'},
    {name:'Sackbut Solutions (version Français)', description: 'French translation of the original Sackbut Solutions', image: '/imgs/SSFR.jpg', paypal: '', price: '55'},
    {name:'Bass Sackbut Solutions', description: 'Based on the original version but with completely different solo and ensemble pieces, suitable for the bass sackbut', image: '/imgs/BSS.jpg', paypal: '', price: '55'},
    {name:'Duo Seraphim',  description: 'Fun to play along with CDs in A=440 and A=465 and a useful teaching and study aid.', image: '/imgs/DS.jpg', paypal: '',price: '45'},
    {name:'Songs Without Words', description: 'My first solo CD, released in 2010.', image: '/imgs/SWW.jpg', paypal: '', price: '15'},
    {name:'The Food of Love', description: 'Featuring world-class tenor Charles Daniels and an all-star lineup, this recording includes new takes on favourite works from the early baroque.', image: '/imgs/TFOL.jpg', paypal: '', price: '15'},
    {name:'Amaranthine', description: 'Here there are no musical boundaries. This recording seamlessly blends styles from all walks of musical life to meet at a highpoint and reflect on unchanged human nature across hundreds of years.', image: '/imgs/Amaranthine.jpg', paypal: '', price: '15'}
]

class Store extends Component {
    render(){
        return <div>
        <div className="contents">
            <h4>Online Store</h4>
            <p>Here you can purchase my books and CDs.  You can use the order button to 
                send me an email and I will reply immediately to arrange shipping, and payment via bank
                transfer.  All prices include shipping.
            </p>
            <div className="store">
            {items.map((item, index) => <Item key={index} item={item}/>)}
            </div>
            </div>

        </div>

    }
}

export default Store