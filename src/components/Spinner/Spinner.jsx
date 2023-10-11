import { RingLoader } from 'react-spinners';
import { Backdrop } from './Spinner.styled';

const Spinner = () => {
  return (
    <Backdrop>
      <RingLoader color="#36d7b7" size={100} />
    </Backdrop>
  );
};

export default Spinner;
