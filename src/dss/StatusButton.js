import React, {useState} from "react";
import './ButtonComp.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DoneIcon from '@mui/icons-material/Done';

const StatusButton= () => {
    const [state, setState] = useState(true);

    const toggle = () =>{
        setState(!state);
    }
    
    return (
        <div className={'toggleClass'}>
            <div style={{color:'grey'}}>
                {state?<QuestionMarkIcon/>:<DoneIcon/>}
            </div>
        </div>
    )
}
export default StatusButton;