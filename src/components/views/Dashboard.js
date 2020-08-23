import React, { useEffect, useState } from 'react'
import { Input, Card, CardContent, Grid, Button, Container, Box, Typography, FormControl, InputLabel, ListItem, ListItemText, List, ListItemSecondaryAction, IconButton, Modal } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { startObtainUsers, signOut } from '../../redux/actions/login';
import { useDispatch, connect } from 'react-redux';
import ModalAddUser from './DashboardComponents/ModalAddUser';
import ModalUpdateUser from './DashboardComponents/ModalUpdateUser';

function Dashboard({ list }) {
  const dispatch = useDispatch()
  const [modalId, setModalId] = useState(0)

  useEffect(() => {
    dispatch(startObtainUsers())
  }, [])

  const LogOut = () => {
    dispatch(signOut())
  }

  return (
    <>
      <Box m={3}>
        <Container maxWidth="sm" >
          <Card style={{marginBottom:20}}>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={10}>
                  <Typography variant="h6">Listado de usuarios</Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton edge="end" aria-label="comments" onClick={LogOut}>
                    <ExitToAppIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    {
                      list.map(i => (
                        <ListItem button>
                          <ListItemText primary={i.user} secondary={i.email} />
                          <ListItemSecondaryAction onClick={() => setModalId(i.id)}>
                            <IconButton edge="end" aria-label="comments">
                              <CreateIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))
                    }
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <ModalAddUser/>
          <ModalUpdateUser modalId={modalId} setModalId={setModalId} />
        </Container>
      </Box>
    </>
  )
}




const mapStateToProps = (state) => ({
  list: state.users.userList,
});

export default connect(mapStateToProps)(Dashboard);
