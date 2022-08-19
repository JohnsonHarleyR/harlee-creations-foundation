import { connect } from 'react-redux';
import Wrap from '../../layout/Wrap';

const ComingSoon = ({}) => {
  
  return (
    <Wrap>
      <h1>Coming Soon!</h1>
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