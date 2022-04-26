import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ButtonComp from './ButtonComp';

const Compartment= () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{display:"block" }}>
            <div style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
            Compartment: <ButtonComp />
            </div>
            <div style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
            Compartment: <ButtonComp/>
            </div>
            <div style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
            Compartment: <ButtonComp/>
            </div> 
        </div>
    )
}
export default Compartment;