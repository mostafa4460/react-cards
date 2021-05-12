import {useState} from "react";

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleIsFacingUp = () => setIsFacingUp(up => !up);
    return [isFacingUp, toggleIsFacingUp];
}

export {useFlip};