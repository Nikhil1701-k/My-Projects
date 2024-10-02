import React,{useState} from'react'
import Products from './Products'
const App = () => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState([])
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?&q=${search}&app_id=199280a0&app_key=64b83db5c9e4f080806670d426d47ef8&from=0&to=19`).then(
      Response=>Response.json()
    ).then(
      data=>setData(data.hits)
    )
  }
  return (
    <div>
      <center>
      <h2>Food Recipe</h2>
      <form onSubmit={submitHandler}>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/> <br />
      <input type="submit" className="btn btn-primary" value="Search"/>
      </form>
      {data.length>=1?<Products data={data}/>:null}
      </center>
    </div>
  );
}

export default App;
