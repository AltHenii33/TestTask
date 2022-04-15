import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import './User.css';


const User = (props) => {

    const date = new Date(props.date || 1);
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
    }).replace(/ /g, ' ');


    return (
        <Box className='User'>
            <Avatar
                alt="Remy Sharp"
                src={props.img}
                variant="rounded"
                sx={{ width: 85, height: 82, mt: '24px', ml: '24px', borderRadius: '12px' }}
            />
            <div className='UserData'>
                <h2 className='HeaderUser'>
                    {props.firstName} {props.lastName}
                </h2>
                <div className='DateUser'>
                    <div>
                        {formattedDate}
                    </div>
                </div>
                <div className='AddressUser'>
                    {props.city},{props.address?.name} {props.address?.number}
                </div>
                <div className='MailUser'>
                    {props.email}
                </div>
            </div>
            <button className='EditButton'>
                Edit
            </button>
        </Box>
    );
}

export default User;