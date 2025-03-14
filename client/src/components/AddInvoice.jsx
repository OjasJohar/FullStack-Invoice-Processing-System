import {Box, Typography, TextField, Button, styled} from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    // styled is used to add css in MUI by defining the {styled(to be styled)} box
    marginTop:20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
})

const defaultObj ={
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
}

const AddInvoice = ({setAddInvoice}) =>{
    const [invoice, setInvoice]=useState(defaultObj);

    const onValueChange= (e) =>{
        setInvoice({...invoice, [e.target.name]: e.target.value});
    }
    const addNewInvoice= async() =>{
        //api_call(payload)
         await saveInvoice({...invoice, amount: Number(invoice['amount'])});
        //because amount is number but all other are strings
        // ... spread operator

        setAddInvoice(false);
    }

    return(
        //first it was <Box> but due to styled() it become <Component>
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                variant="standard" placeholder="Enter vendor name"
                onChange={(e) => onValueChange(e)}
                name="vendor"
                autoComplete="off"
                //autoComplete off is used to stop tab recommandation while writing
                />
                <TextField
                variant="standard" placeholder="Enter product name"
                onChange={(e) => onValueChange(e)}
                name="product"
                />
                <TextField
                variant="standard" placeholder="Enter amount (in Rs)" type="number"
                onChange={(e) => onValueChange(e)}
                name="amount"
                />
                <TextField
                variant="standard" placeholder="Enter date" type="date"
                onChange={(e) => onValueChange(e)}
                name="date"
                />

                <Button variant="contained"
                onClick={()=> addNewInvoice()}>
                    Add Invoice
                </Button>
            </Box>
        </Component>
    )
}

export default AddInvoice;