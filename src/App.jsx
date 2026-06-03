import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import { Card } from './components/card'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [inputPage, setInputPage] = useState("")


  useEffect(() => {
   const carrega = async () => {
    try{
      const response = await api.get(`/characters?page=${page}`)
      console.log(response.data.items)
      setData(response.data.items)
      
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
           <Card unico={items.id} imagem={items.image} nome={items.name} ki={items.ki} race={items.race} gender={items.gender}/>
          )
        })}

      </main>
    </>
  )
}

export default App
