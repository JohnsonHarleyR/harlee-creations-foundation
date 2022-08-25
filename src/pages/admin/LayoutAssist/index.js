import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { changeMainTheme } from '../../../common/components/layout/MainLayout/redux/thunks';
import Wrap from '../../../common/components/layout/Wrap';
import { ThemeName } from '../../../common/constants/theme';
import ExampleLayoutA from './subcomponents/example-layouts/ExampleLayoutA';
import ColorModifier from './subcomponents/ColorModifier';
import { ColorCategory } from './subcomponents/ColorModifier/constants';

const LayoutAssist = ({
  isAdmin,
  changeMainTheme,
}) => {

  const [primaryColors, setPrimaryColors] = useState({
    pure: null,
    tint: null,
    shade: null,
    tone: null,
    mix: null,
});

  useEffect(() => {
    if (isAdmin) {
      changeMainTheme(ThemeName.TESTER);
    }
  }, []);

  return (
    <ExampleLayoutA>
      <ColorModifier colorCategory={ColorCategory.PRIMARY} setColors={setPrimaryColors} />
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