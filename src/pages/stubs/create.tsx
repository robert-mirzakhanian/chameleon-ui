import type { NextPage } from 'next'
import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, SpeedDial, SpeedDialIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { globalStore, wrapper } from '../../store/app-store'
import generalSlice, { setBreadcrumbs } from '../../store/general-slice'
import createStubSlice, { HttpMethod, initiLoad, selectCreateStubState, setMethod, setText } from '../../store/create-stub-slice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const CreateStub: NextPage = () => {
  const createStubState = useSelector(selectCreateStubState)
  const dispatch = useDispatch();
  let selectedValue = createStubState.data.method


  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, ml: 1, mr: 1, mt: 1 }}>
      <TextField id="outlined-required" required label="Name" />
      <TextField id="outlined-required" required label="Path" />
      <FormControl>
        <InputLabel>HttpMethod</InputLabel>
        <Select
          // value={selectedValue}
          label="Methods"
          onChange={(e) => {
            dispatch(setMethod(e.target.value))
          }}
        >
          <MenuItem value={HttpMethod.GET}>GET</MenuItem>
          <MenuItem value={HttpMethod.POST}>POST</MenuItem>
          <MenuItem value={HttpMethod.DELETE}>DELETE</MenuItem>
          <MenuItem value={HttpMethod.HEAD}>HEAD</MenuItem>
          <MenuItem value={HttpMethod.PUT}>PUT</MenuItem>
          <MenuItem value={HttpMethod.PATCH}>PATCH</MenuItem>
          <MenuItem value={HttpMethod.OPTIONS}>OPTIONS</MenuItem>
          <MenuItem value={HttpMethod.TRACE}>TRACE</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <TextField id="outlined-required" required label="Path" />
      <RadioGroup row name="use-radio-group" defaultValue="active">
        <FormControlLabel value="active" label="Active" control={<Radio />} />
        <FormControlLabel value="inactive" label="Inactive" control={<Radio />} />
      </RadioGroup>
    </Box>
  )
}

export default CreateStub

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ }) => {
      if (!store.getState().createStub.isInitLoaded) {
        const breadcrumbs: String[] = Array.from(store.getState().general.breadcrumbs)
        breadcrumbs.push("Create");
        store.dispatch(setBreadcrumbs(breadcrumbs))
        store.dispatch(initiLoad(true))
        store.dispatch(setMethod(HttpMethod.GET))
      }
      return {
        props: {
        }
      };
    }
);