import { Box, InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const SearchField = () => {
    const [value, setValue] = React.useState('');
    return (
        <Box display='flex' alignItems='center' mr={2} width={'80rem'}>
            <TextField
                id="search"
                placeholder="Cari di sini ..."
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    disableUnderline: true,
                    style: {
                        color: '#000',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        padding: '.5rem 1rem',
                        borderRadius: '20px',
                        backgroundColor: '#f5f5f5',
                        '&:hover': {
                            backgroundColor: '#f5f5f5',
                        }
                    }
                }}
            />
        </Box>
    )
}

export default SearchField
