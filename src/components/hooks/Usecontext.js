import React, { useState, createContext, useContext } from 'react'

const GrandChildComponent = ({dataFromChild}) => {
    return (
        <div>
            <p>Username in GrandChild: {dataFromChild.name}</p>
        </div>
    )
}

const ChildComponent = ({dataFromParent}) => {
    return <div>
        <p> Your email : {dataFromParent.email}</p>
        <GrandChildComponent dataFromChild={dataFromParent}/>
    </div>
}

const ParentComponent = () => {
    const [userData, setUserData] = useState({
        name: "Adita",
        email: "adityamax@gmail.com"
    })

    return (
        <div>
            <h1>Welcome {userData.name}</h1>
            <ChildComponent dataFromParent={userData}/>
        </div>
    )
}


const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);
const Form = () => {
    return (
        <Panel title="Welcome">
           <Button>Sign Up</Button>
           <Button>Log In</Button>
           <LoginButton/>
        </Panel>
    )
}


function LoginButton() {
    const {
        currentUser, setCurrentUser
    } = useContext(CurrentUserContext);

    if (currentUser !== null) {
        return <p>You logged in as {currentUser.name}</p>
    }

    return <Button onClick={()=> {
        setCurrentUser({name: "Aditya"})
    }}>Log in as Aditya</Button>
}

function Panel({title, children}) {
   const theme = useContext(ThemeContext);
   const className = "panel-" + theme;

   return (
    <section className={className}>
        <h1>{title}</h1>
        {children}
    </section>
   )
}


function Button({children, onClick}) {
   const theme = useContext(ThemeContext);
   const className = "button-" + theme;
   return (
    <button className={className} onClick={onClick}>{children}</button>
   )
}

const Usecontext = () => {

    const [theme, setTheme] = useState("light");
    const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
        <div>Usecontext</div>
        <ParentComponent/>
        <ThemeContext.Provider value={theme}>
                <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
                        <Form/>
                </CurrentUserContext.Provider>
                
                <label>
                    <input type='checkbox' checked={theme === "dark"} onChange={(e)=> setTheme(e.target.checked ? 'dark': 'light')}/> Use Dark mode
                </label>
        </ThemeContext.Provider>
    </>
    
  )
}







export default Usecontext