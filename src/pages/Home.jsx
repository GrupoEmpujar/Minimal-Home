import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Main from '../components/Main/Main'



const Home = () => {
    useEffect(() => {

        window.scrollTo(0, 0);
    }, []);
    return (
        <>         
            <Hero />
            <Main />

            
        </>
    )
}

export default Home