import React, {useState } from "react";
import './App.css';
import Navigation from "./components/navigation/navigation.component";
import Result from "./components/result/result.component";
import TextEditor from "./components/text-editor/text-editor.component";


function App() {
  const [content, setContent] = useState('')
  const [backgroundUrl , setBackgroundUrl] = useState('');
  const [colorOpacity , setColorOpacity] = useState(0);
  const [backgroundOpacity , setBackgroundOpacity] = useState(100);
  return (
    <div className='App'>
      <Navigation 
        setBackgroundUrl={setBackgroundUrl} 
        backgroundUrl={backgroundUrl}
        setColorOpacity={setColorOpacity} 
        colorOpacity={colorOpacity} 
        backgroundOpacity={backgroundOpacity} 
        setBackgroundOpacity={setBackgroundOpacity} 
      />
      <TextEditor 
        content={content} 
        setContent={setContent} 
      />
      <Result 
        content={content} 
        backgroundUrl={backgroundUrl} 
        colorOpacity={colorOpacity} 
        backgroundOpacity={backgroundOpacity} 
      />
    </div>
  );
}

export default App;
