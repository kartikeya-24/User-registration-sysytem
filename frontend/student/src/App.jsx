
import './App.css'
import Delete from './component/Delete'
import Register from './component/Register'
import Update from './component/Update'
import View from './component/View'


function App() {
  

  return (
   <div>
    <h1  style={{backgroundColor:'greenyellow' ,height:'50px',lineHeight:'50px'}}>User Registration System</h1>
    <Register/><br/>
   <Update/><br/>
   <Delete/><br/>
    <View/>
   
  

   </div>
  )
}

export default App