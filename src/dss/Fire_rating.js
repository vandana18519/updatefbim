import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Fire_rating = () => {
    return (
        <div style={{display:"contents" }}>
        <TextField sx={{'& > :not(style)': { m: 0.5, width: '8ch', height:'5ch'}}} id="standard-basic" label="Standard" variant="standard" />
        < TextField sx={{'& > :not(style)': { m: 0.5, width: '8ch' , height:'5ch'}}} id="standard-basic" label="Standard" variant="standard" />
        <Button sx={{m: 1, width: 'auto' , height:'auto', fontSize: "10px"}} variant="contained">DONE</Button>
      </div>
    )
}
export default Fire_rating;