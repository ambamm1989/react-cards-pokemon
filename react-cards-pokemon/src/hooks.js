import { useState, useEffect } from 'react';
import axios from 'axios';

function useFlip(initalFlipstate = true) {
    const [isFlipped, setFlipped] = useState(initalFlipstate);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
    }

    function useAxios(keyInLS, baseUrl) {
        const [responses, setResponses] = useLocalStorage(keyInLS);

        const addResponsesData = async (formatter = data => data, restOfUrl = '') => {
            const response = await axios.get(`${baseUrl}${restOfUrl}`);
            setResponses(data => [...data, formatter(response.data)]);
        };

        const clearResponses = () => setResponses([]);

        return [response, addResponsesData, clearResponses];
    }

    function useLocalStorage(key, initalValue = []) {
        if (localStorage.getItem(key)) {
            initalValue = JSON.parse(localStorage.getItem(key));
        }
        const [value, setValue] = useState(initalValue)

        useEffect(() => {
            localStorage.setItem(key.JSON.stringify(value));
        }, [value, key]);

        return [value, setValue];
    }

    export default useLocalStorage;

    export { useFlip, useAxios, useLocalStorage};