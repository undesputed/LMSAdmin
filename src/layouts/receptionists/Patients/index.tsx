import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import NavigationPanel from '../../../component/Navigation';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

const mdTheme = createTheme();

const Patient = () => {

    return(
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <NavigationPanel />

                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                    >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        Patient Page
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Patient;