import { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [statements, setStatements] = useState([]);
  const [statementTotal, setStatementTotal] = useState(0);
  const [statementInputs, setStatementInputs] = useState({
    title: "",
    statementType: "income",
    amount: "",
  });

  const [errors, setErrors] = useState({
    titleError: "",
    amountError: "",
  });

  const handleTitleError = (title) =>
    title.trim() === "" ? "Please enter title ..." : "";

  const handleAmountError = (amount) =>
    isNaN(parseInt(amount)) ? "Please enter valid amount" : "";

  const handleStatementInputs = (event) => {
    const { name, value } = event.target;
    let titleError = errors.titleError;
    let amountError = errors.amountError;

    if (name === "title") {
      titleError = handleTitleError(value);
    } else if (name === "amount") {
      amountError = handleAmountError(value);
    }

    setErrors({ titleError, amountError });
    setStatementInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddStatement = (statement) => {
    setStatements([...statements, statement]);
    setStatementInputs({ title: "", statementType: "income", amount: "" });
  };

  const handleStatementSubmit = (event) => {
    event.preventDefault();

    const { title, amount } = statementInputs;
    const titleError = handleTitleError(title);
    const amountError = handleAmountError(amount);

    if (titleError === "" && amountError === "") {
      const newStatement = {
        id: uuidv4(),
        title,
        statementType: statementInputs.statementType,
        amount,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString(),
      };

      handleAddStatement(newStatement);
    } else {
      setErrors({ titleError, amountError });
    }
  };

  useEffect(() => {
    if (statements.length) {
      let totalAmount = 0;
      statements.forEach((statement) => {
        totalAmount +=
          statement.statementType === "income"
            ? parseInt(statement.amount)
            : -parseInt(statement.amount);
      });
      setStatementTotal(totalAmount);
    }
  }, [statements]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors({ titleError: "", amountError: "" });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [errors]);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const renderStatements = () => {
    return statements?.map((statement) => (
      <div className="card" key={statement.id}>
        <div className="card-info">
          <h4>{statement.title}</h4>
          <p>{statement.createdAt}</p>
        </div>
        <div
          className={`amount-text ${
            statement.statementType === "income" ? "success" : "danger"
          }`}
        >
          {statement.statementType === "income" ? "+" : "-"}
          {formatter.format(statement.amount)}
        </div>
      </div>
    ));
  };

  const renderTotal = () => (
    <h1
      className={`total-text ${
        statementTotal > 0 ? "success" : statementTotal < 0 ? "danger" : ""
      }`}
    >
      {statementTotal > 0
        ? `+${Math.abs(statementTotal)}`
        : statementTotal < 0
        ? `-${Math.abs(statementTotal)}`
        : Math.abs(statementTotal)}
    </h1>
  );

  return (
    <>
      <main>
        {renderTotal()}
        <form className="expense-form" onSubmit={handleStatementSubmit}>
          <div className="input-container">
            <div className="input-element">
              <input
                name="title"
                type="text"
                placeholder="Income or expense ..."
                value={statementInputs.title}
                onChange={handleStatementInputs}
              />
              {errors.titleError && (
                <span className="input-error">{errors.titleError}</span>
              )}
            </div>
            <div className="input-element">
              <input
                name="amount"
                type="number"
                placeholder="Amount ..."
                value={statementInputs.amount}
                onChange={handleStatementInputs}
              />
              {errors.amountError && (
                <span className="input-error">{errors.amountError}</span>
              )}
            </div>
          </div>
          <select
            name="statementType"
            value={statementInputs.statementType}
            onChange={handleStatementInputs}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button type="submit">+</button>
        </form>

        <div className="expense-list">{renderStatements()}</div>
      </main>
    </>
  );
}

export default App;
