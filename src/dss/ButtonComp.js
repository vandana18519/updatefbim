import React, {useState} from "react";
import './ButtonComp.css';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import DoneIcon from '@mui/icons-material/Done';
import { useSelector, useDispatch } from 'react-redux'

const ButtonComp= (props) => {
    // console.log("Lets seee",props);
    // const dispatch = useDispatch()
    const [state, setState] = useState(true);

    const toggle = () =>{
        setState(!state);
        // dispatch(setState(props));
                                   
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