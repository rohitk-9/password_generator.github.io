import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
let sliderval = 0;
function sliderValue(value) {
    sliderval = value;
}
export {sliderval};
export default function DiscreteSliderSteps(props) {
  return (
    <Box sx={{ }}>
      <Slider
        aria-label="Small steps"
        defaultValue={props.defaultValue}
        getAriaValueText={sliderValue}
        step={1}
        marks
        min={4}
        max={25}
        valueLabelDisplay="auto"
        
      />
    </Box>
  );
}