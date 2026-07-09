import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function Auth() {
  const [newAccount, setNewAccount] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log(form);

  const handleEmailChange = e => {
    setForm(prev => ({
      ...prev,
      // email: "aaa@aaa.com",
      email: e.target.value,
    }));
  };
  const handlePasswordChange = e => {
    setForm(prev => ({
      ...prev,
      // password: "12345678abc",
      password: e.target.value,
    }));
  };

  return (
    <>
      <Typography variant="h2" component="h2">
        Login Form
      </Typography>

      <Box component="form" sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Email Address"
          type="text"
          name="email"
          variant="outlined"
          onChange={handleEmailChange}
        />

        <TextField
          sx={{ mt: 2 }}
          fullWidth
          label="Password"
          type="email"
          name="email"
          variant="outlined"
          onChange={handlePasswordChange}
        />

        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </>
  );
}

export default Auth;
