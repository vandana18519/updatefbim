import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import ButtonComp from './ButtonComp';

const Sprinkler= () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
        Sprinkler: <ButtonComp/>
        </div>

    )
}
export default Sprinkler;