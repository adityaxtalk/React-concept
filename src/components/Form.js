import React, { useState } from 'react'

const Form = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        age: 0
    });

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        debugger
        const {name, value} = event.target;
        setData({
            ...data,
            [name] : value
        })
    }

    const validate = () => {
         const tempError={};
         if (data.name.trim().length === 0) {
            tempError["name"] = "Name is required";
         }
         if (data.email.trim().length === 0) {
            tempError["email"] = "Email is required";
         }

         if (data.age < 0 || isNaN(data.age)) {
            tempError["age"] = "Invalid age";
         }
         setErrors(tempError);
         return tempError;
    }

    const handleSubmit = (e) => {
        debugger
        e.preventDefault();
        const errors= validate();
        if (Object.keys(errors).length) {
            return
        }
        alert("Form submitted successfully");
        setErrors({});
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" value={data.name} onChange={handleChange}/>
            { errors.name && <span>{errors.name}</span>}
            <input type='text' id="email" name="email" value={data.email} onChange={handleChange}/>
            {errors.email && <span>{errors.email}</span>}
            <input type='number' id="age" name="age" value={data.age} onChange={handleChange}/>
            {errors.age && <span>{errors.age}</span>}
            <button type='submit'>Submit</button>
        </form>
    </>
    
  )
}

export default Form