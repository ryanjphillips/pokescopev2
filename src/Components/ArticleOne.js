import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const ArticleOne = ({ bgColor, label, text }) => {
    return (
        <article>
            <div className='article-div'>
                <div className='article-cartridge-head' style={{backgroundColor:bgColor}}>
                    <div className='head-part-one'>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="head-part-two">
                        <div className="head-cartridge-desc">
                            <h1 className="cartidge-desc"> <span className="NINTENDO"> Nintendo</span> <span className="GAMEBOY"> GAME BOY</span> <span className="TM">TM</span></h1>
                        </div>
                    </div>
                    <div className="head-part-three">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
                <div className='article-cartridge-body' style={{backgroundColor:bgColor}}>
                    <div className='body-part-one'></div>
                    <div className="body-part-two" style={{ backgroundImage: `url(${label})`}}>
                        <div className="paragraph-div">
                            <p className="body-paragraph-div"> {text} </p> 
                        </div>
                    </div>
                    <div className="body-part-three"></div>
                </div>
                <div className='article-cartridge-footer' style={{backgroundColor:bgColor}}>
                    <div className='footer-part-one'></div>
                    <div className="footer-part-two">
                        < BiDownArrow style={{fontSize: '30px', color: 'black'}} />
                    </div>
                    <div className="footer-part-three"></div>      
                </div>
            </div>
        </article>
    )
}

export default ArticleOne;
