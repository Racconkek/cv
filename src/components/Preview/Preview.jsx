import React, { useEffect, useState } from "react";

import './Preview.css'
import Header from '../Header/Header'
import small from '../../images/preview-small.png'
import middle from '../../images/preview-middle.png'
import large from '../../images/preview-large.png'

function Preview() {
    const [loaded, setLoaded] = useState('unloaded');
    const [photoSize, setPhotoSize] = useState(large)
    
    useEffect(() => {
        const handleLoad = () => setLoaded('loaded')
        const width =  window.innerWidth;
        const height = window.innerHeight;
        if (width >=2500 || height >= 1500) {
            setPhotoSize(large)
        } else if (width <= 1800 || height <= 1000) {
            setPhotoSize(small)
        } else {
            setPhotoSize(middle)
        }
        window.addEventListener('load', handleLoad);
    
        return () => {
          window.removeEventListener('load', handleLoad);
       }
    }, [])

    return (
        <section className={'preview'}>
            <Header loaded={loaded}/>
            <h1 className={'preview__headline preview__headline_' + loaded}>
                Людмила <br/>
                Мирошниченко
            </h1>
            <div className={'preview__photo-container preview__photo-container_'+loaded}>
                <img src={photoSize} alt={'me'} className={'preview__photo'}/>
            </div>
        </section>
    );
}

export default Preview;
