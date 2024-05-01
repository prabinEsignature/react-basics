import { useEffect, useRef, useState } from "react";

const SignUpToNewsLetter = () => {
  const [email, setEmail] = useState("");
  const inputElement = useRef(null);

  const handleClick = () => {
    if (!email) {
      inputElement.current.style.border = "5px solid red";
      inputElement.current.focus();
    }
  };

  console.log(email);

  useEffect(() => {
    if (email) {
      inputElement.current.style.border = "none";
    }
  }, [email]);

  return (
    <div>
      <input
        ref={inputElement}
        type="email"
        placeholder="Email ..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleClick}>Sign up to news letter</button>
    </div>
  );
};

export default SignUpToNewsLetter;
