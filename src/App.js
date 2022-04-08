import './App.css';
import { Calendar } from "./components/Calendar"
import Title from './components/Title'
import Metadata from './components/Metadata'
import ShoppingList from './components/ShoppingList'
import Submit from './components/Submit'

export default function App() {
  return (
    <div className="App">
      <Title />
      <Metadata />
      <Calendar />
      <ShoppingList />
      <Submit />
    </div>
  )
}
