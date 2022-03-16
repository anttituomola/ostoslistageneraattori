import './App.css';
import { Calendar } from "./components/Calendar"
import { RecipeHolder } from "./components/RecipeHolder"

export default function App() {
  return (
    <div className="App">
      <Calendar />
      <RecipeHolder />
    </div>
  )
}
