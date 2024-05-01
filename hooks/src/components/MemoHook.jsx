import { useMemo, useState } from "react";

const MemoHook = () => {
  const [text, setText] = useState("");
  const [person, setPerson] = useState("");

  const isPerconCoolFunc = () => {
    for (let i = 0; i < 1000000000; i++) {}
    if (person === "Laith") return "not cool";
    else if (person === "Shelby") return "very cool";
    else if (person === "Sam") return "moderately cool";
    else return "";
  };

  const isPersonCool = useMemo(isPerconCoolFunc, [person]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <button onClick={() => setPerson("Laith")}>Laith</button>
        <button onClick={() => setPerson("Shelby")}>Laith</button>
        <button onClick={() => setPerson("Sam")}>Laith</button>
      </div>
      <p>{isPersonCool}</p>
    </div>
  );
};

export default MemoHook;
