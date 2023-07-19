import React, { useEffect, useState } from "react";

function LoadChar() {

    const [characters, setCharacters] = useState([]);
    const [elasticTimeout, setElasticTimeout] = useState(null);

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

    function elasticSearch(event) {
        if (elasticTimeout) {
            clearTimeout(elasticTimeout);
        }

        setElasticTimeout(setTimeout(async() => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "/character/search?text=" + event.target.value);
                if (response.ok) {
                    const responsedata = await response.json();
                    setCharacters(responsedata.content);
                } else {
                    throw new Error('Error fetching entity');
                }
            } catch (error) {
                console.error('Error fetching character', error);
            }
        }, 300));
    }


    return <div>
        <h1 className="inline elastic-container">Characters: </h1>
        <div className="float-right elastic-container">
            <label htmlFor="elastic-input">Search:</label>
            <input onChange={elasticSearch} id="elastic-input"></input>
        </div>
        <div className="char-load">
            {characters.map(char => {
                return <a className="char-ref" key={char.name} href={"/?id=" + char.name}>
                    <div>
                        <p>Name : {char.name}</p>
                        <p>Level: {char.level}</p>
                    </div>
                </a>
            })}
        </div>
    </div>
}

export default LoadChar;