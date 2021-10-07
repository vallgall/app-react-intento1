import React, { useEffect, useState}from 'react';
import Gif from './Gif';
import getGifs from '../service/getGifs';

export default function ListOfGifs({ params }) {
    const { keyword } = params
    const [loading, setLoading] = useState(false)

    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword})
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if (loading) return <i>
        Cargando
        <img src="https://img.icons8.com/ios-filled/50/000000/loading.png" />
    </i>

    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />
            )}
    </div>
}