import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Foodie
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
const [credenditals, setcredenditals] = useState({
  email: "",
  password: "",
});
let navigate = useNavigate();
const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/LoginUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credenditals.email,
      password: credenditals.password,
    }),
  });
  const json = await response.json();
  console.log(json);

  if (!json.success) {
    alert("Email or Password not correct");
  } else if (json.success) {
    localStorage.setItem("userEmail", credenditals.email);
    localStorage.setItem("authToken", json.authToken);

    navigate("/");
  }
};

const onChange = (e) => {
  setcredenditals({ ...credenditals, [e.target.name]: e.target.value });
};


  return (
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ backgroundColor: "white" }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={credenditals.email}
                onChange={onChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={credenditals.password}
                onChange={onChange}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <hr style={{ border: "solid 1px black" }} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                OR
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "2%",
                }}
              >
                <hr />
                <GoogleIcon style={{ marginRight: "5%" }} />
                <FacebookIcon style={{ marginRight: "5%" }} />
                <MailIcon />
                {"\n"}
              </div>
              <Grid container>
                <Grid item>
                  <Link to="/createuser" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    
  );
}


// export default function Login() {
//   const [credenditals, setcredenditals] = useState({
//     email: "",
//     password: "",
   
//   });
//   let navigate = useNavigate()
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/LoginUser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: credenditals.email,
//         password: credenditals.password,
//       }),
//     });
//     const json = await response.json()
//     console.log(json);

//     if (!json.success) {
//       alert("Email or Password not correct");
//     }
//     else if (json.success) {
//       localStorage.setItem("userEmail",credenditals.email);
//       localStorage.setItem("authToken", json.authToken);
      
//       navigate("/");
//     }
//   };

//   const onChange = (e) => {
//     setcredenditals({ ...credenditals, [e.target.name]: e.target.value });
//   };

//   return (
//     <div>
//         <div className="container">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 name="email"
//                 value={credenditals.email}
//                 onChange={onChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 name="password"
//                 value={credenditals.password}
//                 onChange={onChange}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//             <Link to="/createuser" className="m-3" >
//               New Member?
//             </Link>
//           </form>
//         </div>
//     </div>
//   );
// }
