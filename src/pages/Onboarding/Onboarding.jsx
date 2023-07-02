function Onboarding() {
  const moveToLogin = () => {
    window.location.pathname = "/login";
  };
  return (
    <>
      <div>Onboarding</div>
      <button onClick={moveToLogin}>시작하기</button>
    </>
  );
}

export default Onboarding;
