import { useEffect } from 'react';
import '../../../styles/css/layout-main.css';
import { connect } from 'react-redux';
import { implementTheme } from '../theme/helpers/theme-helper';
import { setThemeProperties } from './redux/thunks';
import Header from '../Header';
import CornerLogo from '../logo/CornerLogo';

const MainLayout = ({
  children,
  theme,
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
      <Header>test</Header>
      <main>
        {children}
      </main>
      <footer>
    
      </footer>
    </div>
  );
}

const mapStateToProps = ({layout}) => {
  return {
    theme: layout.theme,
    themeName: layout.themeName,
    className: layout.layoutClass,
  };
}

const mapDispatchToProps = {
  setThemeProperties,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);