import * as React from 'react';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { getUsersPerPage } from '../../Store/Main-reduser';
import { setValueUsers } from '../../Store/Main-reduser'
import './List.css';
import User from './User';


const List = () => {

    const CustomPagination = styled(Pagination)(({ theme }) => ({

        "& 	.MuiPaginationItem-root": {
            width: '37px',
            height: '37px',
            border: '1px solid #121212',
            borderRadius: '24px',
            background: '#FFFFFF',
        },
        "& .MuiPaginationItem-root.Mui-selected": {
            background: '#ECD3FA',
        }
    }));

    const dispatch = useDispatch();
    const Users = useSelector((state) => state.main.Users);
    const valueUsers = useSelector((state) => state.main.valueUsers);

    const [PageValue, setPageValue] = React.useState(1);
    const handleChange = () => {
        setPageValue(PageValue + 1);
    };

    const setPage = (e, p) => {
        setPageValue(p);
    };

    let UsersPerPage = Users.slice((PageValue - 1) * 5, PageValue * 5);


    const UsersElements = UsersPerPage.map((el, idx) => {
        return (<User
            key={idx}
            firstName={el?.name?.first}
            lastName={el?.name?.last}
            date={el?.dob?.date}
            city={el?.location?.city}
            address={el?.location?.street}
            email={el?.email}
            img={el?.picture?.large}
        />)
    })

    const [value, setValue] = React.useState(50);
    const handleSelect = async (event) => {
        await dispatch(getUsersPerPage(event.target.value))
        setPageValue(1)
      };

    return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: '72px', width: '575px', height: '749px' }}>
                {UsersElements}
            </Box>
            <div className='Pagination' >
                <CustomPagination
                    hidePrevButton
                    hideNextButton
                    count={Users.length / 5}
                    page={PageValue}
                    onChange={setPage}
                    variant="outlined"
                // sx={{ mt: '27px' }}
                />
                <button disabled={(Users.length / 5 === PageValue)} onClick={() => handleChange()} className='NextPageButton' >Next page ></button>
                <select name="Users" id="Users" className='QuantityUsers'
                    value={valueUsers}
                    onChange={handleSelect}>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="500">All</option>
                </select>
            </div>
        </Box>
    );
}

export default List;