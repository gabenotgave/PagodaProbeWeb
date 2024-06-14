import Loader from 'react-spinners/CircleLoader';
//https://www.davidhu.io/react-spinners/

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = () => {
  return (
    <Loader
      color='#00003b'
      loading={true}
      cssOverride={override}
      size={150}
    />
  );
};

export default Spinner;