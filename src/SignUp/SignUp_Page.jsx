import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  FormGroup,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "@fontsource/roboto/500.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { formValidate } from "../Validation/Validate";

function SignUp() {
  const [signUpuser, setsignUpUser] = useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    //  console.log(e.target.value, e.target.name);
    const { name, value } = e.target;
    setsignUpUser({ ...signUpuser, [name]: value });
  };
  console.log(signUpuser);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
   const error =  formValidate(name, value);
   console.log(error);
   
  };

  const paperStyle = {
    padding: 12,
    height: "110vh",
    width: 400,
    margin: "20px auto",
  };
  return (
    <>
      <h2>Sign Up Form</h2>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <form action="">
            <FormGroup
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <TextField
                label="First Name"
                name="firstname"
                type="text"
                sx={{ marginTop: "30px" }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={signUpuser.firstname}
              />
              <TextField
                label="last Name"
                name="lastName"
                type="text"
                sx={{ marginTop: "30px" }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={signUpuser.lastName}
              />
            </FormGroup>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              sx={{ marginTop: "25px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={signUpuser.email}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              sx={{ marginTop: "25px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={signUpuser.password}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              sx={{ marginTop: "25px" }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={signUpuser.confirmPassword}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Show Password"
            />
            <Button
              variant="contained"
              color="success"
              sx={{
                display: "block",
                margin: "10px auto",
                padding: "10px 50px",
              }}
            >
              Submit
            </Button>
          </form>

          <Typography sx={{ textAlign: "center" }}>
            {" "}
            Already have an account
            {<Link to="/">Login</Link>}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default SignUp;
