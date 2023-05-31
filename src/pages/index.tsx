import type { NextPage } from 'next'
import {
    Box,
    Button,
    CircularProgress,
    Paper,
    SpeedDial,
    SpeedDialIcon,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import Link from 'next/link';
import { wrapper } from '../store/app-store';
import { selectGeneralState, setBreadcrumbs, setPageName, setStubs, setStubsIsLoaded } from '../store/general-slice';
import { useDispatch, useSelector } from 'react-redux';
import { MockDto, Pageable } from '../client/models';
import { useEffect } from 'react';

const Home: NextPage = () => {
    const generaleState = useSelector(selectGeneralState);
    const dispatch = useDispatch();

    let content: any

    useEffect(() => {
        if (generaleState.stubsIsLoaded) {
            fetch('/api/mock/all?page=0&size=10')
                .then((res) => res.json())
                .then((data: Array<MockDto>) => dispatch(setStubs(data)));
        }
    })

    if (generaleState.stubsIsLoaded) {
        content = (
            <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <CircularProgress />
            </Box>
        )
    } else {
        content = (
            <>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Path</TableCell>
                                    <TableCell align="right">Is Active</TableCell>
                                    <TableCell align="right">Requests number</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {generaleState.stubs.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.id}</TableCell>
                                        <TableCell align="right">{row.name}</TableCell>
                                        <TableCell align="right">{row.path}</TableCell>
                                        <TableCell align="right">{String(row.active)}</TableCell>
                                        <TableCell align="right">{row.requestDtoList.length}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", mr: 1, mt: 1 }}>
                    <Button
                        component="a"
                        href='/stubs/create'
                        variant="outlined"
                        LinkComponent={Link}
                    >
                        Create
                    </Button>
                </Box>
            </>
        )
    }


    return (
        <Box>
            {content}
        </Box>

    )
}

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async ({ }) => {
            store.dispatch(setPageName("Stubs"));
            store.dispatch(setBreadcrumbs(["Stubs"]));
            store.dispatch(setStubsIsLoaded(true));
            return {
                props: {}
            };
        }
);
