'use client';

import NextImg from "@/components/NextImg";
import { useState } from "react";

export default function Gallery() {

    const [selected, setSelected ] = useState(0); // 0 is the default value

    function handleClick(index) {    
        setSelected(index);
    }

    const galleryImages = [
        "/images/gallery-1.jpg",
        "/images/gallery-2.jpg",
        "/images/gallery-3.jpg",
    ];



    return (
        <div className="gallery">
                <div className="main-image">
                    <NextImg src={galleryImages[selected]} alt="" />
                </div>

                <div className="image-array-container">
                    {galleryImages.map((image, index) => {
                        return (
                            <div className="image-container" key={index} onClick={ () => handleClick(index)}>
                                <NextImg 
                                    src={image}
                                    alt=""
                                    className={ selected == index && "selected" || "" }
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
    );
}