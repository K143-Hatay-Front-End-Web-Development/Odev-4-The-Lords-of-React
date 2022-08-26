import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Herolist from '../components/herolist'

function Home() {
    return (
        <div>
            <Header></Header>
            <Herolist></Herolist>
        </div>
    )
}

export default Home
