import React, { useState } from 'react';
import './ContactUsForm.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const ContactUsForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name)
        // console.log(email)
        // console.log(subject)
        // console.log(message)
    }

    return (
        <div className="ContactUsFormSection">
            <div className="contact-us-form-container">
                <div className="section-title">
                    <h2 className="contact-us-title">Contact Us</h2>
                    <p className="contact-us-para">Let us know what you think! In order to provide better service,
                                    please do not hesitate to give us your feedback. Thank you.</p>
                    <div className="contact-form-body">
                        <form id="contact-form"
                            onSubmit={handleSubmit}
                        >
                            <div className="contact-form-group">
                                <TextField
                                    helperText="Please enter your name"
                                    id="demo-helper-text-aligned"
                                    label="Name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="contact-form-group">
                                <TextField
                                    helperText="Please enter your email"
                                    id="demo-helper-text-aligned"
                                    label="Email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="contact-form-group">
                                <TextField
                                    helperText="Please enter the subject"
                                    id="demo-helper-text-aligned"
                                    label="Subject"
                                    onChange={e => setSubject(e.target.value)}
                                />
                            </div>
                            <div className="contact-form-group">
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={6}
                                    placeholder="Message"
                                    style={{ width: '70%' }}
                                    onChange={e => setMessage(e.target.value)}
                                />
                            </div>
                            <Button
                                style={{
                                    color: '#2a0944',
                                    width: '50%',
                                    padding: '2%',
                                    marginBottom: '7%',
                                    borderBlockColor: '#2a0944'
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
    )
}

export default ContactUsForm
