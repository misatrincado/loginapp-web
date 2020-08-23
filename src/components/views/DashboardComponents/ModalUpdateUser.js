import React, { useState, useEffect } from 'react'
import { Modal, CardContent, Card, Grid, Typography, FormControl, InputLabel, Input, Button } from '@material-ui/core'
import { connect, useDispatch } from 'react-redux'
import { startUpdateUsers } from '../../../redux/actions/login'

function ModalUpdateUser({
  modalId, setModalId,list
}) {
  const dispatch = useDispatch()

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    findUser()
  }, [modalId]);

  const findUser = () => {
    const finder = list.find(i => i.id === modalId);
    console.log("finder",{list,finder})
    if(finder) {
      setUser(finder.user);
      setEmail(finder.email);
    }
  }

  const handleUpdateUser = () => {
    dispatch(startUpdateUsers({payload:{
      id: modalId,
      user, email
    }}))
  }
  
  return (
    <Modal
      style={{ maxWidth: 400, margin: 'auto', marginTop: 40, marginLeft: 40, marginRight: 40 }}
      open={modalId ? true : false}
      onClose={() => setModalId(0)}
    >
      <Card>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography>Editar usuario</Typography>
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
            <Grid item xs={12}>
              <Button onClick={handleUpdateUser} variant="contained" color="primary">Agregar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  list: state.users.userList,
});

export default connect(mapStateToProps)(ModalUpdateUser);
