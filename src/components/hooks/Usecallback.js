import React from 'react'
import { useState, memo, useCallback } from 'react'

function post(url, details) {
  console.log(url);
  console.log(details)
}

const ShippingForm = memo(function ShippingForm({onSubmit}) {
  const [count, setCount] = useState(0);
  let startTime = performance.now();
  while (performance.now() - startTime < 500);
  console.log("Shipping Form");
  function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);

      const orderDetails = {
        ...Object.fromEntries(formData),
        count
      }
      console.log(orderDetails);
      onSubmit(orderDetails);
  };


  return (
    <form onSubmit={handleSubmit}>
       <label> 
           Number of items: 
           <button type='button' onClick={()=> setCount(prev=> prev-1)}>-</button>
           {count}
           <button type='button' onClick={()=> setCount(prev=> prev+1)}>+</button>
       </label>
       <label>
           Street:
           <input type="text" name="street"/>
       </label>
       <label>
           City:
           <input type='city' name="city"/>
       </label>
       <button type='submit'>Submit</button>
    </form>
  )
})

const ProductPage = ({productId, referalId, theme}) => {
  console.log("In product page");
  const handleSubmit = useCallback((orderDetails) => {
      post(`/product/${productId}/buy`, {
        referalId,
        orderDetails
      });
  }, [productId, referalId]);

  // const handleSubmit = (orderDetails) => {
  //     post(`/product/${productId}/buy`, {
  //       referalId,
  //       orderDetails
  //     });
  // };

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit}/>
    </div>
  )
}



const Usecallback = () => {
  const [dark, setDark] = useState(false);
  return (
    <>
      <div>Usecallback</div>
      <label>
        <input type='checkbox' checked={dark} onChange={(e)=> setDark(e.target.checked)}/> Dark mode
      </label>
      <hr/>
      <ProductPage theme={dark? "isDark" : "isLight"} productId="123" referalId="aditya_referral"/>      
    </>
    
  )
}

export default Usecallback