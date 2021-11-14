import parse from 'html-react-parser';
import { MathJax, MathJaxContext } from "better-react-mathjax";
import React from 'react';
import border from './border1.png'
import './result.style.css'



const  Result = React.forwardRef(({content , backgroundUrl , colorOpacity , backgroundOpacity , width,height} ,ref) =>{
    const renderChildren =() => {
        return React.Children.map(parse(content ), child => {
            const clonedElement = React.cloneElement(child , {
                            children :child.props.children 
                                        ? 
                                            (<MathJaxContext>
                                                <MathJax >{child.props.children} </MathJax>
                                            </MathJaxContext> ) 
                                        : undefined,
                            key : Math.random()
            })
            return clonedElement;
        })
    }
    return (
        <div className='result' ref={ref} style={{width : `${width}px`}}>
            <div className='background-image' style={{backgroundImage : `url(${backgroundUrl})`, opacity : `${backgroundOpacity/100}` }} >
                <div className='background-color' style={{backgroundColor : `rgba(0,0,0,${colorOpacity/100})` }} />
            </div>
            <div className='border-top'> 
                <img src={border} alt='' />
            </div>
            <div className='content' style={{height : `${height}px`}}>
                {
                    content ?
                        renderChildren()
                    : ''
                }
            </div>
            <div className="border-bottom"> 
                <img src={border} alt='' />
            </div>
        </div>
        
    ) 
    
});

export default Result;