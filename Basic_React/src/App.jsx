// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'


// let x = [{ a: "red", b: "rounded" },{a:"pink",b:""},{a:"green",b:"rounded"}]

function App() {
    let x = [
        {id:1,a: "red", b: "rounded" },
        {id:2,a:"pink",b:""},
        {id:3,a:"green",b:"rounded"}
        ]
 return <>
   <h1>Hello Brother</h1>
   {
    x.map((e) =>{
        console.log(e);
        return <Button key={e.id} element={e} />
    })
   }
 </>


}


export default App
