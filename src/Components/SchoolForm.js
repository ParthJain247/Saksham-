import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import './SchoolForm.css'
import { useState } from 'react';

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
        <div className="schoolForm">
            <div className="schoolFormContainer">
                <h2>School Form</h2>
                <p className="schoolFormContainerText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <form id="School-form" onSubmit={handleSubmit}>
                    <div className="FormGroupContainer">
                        <TextField
                            helperText="Please enter your name"
                            id="demo-helper-text-misaligned"
                            label="Student's Name"
                            onChange={e => setStudentName(e.target.value)}
                        />
                    </div>
                    <div className="FormGroupContainer">
                        <TextField
                            helperText="Please enter your School's name"
                            id="demo-helper-text-misaligned"
                            label="School Name"
                            onChange={e => setSchoolName(e.target.value)}
                        />
                    </div>

                    <div className="FormGroupContainer">
                        <TextField
                            helperText="Please enter the school's adress"
                            id="demo-helper-text-misaligned"
                            label="Address"
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>

                    <div className="FormGroupContainer">
                        <TextField
                            helperText="Please enter the class"
                            id="demo-helper-text-misaligned"
                            label="Class"
                            onChange={e => setStudentClass(e.target.value)}
                        />
                    </div>
                    <div className="FormGroupContainer">
                        <TextField
                            helperText="Please enter your roll no."
                            id="demo-helper-text-misaligned"
                            label="Roll No."
                            onChange={e => setRollNo(e.target.value)}
                        />
                    </div>

                    <div className="SkillsToContribute">
                        Skills to contribute
                        <FormGroup >
                            <FormControlLabel control={<Checkbox />} label="Dancing" value="dancing" onChange={e => setDance(!dance)} />
                            <FormControlLabel control={<Checkbox />} label="Signing" value="singing" onChange={e => setSing(!sing)} />
                            <FormControlLabel control={<Checkbox />} label="Magic" onChange={e => setMagic(!magic)} />
                            <FormControlLabel control={<Checkbox />} label="Other" onChange={e => setOther(!other)} />
                        </FormGroup>
                    </div>
                    <Button
                        style={{
                            color: 'teal',
                            width: '50%',
                            padding: '2%',
                            marginBottom: '7%',
                            borderBlockColor: 'teal'
                        }}
                        onClick={handleSubmit}
                        size="large"
                        variant="outlined">Submit</Button>

                </form>
            </div>

        </div>
    )
}

export default SchoolForm
