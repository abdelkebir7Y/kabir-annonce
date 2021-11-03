import parse from 'html-react-parser';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from 'react';
import './result.style.css'



const  Result =({content , backgroundUrl , colorOpacity , backgroundOpacity}) =>{
    const renderChildren =() => {
        return React.Children.map(parse(content ), child => {
            const clonedElement = React.cloneElement(child , {
                            children : <MathJaxContext>
                                            <MathJax >{child.props.children} </MathJax>
                                        </MathJaxContext> ,
                            key : Math.random()
            })
            return clonedElement;
        })
    }
    return (
        <div className='result' >
            <div className='background-image' style={{backgroundImage : `url(${backgroundUrl})`, opacity : `${backgroundOpacity/100}` }} >
                <div className='background-color' style={{backgroundColor : `rgba(0,0,0,${colorOpacity/100})` }} />
            </div>
            <div className='border-top'> 
                <img src='./border1.png' alt='' />
            </div>
            <div className='content'>
                {
                    content ?
                        renderChildren()
                    : ''
                }
            </div>
            <div className="border-bottom"> 
                <img src='./border1.png' alt='' />
            </div>
        </div>
        
    ) 
    
}

export default Result;