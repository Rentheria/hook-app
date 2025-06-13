import './LoadingMessage.css';

export const LoadingMessage = () => {
  return (
    <div className="pokeball-container w-full h-full flex flex-col items-center justify-center">
      <div className="pokeball">
        <div className="pokeball-top"></div>
        <div className="pokeball-middle">
          <div className="pokeball-button"></div>
        </div>
        <div className="pokeball-bottom"></div>
      </div>
      <div className="loading-text mt-4 text-xl font-semibold">Loading...</div>
    </div>
  );
};
