import React from 'react'

export const Sections = ( { gameOneClick, changeGameOne , gameTwoClick, changeGameTwo , gameThreeClick, changeGameThree} ) => {
    return (
        <section>
            <div className="section-div">
                <div className='section-game-one' onClick={gameOneClick} style={{order: changeGameOne}}>
                    <div className='game-one-fullsection'>
                        <h3 className="game-one-header">* FAQ * </h3>
                    </div>
                    <div className="game-one-halfsection">
                    </div>
                </div>
                <div className='section-game-two' onClick={gameTwoClick} style={{order: changeGameTwo}}>
                    <div className='game-two-fullsection'>
                        <h3 className="game-two-header"> * About Section * </h3>
                    </div>
                    <div className="game-two-halfsection">
                    </div>
                </div>
                <div className='section-game-three' onClick={gameThreeClick} style={{order: changeGameThree}}>
                    <div className='game-three-fullsection'>
                        <h3 className="game-three-header"> * Getting Started *</h3>
                    </div>
                    <div className="game-three-halfsection">
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sections;