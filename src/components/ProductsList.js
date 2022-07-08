import ProductItem from "./ProductItem";

const ProductsList = (props) => {
  // console.log('FROM PRODUCTLIST COMPONENT', props.products);
  return (
    <div>
      <h2>Products</h2>

    
         {/* Here we map over the array */}
        {/* {props.products.map((product, idx) => <ProductItem product={product} key={idx} /> )} */}

      {/* {
        props.products.map( (item, idx) => 
        item.inStock ? (<ProductItem product={item} 
        key={idx}/>) :( <h3 key={idx}>{item.name} is out of stock!</h3>) )
      } */}

      {
        props.products.map(
          (item, idx) => item.inStock && <ProductItem product={item} key={idx} addToCart={props.addToCart} /> 
        )}
    </div>
  );
};

export default ProductsList;
