import axios from 'axios';

const PER_PAGE = 12; 
export async function fetchHits(searchValue,page) {
   return await axios.get(
        `https://pixabay.com/api/?q=${searchValue}&page=1&key=29868967-3f3a0a798a8ddb286c18cf898&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}&page=${page}`
    )
}