// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [image,setImage] = useState('');
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setImage(data.message);
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) {
        return <p>Loading</p>
    }

    return (
        <img src={image} alt='A Random Dog'></img>
    )

}

export default App;