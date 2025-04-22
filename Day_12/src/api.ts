import axios from 'axios';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
export async function searchPhotos(query: string){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params: {query, per_page: 30},
        headers: {Authorization: `Client-ID ${ACCESS_KEY}`}
    });
    return res.data.results;
}
