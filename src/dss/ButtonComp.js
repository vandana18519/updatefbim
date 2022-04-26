import React, {useState} from "react";
import './ButtonComp.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DoneIcon from '@mui/icons-material/Done';

const ButtonComp= () => {
    const [state, setState] = useState(true);

    const toggle = () =>{
        setState(!state);
    }
    
    return (
        <div className={'toggleClass'}>
            <div onClick={toggle} className={state?'toggleOpen':'toggleClose'}>
                {state?<QuestionMarkIcon/>:<DoneIcon/>}
            </div>
        </div>
    )
}
export default ButtonComp;