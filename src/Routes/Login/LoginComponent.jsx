import React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";

const LoginComponent = () => {
  return (
    <div className="login__form row justify-content-center text-center mt-5">
      <h3>Log In to Your Udemy Account</h3>
      <Box
        className="mt-5"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="email"
            autoComplete="off"
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="off"
          />
        </div>
        <div className=" justify-content-end mt-2">
          <stack spacing={3} direction="row">
            <Button variant="text">Forgot Password</Button> <Button variant="contained">Log In</Button>
          </stack>
        </div>
      </Box>
    </div>
  );
};

export default LoginComponent;
