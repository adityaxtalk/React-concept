import React, { useState } from 'react'
import Header from './Header'
// const Header = (props) => {
//     console.log(props)
//     const data = props.data
//   const { welcome, title, subtitle, author, date } = data
//   const { firstName, lastName } = author
//     return (
//       <header>
//         header component
//       </header>
//     )
//   }
//   console.log(props)
//   const data = props.data
// const { welcome, title, subtitle, author, date } = data
// const { firstName, lastName } = author
//   return (
//     <header>
//       <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         {firstName} {lastName}
//       </p>
//       <small>{showDate(date)}</small>
//       </div>
//     </header>
//   )


const Props = () => {  
  const [data, setData] = useState({
    welcome: 'Welcome to  React Tutorial',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Aditya',
      lastName: 'Kumar',
    },
    date: new Date(), 
  });

const [welcomeText, setText] = useState("Welcome to  React Tutorial")
  const changeWelcomeText =()=>{
    // data.welcome ="Hi Sanjith"
    // setText("Hi Sanjith")
    // console.log(data.welcome + " called form inside the function");
    setData({
      ...data,
      welcome: "Hi Sanjith"
    })
  }
  console.log(data.welcome)
  return (
    <>
     <h1>{data.welcome}</h1>
      <Header key={welcomeText} data={data} welcomeText={welcomeText} changeWelcomeText={changeWelcomeText}/>
    </>
    
  )
}

export default Props