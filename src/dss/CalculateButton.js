import React, {useState} from "react";
import './ButtonComp.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DoneIcon from '@mui/icons-material/Done';

const CalculateButton= () => {
    const [state, setState] = useState(false);

    const toggle = () =>{
        setState(!state);
    }
    
    return (
        <div className={'calClass'}>
            <div onClick={toggle} className={state?'calOpen':'calClose'}></div>
        </div>
    )
}
export default CalculateButton;
