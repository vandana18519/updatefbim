
import Heading from './Heading';
import Properties from './Properties';
import Dss from './Dss';
import Decision from './dss/Decision';
import Details from './Details';
import FloorImage from './FloorImage';
import { useSelector, useDispatch } from 'react-redux'
import CalculateButton from './dss/CalculateButton';
import { bindActionCreators } from 'redux';
import { actionCreators } from "./state/index";
// new


function App() {
  const state = useSelector((state) => state);
  // console.log("state", state);
  const dispatch = useDispatch();
  const { setIndex } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <Heading/>
      <div style={{display:"flex"}}>
        <div style={{ height:"850px",width:"20%", overflow:"scroll" }}>
          <Dss/>
        </div >
        <div style={{height:"100%", width:"80%"}}>
          <div style={{display:"flex", height:"50%", width:"100%"}}>
            <div style={{ height:"600px", width:"80%",border: '5px ridge #DAF3FF'}}>
            <FloorImage />
            </div>
            <div style={{ height:"600px", width:"20%", overflow:"scroll"}}>
            <Properties/>
            </div>
          </div>
          <div style={{display:"flex", height:"10%", width:"100%"}}>
            <div style={{ width:"39.25%"}}>
              <CalculateButton/>
            </div>
            <div style={{ width:"39.25%"}}>
            <CalculateButton/>
            </div>
          </div>
          <div style={{display:"flex", height:"25%", width:"100%"}}>
            <div style={{ height:"250px", width:"33%", border: '5px ridge #DAF3FF',borderRadius: '3px'}}>
              <Details value={state}/>
            </div>
            <div style={{ height:"250px", width:"43%", border: '5px ridge #DAF3FF',borderRadius: '3px'}}>
              <FloorImage />
            </div>
            <div style={{  height:"250px", width:"20%", border: '5px ridge #DAF3FF',borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
             <Decision/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
