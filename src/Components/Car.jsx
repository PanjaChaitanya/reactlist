import React, { useState } from 'react'

function Car() {
    const [car,setCar] = useState(["FERRARI","JAGUAR","ROLLS ROYCE"])
    const [rcars,setrcars] = useState([])
    let addCar = () => {
        let carVal = document.getElementById('inputcar').value
        carVal = carVal.toUpperCase()
        if(carVal!==''){
            if(car.includes(carVal)){
                alert("Car already exists")
            }
            else{
                if(car.length < 5){
                    setCar([...car,carVal])
                    document.getElementById('inputcar').value=''
                }else{
                    alert("You can add only 5 cars")
                }
            }
        }else{
            alert("Enter a Car Name")
        }
    }
    let removeCar = () => {
        if(car.length>0){
            setCar(car.slice(0,-1))
            let rcar = document.getElementById('deletedCar').innerText;
            rcar = car.slice(-1)
            setrcars([...rcars,rcar])
        }else{
            alert("No cars Left to delete")
        }
    }
    let removeACar = () =>{
        let carDelVal = document.getElementById('carRemoveInput').value
        carDelVal = carDelVal.toUpperCase()
       if(carDelVal!==''){
            if(car.includes(carDelVal)){
                setCar(car.filter(x=>x!==carDelVal))
                setrcars([...rcars,carDelVal])
                document.getElementById('carRemoveInput').value=''
            }else{
                alert("Car not found")
            }
        }else{
            alert('Enter car name to delete')
        }
    }
    let resetBin = () =>{
        if(rcars.length>0){
            setrcars([])
        }else{
            alert("Bin is Empty")
        }
    }
  return (
    <>
    <div className='carMainContainer' id='cars'>
    <h2 id='carhead'>CAR LIST</h2>
        <div className="carContainer">
            <div className="addListContainer">
                <div className='carListContainer'>
                    <input type="text" id="inputcar" placeholder="Enter car name"/>
                    {car.map((x, index) =><li key={index}>🚖 {x}</li>)} 
                </div>
                <div className="buttonContainer">
                    <button id="carSetBtn" onClick={addCar}>Set 🚘</button>
                    <button id="carDelBtn" onClick={removeCar} title='Remove Last'><img src="./images/removeCar.png" width="35px" alt="" /></button>
                </div>
            </div>
            <div className="carRemovedListContainer">
                <input type="text" id='carRemoveInput' placeholder='Enter Car Name you want to delete'/>
                <button id="carRemoveBtn" onClick={removeACar}><img src="./images/removeCar.png" width="35px" alt="" /></button>
                <div className='carRemovedItems'>
                    <h3>Removed Items</h3>
                    <ul id="removedItemsList">
                    <p id='deletedCar'>
                    {rcars.map((x, index) =><li key={index}>🗑️ {x}</li>)} 
                    <li><img src="./images/reset.png" width="40px" alt="" onClick={resetBin} /></li>
                    </p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Car