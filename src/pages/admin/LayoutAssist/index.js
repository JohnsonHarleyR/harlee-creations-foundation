import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeMainTheme } from '../../../common/components/layout/MainLayout/redux/thunks';
import Wrap from '../../../common/components/layout/Wrap';
import { ThemeName } from '../../../common/constants/theme';
import ExampleLayoutA from './subcomponents/example-layouts/ExampleLayoutA';
import ColorModifier from './subcomponents/ColorModifier';
import { ColorCategory } from './subcomponents/ColorModifier/constants';
import ColorsDisplay from './subcomponents/ColorsDisplay';

const LayoutAssist = ({
  isAdmin,
  changeMainTheme,
}) => {

  const [primaryColors, setPrimaryColors] = useState([]);
  const [secondaryColors, setSecondaryColors] = useState([]);
  const [accentColors, setAccentColors] = useState([]);
  const [errorColors, setErrorColors] = useState([]);
  const [warningColors, setWarningColors] = useState([]);
  const [infoColors, setInfoColors] = useState([]);
  const [successColors, setSuccessColors] = useState([]);

  //const [colorsDisplay, setColorsDisplay] = useState();


  let increment = 50;

  useEffect(() => {
    if (isAdmin) {
      changeMainTheme(ThemeName.TESTER);
      // setColorsDisplay(createColorsDisplay());
    }
  }, []);

  const createColorsDisplay = () => {
    let colors = [
      primaryColors,
      secondaryColors,
      accentColors,
      errorColors,
      warningColors,
      infoColors,
      successColors,
    ];
    let display = <ColorsDisplay colors={colors} />
    return display;
  }

  return (
    <ExampleLayoutA content3={createColorsDisplay()}>
      <ColorModifier colorCategory={ColorCategory.PRIMARY} startingHue={(0 * increment)} setColors={setPrimaryColors} />
      <ColorModifier colorCategory={ColorCategory.SECONDARY} setColors={setSecondaryColors} />
      <ColorModifier colorCategory={ColorCategory.ACCENT} setColors={setAccentColors} />
      <ColorModifier colorCategory={ColorCategory.ERROR} setColors={setErrorColors} />
      <ColorModifier colorCategory={ColorCategory.WARNING} setColors={setWarningColors} />
      <ColorModifier colorCategory={ColorCategory.INFO} setColors={setInfoColors} />
      <ColorModifier colorCategory={ColorCategory.SUCCESS} setColors={setSuccessColors} />
    </ExampleLayoutA>
  );
}

const mapStateToProps = ({user}) => {
  return {
    isAdmin: user.isAdmin,
  };
}

const mapDispatchToProps = {
  changeMainTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(LayoutAssist);