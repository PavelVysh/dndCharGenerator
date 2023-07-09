import React, { useEffect, useState } from "react";
import CharCreationHeader from "./charCreationComponents/charCreationHeader";
import CharCreationMain from "./charCreationComponents/charCreationMain";
import { useLocation } from "react-router-dom";

function CharCreationContainer() {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const id = searchParams.get('id');
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_URL + "/character/" + id);
                if (response.ok) {
                    const responsedata = await response.json();
                    setCharacter(responsedata);
                } else {
                    throw new Error('Error fetching entity');
                }
            } catch (error) {
                console.error('Error fetching character', error);
            }
        }
        if (id !== null) {
            fetchData();
        }
    }, [id]);

    return <div>
        <CharCreationHeader character={character} />
        <CharCreationMain character={character} />
    </div>
}

export default CharCreationContainer;