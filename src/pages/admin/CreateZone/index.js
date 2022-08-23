
import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Wrap from '../../../common/components/layout/Wrap';
import ColorModifier from "./ColorModifier";
import {ColorCategory} from "../../../common/constants/theme.js";
import { modifyThemeColors } from "../../../common/components/layout/MainLayout/redux/thunks.js";

const CreateZone = ({
    modifyThemeColors,
}) => {
    
    const resultTextRef = useRef();
    
    const [primaryColors, setPrimaryColors] = useState({
        pure: null,
        tint: null,
        shade: null,
        tone: null,
    });
    const [secondaryColors, setSecondaryColors] = useState({
        pure: null,
        tint: null,
        shade: null,
        tone: null,
    });
    const [accentColors, setAccentColors] = useState({
        pure: null,
        tint: null,
        shade: null,
        tone: null,
    });
    
    const getColorCodesForTheme = () => {
        let all = [
            {
                category: ColorCategory.PRIMARY,
                colors: primaryColors,
            },
                        {
                category: ColorCategory.SECONDARY,
                colors: secondaryColors,
            },
                        {
                category: ColorCategory.ACCENT,
                colors: accentColors,
            },
        ];
        
        let result = [];
        all.forEach(c => {
            for (var prop in c.colors) {
                let line = `'--${c.category}-${prop}': '${c.colors[prop]}',\n`;
                result.push(line);
            }
            result.push('\n');
        });
        
        let together = '';
        result.forEach(r => {
            together += r;
        });
        
        resultTextRef.current.value = together;
    }
    
    
    const modifyThemeForColors = (colorCategory) => {
        switch(colorCategory) {
            default:
            case ColorCategory.PRIMARY:
                modifyThemeColors(colorCategory, primaryColors);
                break;
            case ColorCategory.SECONDARY:
                modifyThemeColors(colorCategory, secondaryColors);
                break;
            case ColorCategory.ACCENT:
                modifyThemeColors(colorCategory, accentColors);
                break;
        }
    }


  return (
    <Wrap>
      <ColorModifier colorCategory={ColorCategory.PRIMARY} modifyColors={modifyThemeForColors} setColors={setPrimaryColors} />
      <ColorModifier colorCategory={ColorCategory.SECONDARY} modifyColors={modifyThemeForColors} setColors={setSecondaryColors} />
      <ColorModifier colorCategory={ColorCategory.ACCENT} modifyColors={modifyThemeForColors} setColors={setAccentColors} />
        <button onClick={getColorCodesForTheme}>Get Code</button>
        <textarea ref={resultTextRef} />
    </Wrap>
  );
}

const mapStateToProps = ({
}) => {
  return {
      
  };
}

const mapDispatchToProps = {
    modifyThemeColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateZone);