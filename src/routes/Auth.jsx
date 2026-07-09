import { useState } from "react";
import { Box } from "@mui/material";

function Auth() {
  const [newAccount, setNewAccount] = useState(true);

  return (
    <>
      <h2>Auth</h2>

      <Box component="form"></Box>
    </>
  );
}

export default Auth;
