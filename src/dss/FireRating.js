import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonComp from './ButtonComp';

const FireRating = () => {
    return (
        <div style={{display:"contents" }}>
        <TextField sx={{'& > :not(style)': { m: 0.5, width: '8ch', height:'5ch'}}} id="standard-basic" label="Height" variant="standard" />
        < TextField sx={{'& > :not(style)': { m: 0.5, width: '8ch' , height:'5ch'}}} id="standard-basic" label="Width" variant="standard" />
        <div style={{display:'-webkit-inline-flex', fontStyle: 'oblique',fontSize: '20px', alignItems: 'center'}}>
          <ButtonComp value={"FireRating"}/>
        </div>
      </div>
    )
}
export default FireRating;