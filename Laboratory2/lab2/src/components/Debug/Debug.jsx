import { useContext } from "react";
import { HistoryContext } from "../NavigationHistory/NavigationHistory";

export default function Debug() {
  const { history } = useContext(HistoryContext);

  return (
    <div>
      <h2>Історія перебування користувача</h2>
      <ol>
        {history.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ol>
    </div>
  );
}
