import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Pokemon"])

    return (


        <div className="container">
            <div className="row">
                <div className="col-12">

                    <h2>GifExpertApp</h2>
                    <AddCategory
                    setCategories={setCategories}
                    />
                    <hr />

                    {
                        categories.map(category=>(
                            
                           <GifGrid
                           key={category}
                           category={category}
                           />
                            
                        ))
                    }



                </div>
            </div>
        </div>

    )
}

export default GifExpertApp
