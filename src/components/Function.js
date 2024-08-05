import React from 'react'

const welcome = 'Welcome to React Tutorial'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'

const date = 'Jul 30, 2024'
const author = {
    firstName: 'Adita',
    lastName: 'Kumar',
  }
const Header = () => {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            Instructor: {author.firstName} {author.lastName}
          </p>
          <small>Date: {date}</small>
        </div>
      </header>
    )
  }

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = 2020
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

const Main = () => (
    <main>
      <div className='main-wrapper'>
        <div>
          <p>
            Prerequisite to get started{' '}
            <strong>
              <em>react.js</em>
            </strong>
            :
          </p>
          <ul>{techsFormatted}</ul>
          {result}
          {personAge}
        </div>
      </div>
    </main>
  )

  const copyRight = '2020'

const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length)
      color += str[index]
    }
    return '#' + color
  }

  const HexaColor = () => <div>{hexaColor()}</div>

const Function = () => {
  return (
<>
  <Header/>
  <Main/>
  <HexaColor/>
  <Footer/>
</>
  )
}

export default Function