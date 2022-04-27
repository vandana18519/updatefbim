import React, {useState} from "react";
import './ButtonComp.css';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const StatusButton= () => {
    const [state, setState] = useState(true);

    const toggle = () =>{
        setState(!state);
    }
    
    return (
        <div className={'toggleClass'}>
            <div >
                {state?<HelpOutlineIcon sx={{color:"red"}}/>:<CheckCircleOutlineIcon sx={{color:"green"}}/>}
            </div>
        </div>
    )
}
export default StatusButton;