import ColorBox from './ColorBox';
import ColorInput from './ColorInput';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <ColorBox 
        color={input}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput 
        input={input}
        setInput={setInput}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
