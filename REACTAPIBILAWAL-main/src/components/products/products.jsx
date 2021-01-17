import React from 'react';
import SingleProduct from './singleproduct';
import { Grid } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import ProductService from '../../services/Product';
import userService from '../../services/UserService';
import Pagination from '@material-ui/lab/Pagination';
const useStyles = makeStyles((theme) => ({
    addBtn : {
        position:"absolute",
        top:theme.spacing(10),
        right:theme.spacing(5),

    }
  }));
const Products = (props) => {
    const [products, setProducts] = React.useState([]);
    const [total,setTotal]=React.useState(0);
    const classes = useStyles();
    const page =props.match.params.page ? props.match.params.page:1;
    const getData = () =>{
        ProductService.getProducts(page).then((data)=>{setProducts(data.products); setTotal(data.total);}).catch((err)=>{console.log(err);});
    };
    // getData();
    React.useEffect(getData,[page]);
    // console.log("Inside Product Component");
    const handlenewproduct=()=>{
        console.log(props);
        props.history.push("/products/new");
    };
    return ( <div>
        <h1 style={{textAlign : "center"}}>SERVICES</h1>
        
        {userService.isLoggedin()&&<Fab color="primary" aria-label="add" className={classes.addBtn} onClick={handlenewproduct}>
        <AddIcon />
        </Fab>}
        {products.length ===0 ? <p>There is no data</p> : <Grid container spacing={3}>
            {products.map((product,index)=><SingleProduct key={index} product={product} onDelete={getData}/>)}
        </Grid>}
    </div> );
}
 
export default Products;