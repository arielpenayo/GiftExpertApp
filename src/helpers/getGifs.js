export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=VsOjPnA6SJGRpQI1H1PrJ7o9FLQTM8XQ`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    
    return gifs;
}