import { useEffect, useState } from "react";
import "./style.css";
import ColorChoice from "./ColorChoice";
import {ColorCatDesc, HslChange} from "./constants.js";
import { ColorCategory } from "./constants.js";

const ColorModifier = ({colorCategory, setColors}) => {
    
    const [paletteName, setPaletteName] = useState();
    const [description, setDescription] = useState('test');
    
    const [hue, setHue] = useState(127);
    const [pureColor, setPureColor] = useState();
    const [tintColor, setTintColor] = useState();
    const [shadeColor, setShadeColor] = useState();
    const [toneColor, setToneColor] = useState();
    const [mixColor, setMixColor] = useState();
    
    const [isBlackOrWhite, setIsBlackOrWhite] = useState(false);
    
    useEffect(() => {
        console.log('color category: ', colorCategory);
        switch (colorCategory) {
            default:
                setPaletteName("Error");
                setDescription("What went wrong?")
                break;
            case ColorCategory.PRIMARY:
                setPaletteName("Primary");
                setDescription(ColorCatDesc.PRIMARY);
                break;
            case ColorCategory.SECONDARY:
                setPaletteName("Secondary");
                setDescription(ColorCatDesc.SECONDARY);
                break;
            case ColorCategory.ACCENT:
                setPaletteName("Accent");
                setDescription(ColorCatDesc.ACCENT);
                break;
            case ColorCategory.ERROR:
              setPaletteName("Error");
              setDescription(ColorCatDesc.ERROR);
              break;
            case ColorCategory.WARNING:
              setPaletteName("Warning");
              setDescription(ColorCatDesc.WARNING);
              break;
            case ColorCategory.INFO:
              setPaletteName("Info");
              setDescription(ColorCatDesc.INFO);
              break;
            case ColorCategory.SUCCESS:
              setPaletteName("Success");
              setDescription(ColorCatDesc.SUCCESS);
              break;
        }
    }, [colorCategory]);
    
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
            mix: mixColor,
        });
    }, [pureColor, tintColor, shadeColor, toneColor, mixColor]);
    
    const changeBW = (evt) => {
        if (evt.target.checked === true && isBlackOrWhite !== true) {
            setIsBlackOrWhite(true);
        } else if (isBlackOrWhite !== false) {
            setIsBlackOrWhite(false);
        }
    }
    
    
    return <div className="modifier-container">
        <h2>{paletteName}</h2>
        <sup className="modifier-description"><i>{description}</i></sup>
        {/* <span className="black-white-span"><input type="checkbox" onChange={changeBW} /> B or W?</span> */}
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
        <ColorChoice 
            startingHue={hue}
            labelText="Mix"
            hslChange={HslChange.MIX}
            setColor={setMixColor}
            isBlackOrWhite={isBlackOrWhite}
        />
    </div>
}

export default ColorModifier;