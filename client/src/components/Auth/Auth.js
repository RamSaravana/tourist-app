import React from "react";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GitHubLogin from "react-github-login";

import Input from "./Input";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();

  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () => {};
  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });

  //     history.push("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const googleError = () =>
  //   alert("Google Sign In was unsuccessful. Try again later");

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type="password"
              handleShowPassword={handleShowPassword}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled
            className={classes.submit}>
            Sign In-[Disabled] Try Multi-OAuth
          </Button>
          <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant="contained">
                Sign in with Google
              </Button>
            )}
            // onSuccess={googleSuccess}
            // onFailure={googleError}
            // cookiePolicy="single_host_origin"
          />
          <FacebookLogin
            appId="1088597931155576"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="info"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant="contained">
                <div
                  class="fb-login-button"
                  data-width="10"
                  data-size="medium"
                  data-button-type="login_with"
                  data-layout="rounded"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"></div>
              </Button>
            )}
            // callback={responseFacebook}
          />
          <GitHubLogin
            clientId="ac56fad434a3a3c1561e"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                // startIcon={<Icon />}
                variant="contained">
                Sign in with GitHub
              </Button>
            )}
            // onSuccess={onSuccess}
            // onFailure={onFailure}
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button varient="text">Try Above Social-Media Logins</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
