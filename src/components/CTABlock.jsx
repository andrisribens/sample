import React, {useState} from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import Collapse from '@mui/material/Collapse';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


function onChange(value) {
  console.log('Captcha value:', value);
}

function CTABlock() {

    const brightTheme = createTheme({
        palette: {
          bright: {
            main: "white",
            contrastText: "#EF5B0C",
          }
        },
      });

      const darkTheme = createTheme({
        palette: {
          mode: "dark",
        },
      });


      const [formIsOpen, setFormIsOpen] = useState(false);
      const [successAlertOpen, setSuccessAlertOpen] = useState(false);
      const [errorAlertOpen, setErrorAlertOpen] = useState(false);

      const handleFormOpen = () => {
        setFormIsOpen(!formIsOpen);
      }

      const handleCloseAlert = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSuccessAlertOpen(false);
        setErrorAlertOpen(false);
      }

      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

// Send an email through emailjs service

      const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            setSuccessAlertOpen(!successAlertOpen);
            
          }, (error) => {
            console.log(error.text);
            setErrorAlertOpen(!errorAlertOpen);
          });
        handleFormOpen();  
        e.target.reset();
      };


    return (
        <div className="cta-block">
          <div className="cta-block-content">
            <h2>Do not hesitate!</h2>
            
            <form onSubmit={handleOnSubmit} id="contact_form">
            <Collapse in={formIsOpen} >
            <ThemeProvider theme={darkTheme}>
            <Grid container>
            
            <Grid item xs={12} p={1}>
            <TextField
            required
            id="contact_form_name"
            name="from_name"
            label="Your name"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                    <FaceIcon />
                </InputAdornment>
              )}}
            ></TextField>
            </Grid>
            
            <Grid item xs={12} sm={6} p={1}>
            <TextField
            required
            id="contact_form_email"
            name="from_email"
            label="Your email"
            fullWidth
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                    <EmailIcon />
                </InputAdornment>
              )}}
            ></TextField>
            </Grid>

            <Grid item xs={12} sm={6} p={1}>

            <TextField
            id="contact_form_phone"
            name="from_phone"
            label="Your phone number (optional)"
            fullWidth
            type="tel"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                    <PhoneAndroidIcon />
                </InputAdornment>
              )}}
            ></TextField>
            </Grid>

            <Grid item xs={12} p={1}>

            <TextField
            required
            id="contact_form_message"
            name="message"
            label="Your message"
            multiline
            fullWidth
            minRows={5}
            placeholder="Please write Your message here"
            ></TextField>
            </Grid>

            {/* <Grid item xs={12} p={1} >
              <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_MYSITE_KEY}
              onChange={onChange}
              size="normal"
              theme="light"
              />
            </Grid> */}
            </Grid>
            </ThemeProvider>

            <ThemeProvider theme={brightTheme}>
            <Grid item xs={12} >
            <Button 
            variant="contained" 
            color="bright" 
            size="large"
            type="submit"
            // onClick={handleFormSubmit} 
            >
            Submit
            </Button>
            </Grid>
            </ThemeProvider>
            </Collapse>

            </form>

            {!formIsOpen && (
            <ThemeProvider theme={brightTheme}>
            <Grid item xs={12} >
            <Button 
            variant="contained" 
            color="bright" 
            size="large"
            onClick={handleFormOpen} >
            Send us a message
            </Button>
            </Grid>
            <p>We are waiting for your message</p>
            </ThemeProvider>
            )}

{/* Show success alert */}
            <Snackbar 
            open={successAlertOpen}
            onClose={handleCloseAlert}
            autoHideDuration={3000} 
            anchorOrigin={{vertical:"top", horizontal:"center"}}
            sx={{textAlign: "left"}}
            >
               <Alert 
              severity="success" 
              onClose={handleCloseAlert}
              sx={{ width: '100%' }}>
                <AlertTitle>Thank You!</AlertTitle>
                Your message has been sent!
              </Alert>
            </Snackbar>

{/* Show error alert */}
            <Snackbar 
            open={errorAlertOpen}
            onClose={handleCloseAlert}
            autoHideDuration={5000} 
            anchorOrigin={{vertical:"top", horizontal:"center"}}
            sx={{textAlign: "left"}}
            >
              <Alert 
              severity="error" 
              onClose={handleCloseAlert}
              sx={{ width: '100%' }}>
                <AlertTitle>Ooops!</AlertTitle>
                Something went wrong! Your message was not sent.
              </Alert>

            </Snackbar>

          </div>
        </div>

    );
}

export default CTABlock;


