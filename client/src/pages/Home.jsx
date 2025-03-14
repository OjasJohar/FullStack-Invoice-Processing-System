import Header from "../components/Header";
import {Box, Typography, Button} from "@mui/material";
import AddInvoice from "../components/AddInvoice";
import { useState, useEffect } from "react";
import Invoices from '../components/Invoices';
import { getAllInvoices, deleteInvoice } from "../services/api";

const Home = () => {
    const [addInvoice, setAddInvoice]= useState(false);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const getData= async() => {
            const response = await getAllInvoices();
            setInvoices(response.data);
        }
        getData();
    }, [addInvoice])

    const toggleInvoice= () => {
        setAddInvoice(true);
    }

    const removeInvoice= async (id) => {
        await deleteInvoice(id);

        const updatedInvoice =invoices.filter(invoice => invoice.id !== id);//!=
        setInvoices(updatedInvoice);
    }
    return (
        // Box and typography are replacement of <div> and <p> in materialUI
        // variant are MUI properties which we can read about on mui.com
        <>
            <Header/>
            <Box style={{margin: 20}}>
               <Typography variant="h4">Pending Invoices</Typography>

               {!addInvoice && <Button variant="contained" style={{marginTop: 15}}
                onClick={()=> toggleInvoice()}
               >Add Invoice</Button>
               }
               { addInvoice && <AddInvoice setAddInvoice={setAddInvoice}/> }

               <Box>
                <Invoices invoices={invoices} 
                removeInvoice={removeInvoice}/>
               </Box>
            </Box>
        </> 
    )
}
export default Home;