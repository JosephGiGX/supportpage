import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import styles from './accordion.module.css'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
      
    border: `1px solid #0A161C`,
    backgroundColor: '#0A161C',
    color: '#fff',
    marginLeft: '264px',
    width: '448px',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ 
          fontSize: '0.9rem', 
          color: '#E25A5A',
        }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)', 
    flexDirection: 'row-reverse',
    padding: '15px',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));


const AccordionFunc = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>
                    <div key={item.title}></div>
                    <div  onClick={() => onTitleClick(index)}>
                        {item.title}
                    </div>
                </Typography>
                </AccordionSummary>

            <AccordionDetails>
                <Typography>
            <div>
                <p>{item.content}</p>
            </div>
            </Typography>
            </AccordionDetails>
        </Accordion>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default AccordionFunc;