
import { useState } from 'react';
import { connect } from 'react-redux';
import Wrap from '../../../common/components/layout/Wrap';
import ColorModifier from "./ColorModifier";

const CreateZone = ({

}) => {
    
    const [colors, setColors] = useState({
        pure: null,
        tint: null,
        shade: null,
        tone: null,
    });


  return (
    <Wrap>
      <ColorModifier paletteName={"Primary"} setColors={setColors} />
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