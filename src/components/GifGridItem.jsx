import React from 'react'

const GifGridItem = ({id, title, url}) => {

    //console.log(img);
    return (
        <div>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
