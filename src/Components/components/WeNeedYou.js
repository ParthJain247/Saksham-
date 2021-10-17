import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { withStyles } from '@mui/styles';
import { StylesProvider } from "@mui/styles";
import { createStyles, makeStyles } from '@mui/styles';
import './WeNeedYou.css'
import React, { useState } from 'react';

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #ffd05c 30%, #eef2f3 90%)",
        border: "3px solid white",
        color: 'white',
        borderRadius: "50px",
        height: "auto",
        padding: "10px 30px",
        margin: "10px",
        fontSize: '25px',
    },

});



const WeNeedYou = () => {
    const [expandedPanel, setExpandedPanel] = useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        console.log({ event, isExpanded });
        setExpandedPanel(isExpanded ? panel : false);
    };
    const classes = useStyles();
    return (
        <div className="weNeedYou">
            <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')} className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Why an NGO?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')} className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Do NGO worker's get paid?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')} className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Do I get any benefit's if I donate my money to an NGO?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expandedPanel === 'panel4'} onChange={handleAccordionChange('panel4')} className={classes.root}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Can I donate stuff other than money?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}



export default WeNeedYou


