import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

export default function App() {
    
    const myData = data.map(item => {
        return <Card
                     key={item.location}
                     {...item}
               />
    })
    return (
        <div>
            <Navbar />
            {myData}
        </div>
    )
}