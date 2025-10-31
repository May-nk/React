 import React from 'react'
 import Card from './components/Card.jsx'
 
 const App = () => {
   return (
     <div className='parent'> 
      <Card user = 'Mayank raj' img = "https://images.unsplash.com/photo-1761872795095-a2d2a05811a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736" about = "main uska sabse pura dost " />
      <Card user = 'Ayush Singh' img =  "https://images.unsplash.com/photo-1761873177929-74cbff7e5769?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" about = "mera sabse pura dost " />
     </div>
   )
 }
 
 export default App