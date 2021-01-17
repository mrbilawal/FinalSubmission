import React from 'react';
import { Button, Grid } from '@material-ui/core';
import ProductService from '../../services/Product';
import { withRouter } from 'react-router-dom';
import userService from '../../services/UserService';
const SingleProduct = (props) => {
    const {product,onDelete,history}=props;
    const [count,setCount] = React.useState(0);
    console.log(props);
    return ( <Grid item xs={4}>
        <img src={product.Link} alt="Product" width="50%"></img>
        <h2>Interior : {product.interior} 
        {userService.isAdmin() && 
        <>
        <Button variant="contained" color="primary" onClick={e=>{
            console.log("Update");
            history.push("/products/update/"+product._id);
        }}>   Edit</Button>
         <Button variant="contained" color="secondary" onClick={e=>{
             ProductService.deleteProduct(product._id).then((data)=>{
                 console.log(data)
                 onDelete();
             }).catch((err=>{
                 console.log(err);
             }));
         }}>   Delete</Button>
         </>}</h2>
        <h5>Exterior :</h5><p>{product.exterior}</p>
        <h5>Description :</h5><p>{product.description}</p>
        <hr/>
    </Grid> );
}
 
export default withRouter(SingleProduct);