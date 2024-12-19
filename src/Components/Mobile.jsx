import React, { useState } from 'react'
import '../css/mobile.css'

function Mobile() {
    const [mobile,setMobile] = useState(["SAMSUNG","BLACK BERRY","ONE PLUS"])
    const[rmobiles,setrmobiles] = useState([])
    let addMobile = () => {
        let mobileVal = document.getElementById('inputmobile').value
        mobileVal = mobileVal.toUpperCase()
        if(mobileVal!==''){
            if(mobile.includes(mobileVal)){
                alert("Mobile already exists")
            }
            else{
                if(mobile.length < 5){
                    setMobile([...mobile,mobileVal])
                    document.getElementById('inputmobile').value=''
                }else{
                    alert("You can add only 5 mobiles")
                }
            }
        }else{
            alert("Enter a Mobile Name")
        }
    }
    let removeMobile = () => {
        if(mobile.length>0){
            setMobile(mobile.slice(0,-1))
            let rmobile = document.getElementById('deletedMobile').innerText;
            rmobile = mobile.slice(-1)
            setrmobiles([...rmobiles,rmobile])
        }else{
            alert("No MObiles Left to delete")
        }
    }
    let removeAMobile = () =>{
        let mobileDelVal = document.getElementById('mobileRemoveInput').value
        mobileDelVal = mobileDelVal.toUpperCase()
        if(mobileDelVal!==''){
            if(mobile.includes(mobileDelVal)){
                setMobile(mobile.filter(x=>x!==mobileDelVal))
                setrmobiles([...rmobiles,mobileDelVal])
                document.getElementById('mobileRemoveInput').value=''
            }else{
                alert("Mobile not found")
            }
        }else{
            alert('Enter Mobile name to delete')
        }
    }
    let resetBin = () =>{
        if(rmobiles.length>0){
            setrmobiles([])
        }else{
            alert('Bin is empty')
        }
    }
  return (
    <>
    <div className='mobileMainContainer' id='mobiles'>
        <h2 id='mobilehead'>MOBILE LIST</h2>
        <div className="mobileContainer">
            <div className="addListContainer">
                <div className='listContainer'>
                    <input type="text" id="inputmobile" placeholder="Enter mobile name"/>
                    {mobile.map((x, index) =><li key={index}>📱 {x}</li>)} 
                </div>
                <div className="buttonContainer">
                    <button id="mobileSetBtn" onClick={addMobile}>Set 📱</button>
                    <button id="mobileDelBtn" onClick={removeMobile} title='Remove Last'><img src="./images/removeMobile.png" width="40px" alt="" /></button>
                </div>
            </div>
            <div className="mobileRemoveListContainer">
                <input type="text" id='mobileRemoveInput' placeholder='Enter Mobile Name you want to delete'/>
                <button id="mobileRemoveBtn" onClick={removeAMobile}><img src="./images/removeMobile.png" width="40px" alt="" /></button>
                <div className='mobileRemovedItems'>
                    <h3>Removed Items</h3>
                    <ul id="removedItemsList">
                    <p id='deletedMobile'>
                    {rmobiles.map((x, index) =><li key={index}>🗑️ {x}</li>)}
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

export default Mobile
