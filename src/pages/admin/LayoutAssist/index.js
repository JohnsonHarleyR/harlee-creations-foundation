import { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeMainTheme } from '../../../common/components/layout/MainLayout/redux/thunks';
import Wrap from '../../../common/components/layout/Wrap';
import { ThemeName } from '../../../common/constants/theme';

const LayoutAssist = ({
  isAdmin,
  changeMainTheme,
}) => {

  useEffect(() => {
    if (isAdmin) {
      changeMainTheme(ThemeName.TESTER);
    }
  }, []);

  return (
    <Wrap>
      Layout Assist
    </Wrap>
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