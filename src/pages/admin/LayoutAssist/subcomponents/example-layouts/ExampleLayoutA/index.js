import Wrap from '../../../../../../common/components/layout/Wrap';


const ExampleLayoutA = ({
  children,
  content3,
}) => {
  
  return (
    <div className='grid example-a'>
      <Wrap>
        {children}
      </Wrap>
      <Wrap></Wrap>
      <Wrap>{content3}</Wrap>
      <Wrap></Wrap>
      <Wrap></Wrap>
    </div>
  );
}

export default ExampleLayoutA;