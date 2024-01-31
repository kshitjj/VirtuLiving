import  React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../App.css';

function NavBarStack() {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="contained">Log in/Sign in</Button>
        <Button variant="contained">Cart</Button>
        <Button variant="contained">Profile</Button>
        <Button variant="contained">Sidebar</Button>
      </Stack>
    );
  }

export default function Header(){
    const [searchVar, setSearchVariable] = useState('');
    function searchFunction(){
        console.log(`You have been searched ${searchVar}`)
    }
    return (
        <div className='body'>
            <Stack 
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
                <img className='logo' src='logo.svg' style={{width:"10%"}}></img>
                <div>
                <input className='searchField' type='text' placeholder='What are getting today?' value={searchVar} onChange={(e) => setSearchVariable(e.target.value)}></input> 
                <Button variant="search" onClick={searchFunction}>Search Button</Button>
                </div>
                <NavBarStack />
            </Stack>
        </div>
    )
}