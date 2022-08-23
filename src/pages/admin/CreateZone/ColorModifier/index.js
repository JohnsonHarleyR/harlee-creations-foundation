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
    
    const [isBlackOrWhite, setIsBlackOrWhite] = useState(false);
    
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
    
    const changeBW = (evt) => {
        if (evt.target.checked === true && isBlackOrWhite !== true) {
            setIsBlackOrWhite(true);
        } else if (isBlackOrWhite !== false) {
            setIsBlackOrWhite(false);
        }
    }
    
    return <div className="modifier-container">
        <h2>{paletteName}</h2>
        <span className="black-white-span"><input type="checkbox" onChange={changeBW} /> B or W?</span>
        <ColorChoice 
            startingHue={hue}
            labelText="Pure"
            hslChange={HslChange.HUE}
            setColor={setHue}
            isBlackOrWhite={isBlackOrWhite}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Tint"
            hslChange={HslChange.LIGHTNESS_LIGHT}
            setColor={setTintColor}
            isBlackOrWhite={isBlackOrWhite}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Shade"
            hslChange={HslChange.LIGHTNESS_DARK}
            setColor={setShadeColor}
            isBlackOrWhite={isBlackOrWhite}
        />
        <ColorChoice 
            startingHue={hue}
            labelText="Tone"
            hslChange={HslChange.SATURATION}
            setColor={setToneColor}
            isBlackOrWhite={isBlackOrWhite}
        />
    </div>
}

export default ColorModifier;