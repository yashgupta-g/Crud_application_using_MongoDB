import { FormControl, FormGroup,styled ,Button ,   InputLabel , Input, Typography } from '@mui/material'
import React from 'react'

export default function AddUser() {
const Container= styled(FormGroup)`
width : 50%;
margin: 5%  auto  0 auto ; 
& > div{
    
margin-top : 20px;
margin-bottom: 5px
}
`

  return (
    <Container>
      <Typography variant="h2"> Add User </Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input />
      </FormControl>
      <Button variant="contained">Add User </Button>
    </Container>
  );
}
