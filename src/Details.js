import store from './state/store';
import Data from './data.json';
import './Details.css';
export const Details = (props) => {
    
    const count = Data.params[props.value.data];
    // console.log("0000___: ",count);
    return (
        <div className={'divClass'}>
            <div className={'secondDivClass'} >Details</div><hr/>
            <div className={'divClassOne'}>Element Name: <br/> <div className={'divClassTwo'}>{count.element}</div></div><br/>
            <div className={'divClassOne'}>Element Id: <br/> <div className={'divClassTwo'}> {count.element_id}</div></div><br/>
            <div className={'divClassOne'}>Model Number: <br/> <div className={'divClassTwo'}> {Data.model}</div></div><br/>
            <div className={'divClassOne'}>Status: <br/> <div className={'divClassTwo'}> {count.result}</div></div><br/>
            <div className={'divClassOne'}>Decision: <br/> <div className={'divClassTwo'}>{count.remark}</div></div><br/>
        </div>
    )
}; export default Details;