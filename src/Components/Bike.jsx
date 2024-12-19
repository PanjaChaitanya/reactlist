import React, { useState } from 'react'
import '../css/bike.css'
function Bike() {
    const [bike,setBike] = useState(["KARIZMA","APACHE","HERO SPLENDER"])
    const [rbikes,setrbikes] = useState([])
    let addBike = () => {
        let bikeVal = document.getElementById('inputbike').value
        bikeVal = bikeVal.toUpperCase()
        if(bikeVal!==''){
            if(bike.includes(bikeVal)){
                alert("Bike already exists")
            }
            else{
                if(bike.length < 5){
                    setBike([...bike,bikeVal])
                    document.getElementById('inputbike').value=''
                }else{
                    alert("You can add only 5 bikes")
                }
            }
        }else{
            alert("Enter a Bike Name")
        }
    }
    let removeBike = () => {
       if(bike.length>0){
            setBike(bike.slice(0,-1))
            let rbike= document.getElementById('deletedBike').innerText
            rbike = bike.slice(-1)
            setrbikes([...rbikes,rbike])
       }else{
        alert("No bikes Left to delete")
       }
    }
    let removeABike = () =>{
        let bikeDelVal = document.getElementById('bikeRemoveInput').value
        bikeDelVal = bikeDelVal.toUpperCase()
        if(bikeDelVal!==''){
            if(bike.includes(bikeDelVal)){
                setBike(bike.filter(x=>x!==bikeDelVal))
                setrbikes([...rbikes,bikeDelVal])
                document.getElementById('bikeRemoveInput').value=''
            }else{
                alert("Bike not found")
            }
        }else{
            alert('Enter Bike name to delete')
        }
    }
    let resetBin = () => {
        if(rbikes.length>0){
            setrbikes([])
        }else{
            alert("Bin is Empty")
        }
    }
  return (
    <>
    <div className='bikeMainContainer' id='bikes'>
    <h2 id='bikehead'>BIKE LIST</h2>
        <div className="bikeContainer">
            <div className="addListContainer">
                <div className='bikeListContainer'>
                    <input type="text" id="inputbike" placeholder="Enter bike name"/>
                    {bike.map((x, index) =><li key={index}>🏍️ {x}</li>)} 
                </div>
                <div className="buttonContainer">
                    <button id="bikeSetBtn" onClick={addBike}>Set 🏍️</button>
                    <button id="bikeDelBtn" onClick={removeBike} title='Remove Last'><img src="./images/removeBike.png" width="35px" alt="" /></button>
                </div>
            </div>
            <div className="bikeRemovedListContainer">
                <input type="text" id='bikeRemoveInput' placeholder='Enter Bike Name you want to delete'/>
                <button id="bikeRemoveBtn" onClick={removeABike}><img src="./images/removeBike.png" width="35px" alt="" /></button>
                <div className='bikeRemovedItems'>
                    <h3>Removed Items</h3>
                    <ul id="removedItemsList">
                    <p id='deletedBike'>
                    {rbikes.map((x, index) =><li key={index}>🗑️ {x}</li>)}
                    <li><img src="./images/reset.png" width="40px" alt="" onClick={resetBin}/></li>
                    </p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Bike;