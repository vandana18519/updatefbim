import store from './state/store';
import Data from './data.json';
export const Details = (props) => {
    
    const count = Data.params[props.value.data];
    // console.log("0000___: ",count);
    return (
        <div style={{color:"grey", fontStyle: 'oblique', fontFamily:'Andale Mono'}}>
            <div>Element Name: {count.element}</div><br/>
            <div>Element Id: {count.element_id}</div><br/>
            <div>Model Number: {Data.model}</div><br/>
            <div>Status: {count.result}</div><br/>
            <div>Decision: {count.remark}</div><br/>
        </div>
    )
}; export default Details;