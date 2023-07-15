import React, { useEffect, useState } from "react";

function LoadChar() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "/character");
                if (response.ok) {
                    const responsedata = await response.json();
                    setCharacters(responsedata.content);
                } else {
                    throw new Error('Error fetching entity');
                }
            } catch (error) {
                console.error('Error fetching character', error);
            }
        }
        fetchData();
    }, []);


    return <div className="char-load">
        <h1>Hello</h1>
        {characters.map(char => {
            return <a className="char-ref" key={char.name} href={"/?id=" + char.name}>{char.name}</a>
        })}
    </div>
}

export default LoadChar;