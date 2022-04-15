import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './AgeSlider.css';


const CustomSlider = styled(Slider)(({ theme }) => ({
    color: '#999999',
    "& .MuiSlider-thumb": {
        backgroundColor: '#52228C',
        width: '14px',
        height: '14px',
    },
    "& .MuiSlider-track": {
        color: '#52228C',
        height: '1px'
    },
    "& .MuiSlider-rail": {
        height: '3px',
        borderRadius: '2px'
    }
}));


const AgeSlider = () => {
    const [value, setValue] = React.useState([1, 99]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='AgeSlider'>
                <CustomSlider
                    value={value}
                    onChange={handleChange}
                />
                <Typography variant="body1" sx={{mt: '-6px', size: '12px', width: '65px', height: '21px', color: '#333333', lineHeight: '21px'}} >
                   {value[0]} - {value[1]}
                </Typography>
            </Box>
        </>
    );
}

export default AgeSlider;