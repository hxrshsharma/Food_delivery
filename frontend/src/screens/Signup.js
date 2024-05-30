import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import { TextareaAutosize } from "@mui/base";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        FOODIE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Signup() {
  const [credenditals, setcredenditals] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/CreateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credenditals.name,
        email: credenditals.email,
        password: credenditals.password,
        location: credenditals.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter correct Information");
    }
  };

  const onChange = (e) => {
    setcredenditals({ ...credenditals, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  value={credenditals.name}
                  onChange={onChange}
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={credenditals.email}
                  onChange={onChange}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={credenditals.password}
                  onChange={onChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="exampleInputPassword1"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  style={{
                    backgroundColor: "white",
                    width: "27vw",
                    color: "black",
                  }}
                  minRows={3}
                  fullWidth
                  placeholder="Address"
                  required
                  name="geolocation"
                  value={credenditals.geolocation}
                  onChange={onChange}
                  label="Address"
                  type="text-Area"
                  id="address"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

    // <>
    //   <div className="container">
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-3">
    //         <label htmlFor="name" className="form-label">
    //           Name:
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="name"
    //           value={credenditals.name}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="email" className="form-label">
    //           Email:
    //         </label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           name="email"
    //           value={credenditals.email}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="Address" className="form-label">
    //           Address
    //         </label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="geolocation"
    //           value={credenditals.geolocation}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputPassword1" className="form-label">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           id="exampleInputPassword1"
    //           name="password"
    //           value={credenditals.password}
    //           onChange={onChange}
    //         />
    //       </div>

    //       <button type="submit" className="btn btn-primary">
    //         Submit
    //       </button>
    //       <Link to="/login" className="m-3 btn btn-danger">
    //         Already a user
    //       </Link>
    //     </form>
    //   </div>
    // </>
  );
}

// import React, { useState } from "react";
// import { Link} from "react-router-dom";

// export default function Signup() {
//   const [credenditals, setcredenditals] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/CreateUser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({name:credenditals.name,email:credenditals.email,password:credenditals.password,location:credenditals.geolocation}),
//     });
//       const json = await response.json()
//       console.log(json)

//       if (!json.success) {
//           alert("Enter correct Information")
//       }
//     };

//     const onChange = (e) => {
//         setcredenditals({ ...credenditals,[e.target.name]:e.target.value})
//     }

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credenditals.name}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               name="email"
//               value={credenditals.email}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="Address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="geolocation"
//               value={credenditals.geolocation}
//               onChange={onChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               name="password"
//               value={credenditals.password}
//               onChange={onChange}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//           <Link to="/login" className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }
