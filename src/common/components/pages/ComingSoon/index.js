import { connect } from 'react-redux';
import Wrap from '../../layout/Wrap';

const ComingSoon = ({pageName}) => {
  
  return (
    <Wrap>
      <h1>Coming Soon!</h1>
      <i>{pageName}</i>
    </Wrap>
  );
}

const mapStateToProps = ({}) => {
  return {

  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon);