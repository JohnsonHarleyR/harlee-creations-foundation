import { useEffect } from 'react';
import { connect } from 'react-redux';

const Admin = ({
  children,
  navigateToHome,
  isAdmin,
}) => {

  console.log(`in admin`);

  useEffect(() => {
    if (isAdmin !== undefined && !isAdmin) {
      navigateToHome();
    }
  }, [isAdmin]);

  return (
    <>
      {children}
    </>
  );
}

const mapStateToProps = ({user}) => {
  return {
    isAdmin: user.isAdmin,
  };
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);