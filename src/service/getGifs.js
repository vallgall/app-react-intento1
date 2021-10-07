import { useState } from 'react';
import Search from '../Search';
const apikey = 'l4V2uUjmSyxGlT4SLEM2FwK91zLLofFI'



export default function getGifs({ keyword = 'jokers' } = {}) {
    
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response
            if (Array.isArray(data)) {
                const gifs = data.map(image => {
                    const {images, title, id} = image
                    const { url } = images.downsized_medium
                    return {title, id, url}
                })
                return gifs
            }
        })
}