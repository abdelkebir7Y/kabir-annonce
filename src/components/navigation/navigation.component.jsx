import './navigation.style.css';
import {BsFillImageFill , BsBorderWidth} from 'react-icons/bs';
import {MdOutlineEmojiSymbols} from 'react-icons/md'
import {GiResize} from 'react-icons/gi';
import { useState } from 'react';
import DropDown from '../drop-down/drop-down.component';
const Navigation = (props) => {
    const [dropDown , setDropDown] = useState(0);
    const setDropDown1 = (value) => {
        if (value === dropDown)
            setDropDown(0);
        else   
            setDropDown(value);
    }
    return(
        <div className='navigation'>
            <div
                onClick={() => {setDropDown1(1)}} 
                className='math-symbols' title='Math symbols'><MdOutlineEmojiSymbols/>
            </div>
            <div
                onClick={() => {setDropDown1(2)}} 
                className='background' title='Background'><BsFillImageFill/>
            </div>
            <div
                onClick={() => {setDropDown1(3)}} 
                className='borders' title='Borders'><BsBorderWidth />
            </div>
            <div
                onClick={() => {setDropDown1(4)}} 
                className='resize' title='Resize'><GiResize />
            </div>
            {
                dropDown === 1 ?
                    <DropDown top='10px' dropDown={dropDown}/>
                : 
                    dropDown === 2 ?
                        <DropDown top='85px' dropDown={dropDown} {...props}/>
                    :
                        dropDown ===3 ?
                            <DropDown top='160px' dropDown={dropDown} />
                        : dropDown===4 ?   
                                <DropDown top='235px' dropDown={dropDown} {...props} />
                            :''
            }
        </div>
    )
}


export default Navigation;