import React from 'react'

const Main = () => {
    return (
        <main>
            <div className="main-div">
                <div className="background-div"></div> 
                    <div className="background-left-div">
                        <p className="main-background-arrowleft">{'<'} 
                        </p> 
                    </div>
                    <div className="background-right-div">
                        <p className="main-background-arrowright">{'>'} 
                        </p> 
                    </div>
            </div>
        </main>
    )
}

export default Main
