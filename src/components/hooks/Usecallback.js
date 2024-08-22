import React, { useState, memo, useCallback } from 'react'

const ShippingForm = memo(({onSubmit}) => {
  const [count, setCount] = useState(1);
  
  console.log("Shipping form ")
  let startTime = performance.now();

  while (performance.now() - startTime < 1000);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const details= {
            ...Object.fromEntries(formData),
            count
        }
        onSubmit(details);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Number of items: 
                <button type="button" onClick={()=> setCount(prev=> prev - 1)}>-</button>
                {count}
                <button  type="button" onClick={()=> setCount(prev=> prev +1)}>+</button>
            </label>
            <label>
                Name: <input name="name"/>
            </label>
            <label>
                Age: <input name="age"/>
            </label>
            <label>
                City: <input name="city"/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
})

function post(url, data) {
    console.log(url);
    console.log(data);
}

const ProductPage = ({productId, referalId, theme}) => {
  const handleSubmit = useCallback((orderDetails) => {
      post('/product/' + productId + "/buy", {orderDetails, referalId});
  }, [productId, referalId]);

console.log("Product page")
// const handleSubmit = useCallback(orderDetails) => {
//     post('/product/' + productId + "/buy", {orderDetails, referalId});
// };
  return (
    <div className={theme}>
            <ShippingForm onSubmit={handleSubmit}/>
    </div>
  )
} 

const Usecallback = () => {
    const [isDark, setIsDark] = useState(false);
  return (
    <>
       <label>
        <input type='checkbox' checked={isDark} onChange={(e)=> setIsDark(e.target.checked)}/> Dark Mode
        </label>
        <ProductPage referalId="aditya_referral" productId={123} theme={isDark? 'dark' : "light"}/>
    </>
    
  )
}

export default Usecallback