import '../../../styles/css/layout-main.css';
import { connect } from 'react-redux';

const MainLayout = ({
  children,
  className
}) => {

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
    className: layout.layoutClass,
  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);