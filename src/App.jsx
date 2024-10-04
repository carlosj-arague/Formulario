import { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import { FormControl } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'



import './index.css';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [language, setLanguage] = useState('');
  const [terms, setTerms] = useState(false);
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);


  function changeName(event) {
    setName(event.target.value);
  }
  function changeSurname(event) {
    setSurname(event.target.value);
  }
  function changeAge(event) {
    setAge(event.target.value);
  }


  function changeSelect(event) {
    setLanguage(event.target.value);
  }

  function changeRadioButton(event) {
    setGender(event.target.value);
  }

  function changeRating(event) {
    if (rating == event.target.value) {
      setRating(0)
    } else {
      setRating(event.target.value);
    }

  }

  function changeCheckbox(event) {
    setTerms(event.target.checked);
    if (terms) {

    }
  }

  function resetData() {
    setName('');
    setSurname('');
    setAge('');
    setLanguage('');
    setGender('');
    setRating(0)
    setTerms(false);
  }

  function submitData() {
    console.log(name, surname, age, gender, language, rating)
    handleClose()
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
  }


  return (
    <Container className='container1'>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={{ xs: 1 }} size={{ xs: 6,  md: 12 }}>
          <Grid>
            <TextField sx={{ width: '50ch' }} fullWidth required id="name" label="Nombre" variant="outlined" value={name} onChange={changeName} />
          </Grid>
          <Grid>
            <TextField sx={{ width: '50ch' }} fullWidth required id="surname" label="Apellidos" variant="outlined" value={surname} onChange={changeSurname} />
          </Grid>
          <Grid>
            <TextField sx={{ width: '20ch' }} fullWidth required id="age" label="Edad" variant="outlined" type="number" value={age} onChange={changeAge} />
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={{ xs: 1 }} justifyContent='center' size={{ xs: 12, md: 12 }}>
          <Grid>

            <FormControl sx={{ alignItems: 'center' }} >Género
              <RadioGroup row name="gender" value={gender} onChange={changeRadioButton}>
                <FormControlLabel required value="female" control={<Radio />} label="Femenino" />
                <FormControlLabel required value="male" control={<Radio />} label="Masculino" />
                <FormControlLabel required value="other" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>

          </Grid>

          <Grid size={{ xs: 9, md: 6 }}>
            <Box>

              <FormControl fullWidth required>
                <InputLabel id="select">Lenguaje de Programación Favorito</InputLabel>
                <Select sx={{ width: '50ch', justifyContent: 'left' }} labelId="select" id="selectId"value={language} label="language" onChange={changeSelect}>
                  <MenuItem value={'javascript'}>JavaScript</MenuItem>
                  <MenuItem value={'java'}>Java</MenuItem>
                  <MenuItem value={'python'}>Python</MenuItem>
                </Select>
              </FormControl>
              
            </Box>

          </Grid>
        </Grid>
        <br />
        <Divider orientation="horizontal"></Divider>
        <br />
        <Grid container spacing={{ xs: 1, md: 4 }} >
          <Grid>
            <Typography component="legend">Puntúa esta encuesta</Typography>
          </Grid>
          <Rating name="half-rating" value={rating} defaultValue={0} precision={0.5} max={5} onChange={changeRating} />
        </Grid>

        <FormGroup>
          <FormControlLabel control={<Checkbox checked={terms} onChange={changeCheckbox} />} label="He leído los términos y condiciones" />
        </FormGroup>


        <Grid container spacing={2} justifyContent="center" size={{ md: 12 }}>
          <Grid xs={12}>
            <Button fullWidth variant='contained' type='submit' disabled={!terms}>ENVIAR</Button>
          </Grid>
          <Grid xs={12}>
            <Button fullWidth variant='outlined' color='error' onClick={resetData}>LIMPIAR</Button>
          </Grid>
        </Grid>
      </form>



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog"
      >
        <DialogTitle id="title">
          {"Condirmación"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog">
            ¿Estás seguro de que desea mandar la encuesta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={submitData} autoFocus>Sí
          </Button>
        </DialogActions>
      </Dialog>

    </Container>



  )
}

export default App
