import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import './SchoolForm.css'

const SchoolForm = () => {
    return (
        <div className="schoolForm">
            <div className="schoolFormContainer">
                <h2>School Form</h2>
                <div className="FormGroupContainer">
                    <TextField
                        helperText="Please enter your School's name"
                        id="demo-helper-text-misaligned"
                        label="School Name"
                    />
                </div>

                <div className="FormGroupContainer">
                    <TextField
                        helperText="Please enter the school's adress"
                        id="demo-helper-text-misaligned"
                        label="Address"
                    />
                </div>

                <div className="FormGroupContainer">
                    <TextField
                        helperText="Please enter the class"
                        id="demo-helper-text-misaligned"
                        label="Class"
                    />
                </div>

                <div className="SkillsToContribute">
                    Skills to contribute
                    <FormGroup >
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Dancing" />
                        <FormControlLabel control={<Checkbox />} label="Signing" />
                        <FormControlLabel control={<Checkbox />} label="Magic" />
                        <FormControlLabel control={<Checkbox />} label="Other" />
                    </FormGroup>
                </div>

            </div>

        </div>
    )
}

export default SchoolForm
