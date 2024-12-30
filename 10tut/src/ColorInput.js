import colorNames from 'colornames'

const ColorInput = ({ 
    input, setInput, setHexValue, isDarkText, setIsDarkText
}) => {
    return (
        <form className='colorInput' onSubmit={(e) => e.preventDefault()}>
        <input 
                autoFocus
                id='color'
                type='text'
                placeholder="Add color name"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
         />
         <button
            type="button"
            onClick={() => setIsDarkText(!isDarkText)}
         >
            Toggle Text Color
         </button>
      </form>
    )
}

export default ColorInput