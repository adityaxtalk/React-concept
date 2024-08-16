import React, {Suspense} from 'react'


const About = React.lazy(()=> import("./About"));

function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms), reject => reject());
}

const Home = React.lazy(()=> simulateDelay(2000).then(()=> import("./Home")));

React.lazy()
const LazyLoading = () => {
  return (
    <>
    <div>LazyLoading</div>
    <Suspense fallback={<div>Loading Home ....</div>}>
        <Home/>
    </Suspense>
    <Suspense fallback={<div>Loading About....</div>}>
        <About/>
    </Suspense>
    
    </>
    
  )
}

export default LazyLoading