const { RingLoader } = require('react-spinners');
const { Backdrop } = require('./Spinner.styled');

const Spinner = () => {
  return (
    <Backdrop>
      <RingLoader color="#36d7b7" size={100} />
    </Backdrop>
  );
};

export default Spinner;