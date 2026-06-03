import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.png'
import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState()
  const [inputPage, setInputPage] = useState("")


  useEffect(() => {
   const carrega = async () => {
    try{
      const item = await api.get(`/characters`)
      console.log(Response.data.items)
      setData(item.data.results)
      
    }catch{
      console.error("Deu ruim!!!")
    }
   }
   carrega()
  }, [page])
  
  return (
    <>
    <div>
      <label>Digite uma página</label>
      <input type="number" value={inputPage} onChange={(e) => setInputPage(e.target.value)}/>
      <button onClick={() => setPage(Number(inputPage))}>BUSCAR</button>
    </div>
      <main>
        {data.map(items => {
          return(
           <Card unico={items.id} imagem={items.image} nome={items.name} especie={items.ki} origem={items.race}/>
          )
        })}

      </main>
    </>
  )
}

export default App
