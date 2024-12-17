import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

const AppBarComponent = () => {
  const router = useRouter();

  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h5">Course Helper</Typography>
        <Button color="inherit" onClick={() => router.push("/login")}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
