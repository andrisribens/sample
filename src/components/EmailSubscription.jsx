import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


function EmailSubscription() {

    const darkTheme = createTheme({
        palette: {
          mode: "dark",
        },
      });

    const brightTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    const CustomForm = ({status, message, onValidated}) => {
        const [email, setEmail] = useState("");
        const [successAlertOpen, setSuccessAlertOpen] = useState(false);
        const [errorAlertOpen, setErrorAlertOpen] = useState(false);
        const [backdropOpen, setBackdropOpen] = useState(false);
    
        const handleCloseAlert = (event, reason) => {
            if (reason === "clickaway") {
              return;
            }
            setSuccessAlertOpen(false);
            setErrorAlertOpen(false);
          }

        const handleBackdropClose = () => {
            setBackdropOpen(false);
        }

        useEffect(() => {

            const sendingEvents = () => {
                setBackdropOpen(true);
            }  
            const successEvents = () => {
                setBackdropOpen(false);
                setSuccessAlertOpen(!successAlertOpen);
                setEmail("");
            }
            const errorEvents = () => {
                setBackdropOpen(false);
                setErrorAlertOpen(!errorAlertOpen);
            }

            if(status === "sending") sendingEvents();
            if(status === "success") successEvents();
            if(status === "error") errorEvents();
          }, [status])
        
        
        const handleSubmit = (event) => {
            event.preventDefault();
            email &&
            email.indexOf("@") > -1 &&
            onValidated({
                MERGE0: email
            });
        }

        return (
            <>
            <form 
            className="mailchimp-form"
            onSubmit={(event) => {handleSubmit(event)}}
            >
            <Grid 
            container 
            direction="row"
            alignItems="stretch"
            justifyContent="center"
            >
                <Grid item xs={12} md={10} p={1}>
                    <TextField
                        id="email_subscription"
                        placeholder="Type Your email here"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        )}}
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="subscribe_email"
                        required
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} md={2} p={1} alignItems="stretch">
                    <Button
                        variant="contained"
                        size="large"
                        sx={{height:"100%"}}
                        type="submit"
                        formValues={[email]}
                    >
                    Subscribe
                    </Button>
                </Grid>
            </Grid>
            </form>

            <ThemeProvider theme={brightTheme}>
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
                You subscribed to mailing list.
              </Alert>
            </Snackbar>

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
                Something went wrong! You did not subscribe to mailinglist. 
                <br/>
                {message}
              </Alert>

            </Snackbar>
            </ThemeProvider>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdropOpen}
                onClick={handleBackdropClose}
            >
                  <CircularProgress color="inherit" />
            </Backdrop>

        </>
        ); 
      }

    return (
        <div className="email-subscription-block">
            <div className="email-subscription-block-content">
            <ThemeProvider theme={darkTheme}>
            <h5>Subscribe to our newsletter!</h5>

            <MailchimpSubscribe
                url={process.env.REACT_APP_MAILCHIMP_SUBSCRIBE_URL}
                render={({subscribe, status, message}) => (
                    <CustomForm 
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)} />
            )} />

            </ThemeProvider>
            </div>
        </div>
    );
}

export default EmailSubscription;