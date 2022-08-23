
import { useState } from 'react';
import { connect } from 'react-redux';
import Wrap from '../../../common/components/layout/Wrap';
import ColorModifier from "./ColorModifier";

const CreateZone = ({

}) => {
    
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


  return (
    <Wrap>
      <ColorModifier paletteName={"Primary"} setColors={setPrimaryColors} />
      <ColorModifier paletteName={"Secondary"} setColors={setSecondaryColors} />
      <ColorModifier paletteName={"Accent"} setColors={setAccentColors} />
    </Wrap>
  );
}

const mapStateToProps = ({}) => {
  return {

  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateZone);