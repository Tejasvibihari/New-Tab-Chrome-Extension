import React, { useState } from 'react';

export default function Gallery() {
    // Make image refresh after 5 sec 
    const [image, setImage] = React.useState("https://picsum.photos/500/300");
    const [fade, setFade] = useState(false);


    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true);
            const randomImage = `https://picsum.photos/500/300?random=${Math.random()}`;
            setImage(randomImage);
            setFade(false);
        }, 4000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <img
                className={`rounded-xl shadow-xl transition-opacity ease-in-out ${fade ? 'animate-fadeOut' : 'animate-fadeIn'}`}
                src={image}
                alt="Random"
            />
        </>
    );
}