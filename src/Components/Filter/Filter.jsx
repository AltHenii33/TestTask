import React, { useState, useTransition } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getFilterUsers } from '../../Store/Main-reduser'
import { useDispatch, useSelector } from "react-redux";
import './Filter.css';
import AgeSlider from './AgeSlider';

const Filter = () => {

    const dispatch = useDispatch();
    const valueUsers = useSelector((state) => state.main.valueUsers);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [genders, setGenders] = useState('');
    let gen = '';

    const handleGender = (gender, checked) => {

        if (gender === 'Male' && checked) { setChecked1(true);  setChecked2(false); setGenders('male'); gen='male'}
        else if (gender === 'Male' && !checked) { setChecked1(false); setGenders(''); gen=''} 
        else if (gender === 'Female' && checked) { setChecked2(true);  setChecked1(false); setGenders('female'); gen='female'}
        else if (gender === 'Female' && !checked) { setChecked2(false); setGenders(''); gen=''} 
        // setGender(event);
        dispatch(getFilterUsers(valueUsers, name, gen))
    };

    const [isPending, startTransition] = useTransition();

    const [name, setName] = useState('');
    const handleName = (event) => {
        setName(event.target.value);
        startTransition(() =>  {
            dispatch(getFilterUsers(valueUsers, event.target.value, genders))
        })
    };


    return (
        <Box className='Filter'>
            <Paper >
                <div>
                    <Typography variant="caption" className='Text' sx={{ width: '116.9px', top: '27px' }}>
                        Name
                    </Typography>
                    <input type="text" className='Name' placeholder="Search by name" value={name} onChange={handleName} />
                </div>
                <div>
                    <Typography variant="caption" className='Text' sx={{ width: '107px', top: '128px' }}>
                        Age
                    </Typography>
                    <AgeSlider />
                </div>
                <div>
                    <Typography variant="caption" className='Text' sx={{ width: '116.9px', top: '234px' }}>
                        Gender
                    </Typography>
                    <button
                        className={(checked1 && 'ButtonTrue') || 'Button'}
                        onClick={() => { handleGender('Male', !checked1) }}
                    >
                        Male
                    </button>
                    <button
                        className={(checked2 && 'ButtonTrue2') || 'Button2'}
                        onClick={() => { handleGender('Female', !checked2) }}
                    >
                        Female
                    </button>
                </div>
                <div>
                    <Typography variant="caption" className='Text' sx={{ width: '116.9px', top: '320px' }}>
                        Sort By
                    </Typography>
                    <select name="cars" id="cars" className='Sort'>
                        <option value="Name">Name</option>
                        <option value="Date">Date of birth</option>
                        <option value="City">City</option>
                        <option value="Custom">Custom sort</option>
                    </select>
                </div>
            </Paper>
        </Box>
    );
}

export default Filter;