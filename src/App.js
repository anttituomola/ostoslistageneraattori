import './App.css';
import { Calendar } from "./components/Calendar"
import Title from './components/Title'
import Metadata from './components/Metadata'
import ShoppingList from './components/ShoppingList'
import Submit from './components/Submit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recipeData } from './reducers/recipeReducer';

export default function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.recipes.recipes)

  // Load recipes from API
  useEffect(() => {
    const fetchData = async () => {
      if (state.length === 0) { // See if there is initial data
        try {
          const response = await fetch('https://api.airtable.com/v0/appaCGplNqY1evEUb/Recipes?api_key=keyMx6L7Z9LjE5XF8')
          const data = await response.json()
          console.log(data.records)
          dispatch(recipeData(data.records))
        }
        catch (error) {
          console.log(error)
        }
      }
    }
      fetchData()
    }, [dispatch, state])


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
