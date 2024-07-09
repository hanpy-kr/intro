const ErrorAlert = (props: any) => {
  return (
    <>
      <h3>잠시 후 다시 시도해주세요</h3>
      <button onClick={props.resetErrorBoundary}>다시 시도</button>
    </>
  );
};

export default ErrorAlert;
