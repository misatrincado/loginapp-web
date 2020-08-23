import React, { useState } from 'react'
import { Modal, Box, Container, Card, CardContent, Typography, Grid, FormControl, InputLabel, Input, Button } from '@material-ui/core'
import { startCreateUsers } from '../../../redux/actions/login'
import { useDispatch } from 'react-redux'

export default function ModalAddUser() {
  const dispatch = useDispatch()

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleAddUser = () => {
    dispatch(startCreateUsers({
      payload: {
        user, email, pass
      }
    }))
  }


  return (
    <Card>
      <CardContent>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography>Agregar usuario</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Nombre usuario</InputLabel>
              <Input
                type="text"
                id="my-input"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Correo</InputLabel>
              <Input
                type="email"
                id="my-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
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
            <Button onClick={handleAddUser} variant="contained" color="primary">Agregar</Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>)
}
