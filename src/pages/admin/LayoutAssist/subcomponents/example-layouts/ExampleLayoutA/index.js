import Wrap from '../../../../../../common/components/layout/Wrap';


const ExampleLayoutA = ({
  children
}) => {
  
  return (
    <div className='grid example-a'>
      <Wrap>
        {children}
      </Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
    </div>
  );
}

export default ExampleLayoutA;