import { useEffect } from 'react';
import '../../../styles/css/layout-main.css';
import { connect } from 'react-redux';
import { implementTheme } from '../theme/helpers/theme-helper';
import { setThemeProperties } from './redux/thunks';
import CornerLogo from '../logo/CornerLogo';

const MainLayout = ({
  children,
  themeName,
  className,
  setThemeProperties,
}) => {

  useEffect(() => {
    if (themeName) {
      implementTheme(themeName, setThemeProperties);
    }
  }, [themeName]);

  return (
    <div className={className}>
      <header>test</header>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

const mapStateToProps = ({layout}) => {
  return {
    themeName: layout.themeName,
    className: layout.layoutClass,
  };
}

const mapDispatchToProps = {
  setThemeProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);