import { Navigate } from "react-router-dom";

import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";



const Login =()=>{

   

    const handleSubmit = (event) => {
      event.preventDefault();
     
    };
  
 



    return(
        <Container maxWidth="xs">
          <CssBaseline/>
          <Box sx={{marginTop:8,
        display:"flex", flexDirection:"column",alignItems:"center"}}>
        <Avatar sx={{m:2,bgcolor:"red"}}>
            {/* falta el icon */}
        </Avatar>
        <Typography component ="h1" variant="h5">
            Sign In
        </Typography>
        <Box onSubmit ={handleSubmit}>
            <TextField
            margin= "normal"
            label="User"
            fullWidth
            autoFocus
            id="User"
            name="User"/>

             <TextField
             id="password"
             name="pass"
            margin= "normal"
            label="Password"
            type="password"
            fullWidth
            autoFocus/>
            {/* <FormControlLabel
            control={<Checkbox color="green"/>}
            label="Remember me"/> */}
            <Button type="submit" fullWidth variant="contained">
                
                Login
            </Button>
        </Box>
          </Box>
        </Container>
    )
}

export default Login;