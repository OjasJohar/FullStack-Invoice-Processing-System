import {AppBar, Toolbar} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Header = () => {
    const logo="https://dashboard.getinvoice.co/dboard/img/logo.png";
    return (
        <Box>
        <AppBar position='static'>
            <Toolbar style={{display:'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <img src={logo} alt='logo' style={{width:120}}/>
                <Typography variant="h7" component="div" style={{display:'inline'}}>
                  <p style={{marginRight:'30px', paddingBottom:'0px', marginBottom:'0px'}}>Created by- </p>
                  <h3 style={{float:'left', marginRight:'5px'}}> Ojas Johar</h3>
               </Typography>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Header;