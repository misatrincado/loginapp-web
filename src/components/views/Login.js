import React, { useState } from 'react'
import { connect } from 'react-redux';
import { startGetLogin } from '../../redux/actions/login'
import { useDispatch } from 'react-redux'
import logo from '../../assets/hi-res-icon.png'
import { Input, Card, CardContent, Grid, Button, Container, Box, Typography, FormControl, InputLabel } from '@material-ui/core';

function Layout({message}) {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleAuth = () => {
    dispatch(startGetLogin({ 
      payload:{user,pass}
     }))
  }

  return (
    <Box m={3}>
      <Container maxWidth="sm" >
      <Card>
        <CardContent>
          <Grid container spacing={4} justify="center" alignItems="center" direction="column">
            <Grid item xs={12} style={{textAlign:'center'}}>
              <img  src={logo} style={{width:100}}/>
              <Typography variant="h6">LoginApp</Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="my-input">Nombre usuario</InputLabel>
                <Input 
                  id="my-input"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <InputLabel htmlFor="my-input">Contraseña</InputLabel>
                <Input 
                type="password" 
                id="my-input"
                value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleAuth} variant="contained" color="primary">ENTRAR</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </Container>
    </Box>
  )
}


const mapStateToProps = (state) => ({
  message: state.session.message,
});

export default connect(mapStateToProps)(Layout);
