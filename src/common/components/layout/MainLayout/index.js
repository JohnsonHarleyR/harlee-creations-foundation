import '../../../styles/css/layout-main.css';
import { connect } from 'react-redux';

const MainLayout = ({
  children,
}) => {

  return (
    <div id="mainLayout">
      <header>test</header>
      <main>
        {children}
      </main>
      <footer></footer>
    </div>
  );
}

const mapStateToProps = ({}) => {
  return {

  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);