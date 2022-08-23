import { useEffect, useRef, useState } from "react";
import '../style.css';
import {HslChange} from "../constants.js";

const ColorChoice = ({
    startingHue,
    labelText,
    hslChange,
    setColor,
    isBlackOrWhite,
}) => {
    
    
    const sliderRef = useRef();
    const [value, setValue] = useState();
    const [valueChangeDisplay, setValueChangeDisplay] = useState(<></>);
    
    const [hue, setHue] = useState(startingHue);
    const [saturation, setSaturation] = useState(100);
    const [lightness, setLightness] = useState(50);
    const [hslValue, setHslValue] = useState('');
    
    useEffect(() => {
        let newValue = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        //console.log('setting hsl value');
        setHslValue(newValue);
    }, [hue, saturation, lightness]);
    
    useEffect(() => {
        setBlackOrWhiteValues();
    }, [isBlackOrWhite]);
    
    useEffect(() => {
        if (hue !== startingHue) {
            //console.log('changing hue');
            setHue(startingHue);
        }
    }, [startingHue]);
    
    useEffect(() => {
                    console.log(`hsl value? `, hslValue);
        if (hslValue) {
            console.log(hslValue);
            if (hslChange === HslChange.HUE) {
                setColor(hue);
            } else {
                setColor(hslValue);
            }
        }
    }, [hslValue]);
    
    useEffect(() => {
        switch(hslChange) {
            default:
            case HslChange.HUE:
                setValue(startingHue);
                setHue(startingHue);
                //setSaturation(100);
                setLightness(50);
                setValueChangeDisplay(
                    <input 
                        type="range"
                        min="0"
                        max="360"
                        className="slider"
                        ref={sliderRef}
                        onChange={changeValue}/>
                );
                break;
            case HslChange.SATURATION:
                setValue(50);
                setHue(startingHue);
                //setSaturation(50);
                setLightness(50);
                setValueChangeDisplay(
                    <input
                        type="range"
                        min="0"
                        max="100"
                        className="slider"
                        ref={sliderRef}
                        onChange={changeValue}/>
                );
                break;
            case HslChange.LIGHTNESS_LIGHT:
                setValue(75);
                setHue(startingHue);
                //setSaturation(100);
                setLightness(75);
                setValueChangeDisplay(
                    <input
                        type="range"
                        min="51"
                        max="100"
                        className="slider"
                        ref={sliderRef}
                        onChange={changeValue}/>
                );
                break; 
            case HslChange.LIGHTNESS_DARK:
                setValue(25);
                setHue(startingHue);
                //setSaturation(100);
                setLightness(25);
                setValueChangeDisplay(
                    <input
                        type="range"
                        min="0"
                        max="49"
                        className="slider"
                        ref={sliderRef}
                        onChange={changeValue}/>
                );
                break; 
        }
    }, []);
    
    useEffect(() => {
        if (value && valueChangeDisplay) {
                    sliderRef.current.value = value;
                    //console.log(value);
        }
    }, [value]);
    
    const changeValue = () => {
        setValue(sliderRef.current.value);
        switch (hslChange) {
            default:
            case HslChange.HUE:
                setHue(sliderRef.current.value);
                break;
            case HslChange.SATURATION:
                setSaturation(sliderRef.current.value);
                break;
            case HslChange.LIGHTNESS_LIGHT:
            case HslChange.LIGHTNESS_DARK:
                setLightness(sliderRef.current.value);
                break;
        }
    }
    
    const setBlackOrWhiteValues = () => {
        console.log(`is black or white? `, isBlackOrWhite);
        if (isBlackOrWhite && hslChange !== HslChange.SATURATION) {
            setSaturation(0);
        } else if (hslChange !== HslChange.SATURATION) {
            setSaturation(100);
        }
    }
    
    
    return (
        <div className="color-choice">
            <div
                className="color-box"
                style={{backgroundColor: hslValue}}
            ></div>
            <span className="label">{labelText}</span>
            <div className="slider-div">
                <span>{value}</span>
                {valueChangeDisplay}
            </div>
            <span className="hsl">{hslValue}</span>
            
        </div>
    );
}

export default ColorChoice;