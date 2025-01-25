import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Container,
} from "@mui/material";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f9f9f9",
          padding: 2,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {isSignIn ? "Sign In" : "Create Account"}
        </Typography>

        <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
          {!isSignIn && (
            <>
              <TextField label="First Name" fullWidth />
              <TextField label="Last Name" fullWidth />
            </>
          )}
          <TextField label="Email" fullWidth />
          <TextField label="Password" type="password" fullWidth />
          {!isSignIn && (
            <TextField label="Confirm Password" type="password" fullWidth />
          )}
          <Button variant="contained" color="primary" fullWidth>
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
          <Button
            variant="text"
            color="secondary"
            fullWidth
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
