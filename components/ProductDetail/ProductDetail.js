import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ProductDetail = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    
  return (
    <>
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Askating Monk may accept returns on apparel and footwear for
              account credit only. For this purpose Askating Monk must receive
              the merchandise within 14 days from the date it was shipped to
              you. Items must be unused, unworn, unwashed and undamaged by
              you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Askating Monk may accept returns on apparel and footwear for
              account credit only. For this purpose Askating Monk must receive
              the merchandise within 14 days from the date it was shipped to
              you. Items must be unused, unworn, unwashed and undamaged by
              you.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography>Features</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Askating Monk may accept returns on apparel and footwear for
              account credit only. For this purpose Askating Monk must receive
              the merchandise within 14 days from the date it was shipped to
              you. Items must be unused, unworn, unwashed and undamaged by
              you.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};
