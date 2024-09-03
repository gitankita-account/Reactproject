import { Avatar, Grid, Paper, TextField, Button, Typography } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "@fontsource/roboto/500.css";
import { Link } from "react-router-dom"

function Login() {
  const paperStyle = {
    padding: 12,
    height: "80vh",
    width: 400,
    margin: "20px auto",
  };
  return (
    <>
      <h2>Login Form</h2>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <VerifiedUserIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
         <form action="">
         <TextField label="Username" type="text" fullWidth sx={{ marginTop: "30px" }} />
          <TextField
            label="Password"
            type="password"
            fullWidth
            sx={{ marginTop: "25px" }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Show Password"
          />
          <Button
            variant="contained"
            color="success"
            sx={{ display: "block", margin: "10px auto", padding: "10px 50px" }}
          >
            Submit
          </Button>
         </form>
            <Typography sx={{textAlign : "center", marginTop : "20px"}}>
            {/* <Link href="#">Forgot Password/Username</Link> */}
            </Typography>
            <Typography sx={{textAlign : "center" }}> Create an account
           <Link to = {"signup"}>
              <li>Sign Up</li>
           </Link>
            </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;

// elevation  = for giving shadow to an object
