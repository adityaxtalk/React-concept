import React, {useEffect} from 'react'
import {  useFormik } from 'formik'
import * as Yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required').min(3, "Minimum 3 length is required"),
  lastName: Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  weight: Yup.number().required("Weight is required").positive("Weight must be positive"),
  skills: Yup.object().shape({
    html: Yup.boolean(),
    css: Yup.boolean(),
    javascript: Yup.boolean()
  }),
  course: Yup.string().required("Course is required"),
  dateOfBirth: Yup.date().required("Date of birth is required")
});



const courseLabel = [
  {
    label: "--Please select Course--",
    value: "",
  },
  {
    label: "HTML",
    value: "html",
  },
  {
    label: "CSS",
    value: "css",
  },
  {
    label: "Python",
    value: "python",
  },
];

const selectedOptions = courseLabel.map((option) => (
  <option key={option.value} value={option.value}>
    {option.label}
  </option>
));

const FormValidation = () => {
  const formik= useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      weight: "",
      course: "",
      skills: {
        html: false,
        css: false,
        javascript: false
      },
    },
    validationSchema,
    onSubmit: (values, {setSubmitting, resetForm})=>{
      const formattedSkills = Object.keys(values.skills).filter(skill=> skill);
      const data={
        ...values,
        skills: formattedSkills.map(skill=> skill.toUpperCase())
      }
      console.log(data);
      setTimeout(()=> {
        alert("Form submitted successfully");
        setSubmitting(false);
        resetForm();
      }, 1000);
    }
  })
  return (
    <div className='app'>
      <h3>Form Validation</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='form-group'>
            <label htmlFor='firstName'>firstName</label>
            <input type="text" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleChange} placeholder='First Name'/>
            {formik.touched.firstName && formik.errors.firstName ? (<div>{formik.errors.firstName}</div>) : null}
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>lastName</label>
            <input type="text" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleChange} placeholder='Last Name'/>
            {formik.touched.lastName && formik.errors.lastName ? (<div>{formik.errors.lastName}</div>) : null}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="text" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email'/>
            {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
          </div>
        </div>
        <div className='form-group'>
            <label htmlFor='dateOfBirth'>Date Of Birth</label>
            <input type="date" name='dateOfBirth' value={formik.values.dateOfBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Date of Birth'/>
            {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (<div>{formik.errors.dateOfBirth}</div>) : null}
          </div>
          <div className='form-group'>
            <label htmlFor='weight'>weight</label>
            <input type="number" name='weight' value={formik.values.weight} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Weight in Kg'/>
            {formik.touched.weight && formik.errors.weight ? (<div>{formik.errors.weight}</div>) : null}
          </div>
          <div className='form-group'>
            <label htmlFor='course'>Course</label>
            <select name='course' onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.country} id="course">
              {selectedOptions}
            </select>
            {formik.touched.course && formik.errors.course ? (<div>{formik.errors.course}</div>) : null}
          </div>
          <div className='form-group'>
            <p>Select your skills</p>
            <div>
              <input type="checkbox" id="html" name='skills.html' onChange={formik.handleChange} checked={formik.values.skills.html}/>
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input type="checkbox" id="css" name='skills.css' onChange={formik.handleChange} checked={formik.values.skills.css}/>
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input type="checkbox" id="javascript" name='skills.javascript' onChange={formik.handleChange} checked={formik.values.skills.javascript}/>
              <label htmlFor='javascript'>Javascript</label>
            </div>
          </div>
          <div className='form-group'>
            <button type='submit' disabled={formik.isSubmitting}>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default FormValidation