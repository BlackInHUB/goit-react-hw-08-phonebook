import { ProgressBar } from 'react-loader-spinner';

export const ProgressBarLoader = () => {
  return (
    <ProgressBar
      height="20"
      width="20"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};
