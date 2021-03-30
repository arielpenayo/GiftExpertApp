
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3> { category} </h3>

            {loading && <p className="animate__animated animate__jello">Loading</p>}

            <div className="card-grid">
                
                    {images.map(e => 
                        <GifGridItem 
                            key={e.id}
                            {...e}
                        />    
                    )}
                
            </div>
        </>

    )
}
