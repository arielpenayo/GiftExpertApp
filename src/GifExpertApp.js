import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

    // const categories = ['UNO','DOS','TRES'];

    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () => setCategories([...categories,'aaaaaa'])
   

    return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp