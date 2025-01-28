// // import { useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Stack,
// //   Container,
// // } from "@mui/material";

// // export default function AuthPage() {
// //   const [isSignIn, setIsSignIn] = useState(true);

// //   return (
// //     <Container>
// //       <Box
// //         sx={{
// //           display: "flex",
// //           flexDirection: "column",
// //           alignItems: "center",
// //           justifyContent: "center",
// //           height: "600px",
// //           backgroundColor: "#f9f9f9",
// //           padding: 2,
// //         }}
// //       >
// //         <Typography variant="h4" gutterBottom>
// //           {isSignIn ? "Sign In" : "Create Account"}
// //         </Typography>

// //         <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
// //           {!isSignIn && (
// //             <>
// //               <TextField label="First Name" fullWidth />
// //               <TextField label="Last Name" fullWidth />
// //             </>
// //           )}
// //           <TextField label="Email" fullWidth />
// //           <TextField label="Password" type="password" fullWidth />
// //           {!isSignIn && (
// //             <TextField label="Confirm Password" type="password" fullWidth />
// //           )}
// //           <Button variant="contained" color="primary" fullWidth>
// //             {isSignIn ? "Sign In" : "Sign Up"}
// //           </Button>
// //           <Button
// //             variant="text"
// //             color="secondary"
// //             fullWidth
// //             onClick={() => setIsSignIn(!isSignIn)}
// //           >
// //             {isSignIn
// //               ? "Don't have an account? Sign Up"
// //               : "Already have an account? Sign In"}
// //           </Button>
// //         </Stack>
// //       </Box>
// //     </Container>
// //   );
// // }



// import { useState } from "react";
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Stack,
//   Container,
//   CircularProgress,
// } from "@mui/material";
// import axios from "axios";
// import { error } from "console";
// import { Messages } from "../../../libs/config";
// import { sweetErrorHandling } from "../../../libs/sweetAlert";
// import { T } from "../../../libs/types/common";
// import { MemberInput, LoginInput } from "../../../libs/types/member";
// import { useGlobals } from "../../hooks/useGlobals";
// import MemberService from "../../services/MemberService";


// interface AuthenticationModalProps {
//   signupOpen: boolean;
//   loginOpen: boolean;
//   handleSignupClose: () => void;
//   handleLoginClose: () => void;
// }


// export default function AuthenticationModal(props: AuthenticationModalProps) {
//   const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;

//   const [memberNick, setMemberNick] = useState<string>("");
//   const [memberPhone, setMemberPhone] = useState<string>("");
//   const [memberPassword, setMemberPassword] = useState<string>("");
//   const { setAuthMember } = useGlobals();

//   /** HANDLERS **/

//   const handelerUsername = (e: T) => {
//     setMemberNick(e.target.value);
//   };

//   const handelerPhone = (e: T) => {
//     setMemberPhone(e.target.value);
//   };

//   const handelerPassword = (e: T) => {
//     setMemberPassword(e.target.value);
//   };

//   const handlerPasswordKeyDown = (e: T) => {
//     if (e.key === "Enter" && signupOpen) {
//       handlerSignupRequest().then();
//     } else if (e.key === "Enter" && loginOpen) {
//       handlerLoginRequest().then();
//     }
//   };

//   const handlerSignupRequest = async () => {
//     try {
//       console.log("inputs:", memberNick, memberPhone, memberPassword);
//       const isFullfill =
//         memberNick !== "" && memberPhone !== "" && memberPassword !== "";
//       if (!isFullfill) throw new Error(Messages.error3);

//       const signupInput: MemberInput = {
//         memberNick: memberNick,
//         memberPhone: memberPhone,
//         memberPassword: memberPassword,
//       };

//       const member = new MemberService();
//       const result = await member.signup(signupInput);

//       // Saving Auth User
//       setAuthMember(result);

//       handleSignupClose();
//     } catch (err) {
//       console.log(err);
//       handleSignupClose();
//       sweetErrorHandling(err).then();
//     }
//   };

//   const handlerLoginRequest = async () => {
//     try {
//       console.log("inputs:", memberNick, memberPassword);
//       const isFullfill = memberNick !== "" && memberPassword !== "";
//       if (!isFullfill) throw new Error(Messages.error3);

//       const loginInput: LoginInput = {
//         memberNick: memberNick,
//         memberPassword: memberPassword,
//       };

//       const member = new MemberService();
//       const result = await member.login(loginInput);

//       // Saving Auth User
//       setAuthMember(result);

//       handleLoginClose();
//     } catch (err) {
//       console.log(err);
//       handleLoginClose();
//       sweetErrorHandling(err).then();
//     }
//   };

//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "600px",
//           backgroundColor: "#f9f9f9",
//           padding: 2,
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           {isSignIn ? "Sign In" : "Create Account"}
//         </Typography>

//         <Stack spacing={2} sx={{ width: "100%", maxWidth: 400 }}>
//           {/* Member Nick for Sign-In */}
//           <TextField
//             label="Member Nickname"
//             fullWidth
//             name="memberNick"
//             value={formData.memberNick}
//             onChange={handleChange}
//             required  // Make Member Nick required
//           />
//           {/* Phone number (optional for Sign In) */}
//           {!isSignIn && (
//             <TextField
//               label="Phone Number"
//               fullWidth
//               name="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           )}
//           <TextField
//             label="Password"
//             type="password"
//             fullWidth
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required  // Make Password required
//           />
//           {/* Confirm Password for Sign-Up */}
//           {!isSignIn && (
//             <TextField
//               label="Confirm Password"
//               type="password"
//               fullWidth
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//             />
//           )}
//           {/* Show error message if there is one */}
//           {error && <Typography color="error">{error}</Typography>}

//           <Button
//             variant="contained"
//             color="primary"
//             fullWidth
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? <CircularProgress size={24} /> : isSignIn ? "Sign In" : "Sign Up"}
//           </Button>

//           <Button
//             variant="text"
//             color="secondary"
//             fullWidth
//             onClick={() => setIsSignIn(!isSignIn)}
//             disabled={loading}
//           >
//             {isSignIn
//               ? "Don't have an account? Sign Up"
//               : "Already have an account? Sign In"}
//           </Button>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }


import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import styled from "styled-components";
import LoginIcon from "@mui/icons-material/Login";
import MemberService from "../../services/MemberService";
import { useGlobals } from "../../hooks/useGlobals";
import { Messages } from "../../../libs/config";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { T } from "../../../libs/types/common";
import { MemberInput, LoginInput } from "../../../libs/types/member";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 2),
  },
}));

const ModalImg = styled.img`
  width: 62%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  margin-top: 9px;
  margin-left: 10px;
`;

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();

  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();
  const navigate = useNavigate();

  /** HANDLERS **/

  const handelerUsername = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handelerPhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handelerPassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handlerPasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handlerSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handlerLoginRequest().then();
    }
  };

  const handlerSignupRequest = async () => {
    try {
      console.log("inputs:", memberNick, memberPhone, memberPassword);
      const isFullfill =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      // Saving Auth User
      setAuthMember(result);
      navigate("/");
      handleSignupClose();
    } catch (err) {
      console.log(err);
      handleSignupClose();
      sweetErrorHandling(err).then();
    }
  };

  const handlerLoginRequest = async () => {
    try {
      console.log("inputs:", memberNick, memberPassword);
      const isFullfill = memberNick !== "" && memberPassword !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      // Saving Auth User
      setAuthMember(result);
      handleLoginClose();
      navigate("/");
    } catch (err) {
      console.log(err);
      handleLoginClose();
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "800px" }}
          >
            <ModalImg src={"/img/auth.webp"} alt="camera" />
            <Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
              <h2>Signup Form</h2>
              <TextField
                sx={{ marginTop: "7px" }}
                id="outlined-basic"
                label="username"
                variant="outlined"
                onChange={handelerUsername}
              />
              <TextField
                sx={{ my: "17px" }}
                id="outlined-basic"
                label="phone number"
                variant="outlined"
                onChange={handelerPhone}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                onChange={handelerPassword}
                onKeyDown={handlerPasswordKeyDown}
              />
              <Fab
                onClick={handlerSignupRequest}
                sx={{ marginTop: "30px", width: "120px" }}
                variant="extended"
                color="primary"
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{ width: "700px" }}
          >
            <ModalImg src={"/img/chanel.jpg"} alt="camera" />
            <Stack
              sx={{
                marginLeft: "65px",
                marginTop: "25px",
                alignItems: "center",
              }}
            >
              <h2>Login Form</h2>
              <TextField
                id="outlined-basic"
                label="username"
                variant="outlined"
                sx={{ my: "10px" }}
                onChange={handelerUsername}
              />
              <TextField
                id={"outlined-basic"}
                label={"password"}
                variant={"outlined"}
                type={"password"}
                onChange={handelerPassword}
                onKeyDown={handlerPasswordKeyDown}
              />
              <Fab
                onClick={handlerLoginRequest}
                sx={{ marginTop: "27px", width: "120px" }}
                variant={"extended"}
                color={"primary"}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
