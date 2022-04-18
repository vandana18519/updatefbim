
import Heading from './Heading';
import Properties from './Properties';
import Dss from './Dss';
import Testlist from './Testlist';


function App() {

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
              Model_Image
            </div>
            <div style={{ height:"600px", width:"20%", overflow:"scroll"}}>
            <Properties/>
            </div>
          </div>
          <div style={{display:"flex", height:"10%", width:"100%"}}>
            <div style={{ width:"39.25%"}}>
              Button
            </div>
            <div style={{ width:"39.25%"}}>
              Button
            </div>
          </div>
          <div style={{display:"flex", height:"25%", width:"100%"}}>
            <div style={{ height:"250px", width:"33%", border: '5px ridge #DAF3FF',borderRadius: '3px'}}>
              Details
            </div>
            <div style={{ height:"250px", width:"33%", border: '5px ridge #DAF3FF',borderRadius: '3px'}}>
              Details
            </div>
            <div style={{ height:"250px", width:"33%", border: '5px ridge #DAF3FF',borderRadius: '3px'}}>
             <Testlist/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
