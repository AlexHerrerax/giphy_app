import React, { useState } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    const url = "https://api.giphy.com/v1/gifs/search?q=Rick+and+morty&limit=10&api_key=4v4yBMYhfgzmC3kejf3nC25pMy42ZWR1"


    const getGifs = async () =>{
        
        const resp = await fetch(url);
        const {data} = await resp.json();
        //console.log(data);

        const gifs= data.map(img =>(
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }

        ))
        setImages(gifs)
    }

    

    getGifs();

    return (
        <>

        {
            images.map(img =>(
                <GifGridItem
                key={img.id}
                {...img}
                />
            ))
        }

        </>
    )
}

export default GifGrid
