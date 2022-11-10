import { ThreeCircles } from 'react-loader-spinner';

export const ThreeCirclesLoader = () => {
  return (
    <ThreeCircles
      height="100"
      width="100"
      color="teal"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
