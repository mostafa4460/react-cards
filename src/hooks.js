import {useState} from "react";
import axios from "axios";
import {v4 as uuid} from "uuid";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleIsFacingUp = () => setIsFacingUp(up => !up);
    return [isFacingUp, toggleIsFacingUp];
}

const useAxios = url => {
    const [cards, setCards] = useState([]);
    const addCard = async () => {
        const res = await axios.get(url);
        const newCard = {...res.data, id: uuid()};
        setCards(cards => [...cards, newCard]);
    }
    return [cards, addCard];
}

export {useFlip, useAxios};