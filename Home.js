import React from 'react'
import Header from './Header'
import "./Home.css"
import Services from './Services'

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home_container">
                <div className="home_row">
                    <Services id="1" title="Welcome Students"
                        label="Welcome to you our special candidate we hope to have
                        you as part of organization and do well to complete the admission process
                        and we will be waiting for you. Thank you."
                    />
                    <Services id="2" title="Welcome Teachers" label="Get into your account and manage
                    your students marks, so that we can get a good report card for them."/>
                    {/* <Services id="3" title="Welcome Administrator"/> */}
                </div>
            </div>
        </div>
    )
}

export default Home
