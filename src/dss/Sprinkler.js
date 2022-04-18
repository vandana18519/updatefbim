import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const Sprinkler= () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <div style={{display:"contents" }}>
        Sprinkler: <Checkbox {...label} />
        </div>
    )
}
export default Sprinkler;