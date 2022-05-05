import "./Main.css"
import Column from "../Column/Column"



const Main = () => {
return (
<main className= "main">
 
 <h1 className="main-title">Kanban</h1>

 <div className="main-container">

    <Column/>
{/* 
   <Column title="To do"/>

   <Column title="In Progress"/>

   <Column title="Review"/>

   <Column title="Done"/> */}

 {/* < Column variant="todo" title ="To Do"/> */}
  
{/*
<Card image = "male"  subtitle="laranja" label="todo" description="Label" /> */}
   

 {/* < Column variant="inprogress" title ="In Progress"/>
 

 < Column variant="review" title ="Review" />
  
 

 < Column variant="done" title ="Done"/> */}

 
 </div>

 </main>) }
    
 export default Main
