import { Circles } from 'react-loader-spinner';

const ButtonLoadingSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
      }}
    >
      <Circles
        height="30"
        width="30"
        color="#7440ec"
        ariaLabel="circles-loading"
        wrapperStyle={{
          position: 'absolute',
          left: -40,
        }}
        visible={true}
      />
    </div>
  );
};

export default ButtonLoadingSpinner;
