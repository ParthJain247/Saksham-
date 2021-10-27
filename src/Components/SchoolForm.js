import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './SchoolForm.css'
import { useState } from 'react';

const theme = createTheme({
    components: {
        MuiTextField: {
            variants: [
                {
                    props: { variant: 'standard' },
                    style: {
                        textTransform: 'none',
                        backgroundColor: '#ffd05c',
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

const SchoolForm = () => {
    const [studentName, setStudentName] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [address, setAddress] = useState('')
    const [studentClass, setStudentClass] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [dance, setDance] = useState(false)
    const [sing, setSing] = useState(false)
    const [magic, setMagic] = useState(false)
    const [other, setOther] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(studentName)
        console.log(schoolName)
        console.log(address)
        console.log(studentClass)
        console.log(rollNo)
        console.log('Dance: ', dance)
        console.log('Magic: ', magic)
        console.log('Sing: ', sing)
        console.log('Other: ', other)
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="main-school-form-section">
                <h1 className="join-us-school-form">Join us</h1>
                <p className="schoolFormContainerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                <div className="schoolForm">
                    <div className="schoolFormContainer">
                        <h2 className="schoolFormContainerHeader">School Form</h2>
                        <form id="School-form" onSubmit={handleSubmit}>
                            <div className="FormGroupContainer">
                                <TextField
                                    className="tf1"
                                    InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                    id="demo-helper-text-misaligned"
                                    label="Student's Name"
                                    variant="standard"
                                    onChange={e => setStudentName(e.target.value)}
                                />
                            </div>
                            <div className="FormGroupContainer">
                                <TextField
                                    variant="standard"
                                    InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                    id="demo-helper-text-misaligned"
                                    label="School Name"
                                    onChange={e => setSchoolName(e.target.value)}
                                />
                            </div>

                            <div className="FormGroupContainer">
                                <TextField
                                    variant="standard"
                                    InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                    id="demo-helper-text-misaligned"
                                    label="Address"
                                    onChange={e => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="FormGroupContainer">
                                <TextField
                                    variant="standard"
                                    InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                    id="demo-helper-text-misaligned"
                                    label="Class"
                                    onChange={e => setStudentClass(e.target.value)}
                                />
                            </div>
                            <div className="FormGroupContainer">
                                <TextField
                                    variant="standard"
                                    InputLabelProps={{ style: { paddingLeft: '30px' } }}
                                    id="demo-helper-text-misaligned"
                                    label="Roll No."
                                    onChange={e => setRollNo(e.target.value)}
                                />
                            </div>

                            <div className="SkillsToContribute">
                                Skills to contribute
                        <FormGroup >
                                    <FormControlLabel control={<Checkbox style={{
                                        color: "#ffd05c",
                                    }} />} label="Dancing" value="dancing" onChange={e => setDance(!dance)} />
                                    <FormControlLabel control={<Checkbox style={{
                                        color: "#ffd05c",
                                    }} />} label="Signing" value="singing" onChange={e => setSing(!sing)} />
                                    <FormControlLabel control={<Checkbox style={{
                                        color: "#ffd05c",
                                    }} />} label="Magic" onChange={e => setMagic(!magic)} />
                                    <FormControlLabel control={<Checkbox style={{
                                        color: "#ffd05c",
                                    }} />} label="Other" onChange={e => setOther(!other)} />
                                </FormGroup>
                            </div>
                            <Button
                                style={{
                                    color: '#ffd05c',
                                    width: '50%',
                                    padding: '2%',
                                    marginBottom: '7%',
                                    borderBlockColor: '#ffd05c'
                                }}
                                onClick={handleSubmit}
                                size="large"
                                variant="outlined">Submit</Button>

                        </form>
                    </div>

                </div >
            </div>
        </ThemeProvider>
    )
}

export default SchoolForm
