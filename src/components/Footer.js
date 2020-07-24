import React from 'react'
import Title from './Title'

const style={
    minHeight: '25px',
    color: 'white',
    background: 'black',
    textAlign: 'center'
}
const Footer = (props) => {
return <div style={style}>
    <p>Made by <a href='https://www.webspinner.eu'>'WebSpinner.eu</a></p>
</div>
}

export default Footer