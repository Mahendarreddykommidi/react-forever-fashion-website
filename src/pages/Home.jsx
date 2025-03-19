import React from 'react'

import Hero from '../components/Hero'

import Productitem from '../components/Productitem'

import Ourpolicy from '../components/Ourpolicy'
import Newsletter from '../components/Newsletter'
import Collection from './Collection'
import Latestcollections from '../components/Latestcollections'
import Bestsellers from '../components/Bestsellers'


const Home = () => {
    return (
        <div>

            <Hero />
            <Latestcollections/>
       
            <Bestsellers/>
            
            <Ourpolicy />
            <Newsletter />
            <Productitem />
            
    





        </div>
    )
}

export default Home