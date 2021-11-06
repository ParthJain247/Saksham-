import React, { useState } from 'react';
import './ContactUsForm.css'
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import indiLayout from "./indi.png";
import TextField from '@mui/material/TextField';
// import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const theme = createTheme({
    components: {
        MuiTextField: {
            variants: [
                {
                    props: { variant: 'standard' },
                    style: {
                        textTransform: 'none',
                        backgroundColor: '#f9a826',
                        border: 'none',
                        '& :before': {
                            borderBottom: 'none'
                        },
                        '& :hover': {
                            border: 'none'
                        },
                        '& :after': {
                            borderBottom: 'none'
                        }
                    },
                },
            ],
        },
    },
});

const ContactUsForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(subject)
        console.log(message)
    }
    document.body.style.background="#000000";
    return (
        <ThemeProvider theme={theme}>
            <div className="contact-us-form">
                <h2 className="get-in-touch">
                    Get in touch
                </h2>
                <p className="contact-us-para">Let us know what you think! In order to provide better service,
                                    please do not hesitate to give us your feedback. Thank you!</p>

                <div className="ContactUsFormSection">
                    <div className="contact-us-form-container">
                        <div className="section-title">
                            <h2 className="contact-us-title">Contact Us</h2>

                            <div className="contact-form-body">

                                <form id="contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="contact-form-group" >

                                        <TextField
                                            InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                            id="demo-helper-text-aligned"
                                            label="Name"
                                            variant="standard"
                                            onChange={e => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <TextField
                                            InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                            variant="standard"
                                            id="demo-helper-text-aligned"
                                            label="Email"
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <TextField
                                            InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                            variant="standard"
                                            id="demo-helper-text-aligned"
                                            label="Subject"
                                            onChange={e => setSubject(e.target.value)}
                                        />
                                    </div>
                                    <div className="contact-form-group">
                                        <TextareaAutosize
                                            className="textareas"
                                            aria-label="minimum height"
                                            minRows={6}
                                            placeholder="Message"
                                            style={{ width: '70%', backgroundColor: '#f9a826', borderRadius: '20px', padding: '20px 0 0 20px' }}
                                            onChange={e => setMessage(e.target.value)}
                                        />
                                    </div>

                                    <Button
                                        style={{
                                            backgroundColor: '#f9a826',
                                            color: '#2a0944',
                                            width: '50%',
                                            padding: '2%',
                                            marginBottom: '7%',
                                            borderBlockColor: '#2a0944',
                                            borderRadius: '20px'
                                        }}
                                        type="submit"
                                        variant="outlined">
                                        Submit
                                </Button>
                                </form>

                            </div>


                        </div>
                    </div>
                </div >
            </div>
        </ThemeProvider>
    )
}

export default ContactUsForm
