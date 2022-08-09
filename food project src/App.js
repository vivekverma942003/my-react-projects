// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Axios from 'axios';
import RecipieTile from './RecepieTile';

function App() {
  const[query,setQuery]=useState("");
  const[recipes,setRecipes]=useState([]);
  const[health,setHealth]=useState("vegan");
const YOUR_APP_ID ="187f6f35";
const YOUR_APP_KEY = "fb964bf8356c3b13f5c76ba73a7b3026";
var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${health}`;

async function getRecipes(){
  var result = await Axios.get(url);
  setRecipes(result.data.hits)
  console.log(result.data);

}
// this function is used for preventing refreshing the page 
const onSubmit = (e)=>{
  e.preventDefault();
  getRecipes();
};




  return (
    <div className="App">
      
<h1 onClick={getRecipes}>Food Recepie Plaza 🍔</h1>
<form className="search" onSubmit={onSubmit}>
  <input type="text" placeholder="enter the gradient" value={query} className="input"
  onChange={(e)=> setQuery(e.target.value)}/>
  <input type="submit" value="search" className='submit'/>
  <select className='app_helthlevel'>
    <option onClick={() =>setHealth("vegan")}> vegan</option>
    <option onClick={() =>setHealth("vegetarian")}> vegetarian</option>
    <option onClick={() =>setHealth("paleo")}> paleo</option>
    <option onClick={() =>setHealth("dairy-free")}> dairy-free</option>
    <option onClick={() =>setHealth("gluten-free")}> gluten-free</option>
    <option onClick={() =>setHealth("wheat-free")}> wheat-free</option>
    <option onClick={() =>setHealth("low-sugar")}> low-sugar</option>
    <option onClick={() =>setHealth("egg-free")}> egg-free</option>
  </select>

</form>
<div className='app-view'>
  {recipes.map(recipe =>{
   return <RecipieTile recipe={recipe}/> 
  })}
</div>

    </div>
  );
}

export default App;
