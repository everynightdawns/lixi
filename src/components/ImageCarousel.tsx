import React, { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";

const images = ['/lixi.png', '/azure-dragon-of-the-east-springs-second-chance-1.png', '/azure-dragon-of-the-east-springs-second-chance-2.png', '/azure-dragon-of-the-east-springs-second-chance-3.png', '/azure-dragon-of-the-east-springs-second-chance-4.png', '/azure-dragon-of-the-east-springs-second-chance-5.png'];

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])

    return (
        <div className="imageContainer">
            <ExportedImage src={images[currentIndex]} alt="Golden Tiger Eclipse, Jade Hare Prosperity" fill placeholder="empty" />
            <style jsx>{`
                .imageContainer {
                    margin: 10px 0px 10px 0px;
                    width: 28.1689453125em;
                    height: 30em;
                    display: block;
                    position: relative;
                }
            `}</style>
        </div>
    )
}
  
export default ImageCarousel