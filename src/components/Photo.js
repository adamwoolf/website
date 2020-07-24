import React from'react'

const Photo = (props) => {
return <div className='photo-container' >
<img className='photo' src={props.image.image} />
</div>
}

export default Photo