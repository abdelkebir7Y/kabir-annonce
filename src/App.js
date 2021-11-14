import {exportComponentAsPNG } from 'react-component-export-image';
import React, {useState , useRef} from "react";
import './App.css';
import Navigation from "./components/navigation/navigation.component";
import Result from "./components/result/result.component";
import TextEditor from "./components/text-editor/text-editor.component";


const App = () => {
  const [content, setContent] = useState('')
  const [backgroundUrl , setBackgroundUrl] = useState('');
  const [colorOpacity , setColorOpacity] = useState(0);
  const [backgroundOpacity , setBackgroundOpacity] = useState(100);
  const [width , setWidth] = useState(500);
  const [height , setHeight] = useState(150);
  const componentRef = useRef();

  return (
    <div className='App'>
      <Navigation 
        setBackgroundUrl={setBackgroundUrl} 
        backgroundUrl={backgroundUrl}
        setColorOpacity={setColorOpacity} 
        colorOpacity={colorOpacity} 
        backgroundOpacity={backgroundOpacity} 
        setBackgroundOpacity={setBackgroundOpacity} 
        width={width}
        height={height}
        setHeight={setHeight}
        setWidth={setWidth}
      />
      <TextEditor 
        content={content} 
        setContent={setContent} 
      />
      <Result 
        ref={componentRef} 
        content={content} 
        backgroundUrl={backgroundUrl} 
        colorOpacity={colorOpacity} 
        backgroundOpacity={backgroundOpacity} 
        width={width}
        height={height}
      />
      <button className='export-image' onClick={() => exportComponentAsPNG(componentRef)}>
        Export As Image
      </button>
    </div>
  );
};

export default App;