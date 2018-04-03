import React from 'react';

//Nested routing with Path parameters

/* The find method is used to search the array for an object with an id property that equals match.params.productId. 
If the product exists, the productData is displayed. If not, a “Product doesn’t exist” message is rendered. */

const Product = ({match, data}) => {
  var product= data.find(p => p.id === Number(match.params.productId));
  var productData;

  if(product)
    productData = <div>
                  <h3> {product.name} </h3>
                  <p>{product.description}</p>
                  <hr/>
                  <h4>{product.status}</h4>  </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div style={{ display: 'flex' }}>
      <div style={{
         padding: '0 10% 0 10%',
         width: '80%',
         margin: 'auto',
         background: '#ffffff' }}> 

         {productData} 
      </div>
    </div>
  )    
}
      
export default Product;