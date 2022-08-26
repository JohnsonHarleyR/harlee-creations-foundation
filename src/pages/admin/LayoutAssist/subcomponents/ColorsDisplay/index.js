import { useState, useRef, useEffect } from "react"
import DisplayCol from "./DisplayCol";


const ColorsDisplay = ({colors}) => {

  const displayRef = useRef();

  const [display, setDisplay] = useState();

  useEffect(() => {
    if (colors && colors.length > 0) {

      let newDisplay = [];
      colors.forEach((c, i) => {
        newDisplay.push(<DisplayCol 
        key={`color-col-${i + 1}`}
        id={`color-col-${i + 1}`}
        colors={c} />);
      })

      setDisplay(newDisplay);
    }
  }, [colors]);

  return (
    <div className="colors-display-wrap">
      <div className="above-grid">
        <div>Pure</div>
        <div>Tint</div>
        <div>Shade</div>
        <div>Tone</div>
        <div>Mix</div>
      </div>
      <div className="aside-grid">
        <div><span>Primary</span></div>
        <div><span>Secondary</span></div>
        <div><span>Accent</span></div>
        <div><span>Error</span></div>
        <div><span>Warning</span></div>
        <div><span>Info</span></div>
        <div><span>Success</span></div>
      </div>
      <div ref={displayRef} className="colors-display">
        {display}
      </div>
    </div>

  )

}

export default ColorsDisplay;