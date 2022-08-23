import { useEffect, useState } from "react";
import "./style.css";
import ColorChoice from "./ColorChoice";
import {HslChange} from "./constants.js";

const ColorModifier = ({paletteName, setColors}) => {
    
    const [hue, setHue] = useState(127);
    const [pureColor, setPureColor] = useState();
    const [tintColor, setTintColor] = useState();
    const [shadeColor, setShadeColor] = useState();
    const [toneColor, setToneColor] = useState();
    
    const [isFreeMode, setIsFreeMode] = useState(false);
    const [freeModeValues, setFreeModeValues] = useState({h: hue, s: 100, l: 50});
    
    useEffect(() => {
        if (hue) {
            setPureColor(`hsl(${hue}, 100%, 50%)`);
        }
    }, [hue]);
    
    useEffect(() => {
        setColors({
            pure: pureColor,
            tint: tintColor,
            shade: shadeColor,
            tone: toneColor,
        });
    }, [pureColor, tintColor, shadeColor, toneColor]);
    
    return <div className="modifier-container">
        <h2>{paletteName}</h2>
        <ColorChoice 
            startingHue={hue}
            labelText="Pure"
            hslChange={HslChange.HUE}
            setColor={setHue}
            isFreeMode={isFreeMode}
            freeModeValues={freeModeValues}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Tint"
            hslChange={HslChange.LIGHTNESS_LIGHT}
            setColor={setTintColor}
            isFreeMode={isFreeMode}
            freeModeValues={freeModeValues}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Shade"
            hslChange={HslChange.LIGHTNESS_DARK}
            setColor={setShadeColor}
            isFreeMode={isFreeMode}
            freeModeValues={freeModeValues}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Tone"
            hslChange={HslChange.SATURATION}
            setColor={setToneColor}
            isFreeMode={isFreeMode}
            freeModeValues={freeModeValues}
        />
    </div>
}

export default ColorModifier;