import React from 'react';
import { useState, useEffect } from 'react';
import { getRandomJoke } from '../../../services/axiosService';
import { Button } from '@mui/material';
const AxiosChuck = () => {

    const [joke, setJoke] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);



    const Like=()=>{
        return setLike(like+1)
    }
    const Dislike=()=>{
        return setDislike(dislike+1)
    }


    useEffect(() => {
        obtainJoke()
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                    setJoke(response.data.value)
                    console.log(response.data.value)
                
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    }


    return (
        <div>
            <div>
            { joke !== null ? 
                (
                    <div>
                        
                        <h2>{joke}</h2>
                    
                    </div>
                )
            :null }
                <p>New Joke!</p>
                <button onClick={obtainJoke}>Random joke</button>
                
            </div>

            <Button variant="contained" color="success" onClick={Like}>
                Like <br/> {like}
            </Button>
            <Button variant="outlined" color="error" onClick={Dislike}>
                Dislike <br/> {dislike}
            </Button>
        </div>
    );
}

export default AxiosChuck;
