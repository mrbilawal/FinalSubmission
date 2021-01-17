import { Button, Grid, TextField } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import ProductService from '../../services/Product';
import Auth from '../Auth/Auth';

const NewProduct = (props) => {
    const [interior,setInterior] = React.useState("");
    const [exterior,setExterior] = React.useState("");
    const [description,setDescription] = React.useState("");
    const [Link,setLink] = React.useState("");
    return (
    <Auth> 
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <h1>Add new Service</h1>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={6}>
        <TextField id="standard-basic" label="link" fullWidth value={Link} onChange={(e=>{setLink(e.target.value)})}/>
            <TextField id="standard-basic" label="interior" fullWidth value={interior} onChange={(e=>{setInterior(e.target.value)})}/>
            <TextField id="standard-basic" label="exterior" fullWidth value={exterior} onChange={(e=>{setExterior(e.target.value)})}/>
            <TextField id="standard-basic" label="description" fullWidth value={description} onChange={(e=>{setDescription(e.target.value)})}/>
        </Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={3}></Grid>
        <Grid item xs ={9}>
            <Button variant="contained" color="primary" onClick={e=>{
            ProductService.addProduct({Link,interior,exterior,description}).then((data)=>{
                console.log(data);
                props.history.push("/products");
            }).catch(err=>{
                console.log(err);
            });
        }}>Add new Product</Button>
        </Grid>
    </Grid></Auth> );
}
 
export default NewProduct;