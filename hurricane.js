
//gui
TPspeed = 200
root = document.querySelector("#root")
stateWindow = document.createElement("div")
stateWindow_style={
    display: "flex",
    backgroundColor: "black",
    height:"55%",
    width:"17%",
    position:"absolute",
    opacity: "0.55",
    left:"50%",
    right:"50%",
    transform:"translate(-50%,-50%)",
    borderRadius:"20px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    borderWidth:"3px"
}
stateWindow.style.outline = "1px solid red"
//Object.assign():
Object.assign(stateWindow.style,stateWindow_style);
root.appendChild(stateWindow)

function draggable(el) {
  el.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
    
    function mouseMoveHandler(e) {
      el.style.top = (e.clientY - offsetY) + 'px';
      el.style.left = (e.clientX - offsetX) + 'px';
    }

    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
  });
}

draggable(stateWindow)


title = document.createElement("span")
title.innerText = "State"
stateWindow.appendChild(title)

title_style = {

color:"white",
textAlign:"center",
fontSize : "23px",
padding: "23px 35%",
   


    
}



Object.assign(title.style,title_style)




Sautoclick = document.createElement("span")
Sairwalk = document.createElement("span")
Srandomtp = document.createElement("span")
Sgoldtp = document.createElement("span")


label_style = {
position:"absolute",
fontSize:"18px",
padding:"23px 10%",
color:"white",
  
}

Object.assign(Sautoclick.style,label_style)
Object.assign(Sairwalk.style,label_style)
Object.assign(Srandomtp.style,label_style)
Object.assign(Sgoldtp.style,label_style)

Sautoclick.innerText = "Autoclicker:"
Sairwalk.innerText = "SimpleTP:"


Sautoclick.style.bottom = "64%"
Sairwalk.style.bottom = "50%"

stateWindow.appendChild(Sautoclick)
stateWindow.appendChild(Sairwalk)



onOff_style = {
position:"absolute",
fontSize:"18px",
padding:"23px 10%",
color:"red",
right:"0%"
  
}


State1 = document.createElement("span")
State2 = document.createElement("span")




Object.assign(State1.style,onOff_style)
Object.assign(State2.style,onOff_style)





State1.innerText = "OFF"
State2.innerText = "OFF"






stateWindow.appendChild(State1)
stateWindow.appendChild(State2)




State1.style.bottom = "64%"
State2.style.bottom = "50%"



tps = document.createElement("span")


plusButton = document.createElement("button")
minusButton = document.createElement("button")

tps.innerText = TPspeed

tps.style.position = "absolute"
tps.style.color = "white"
tps.style.bottom = "10%"
tps.style.right = "46%"
tps.style.fontSize = "18px"

stateWindow.appendChild(tps)


pmb_style = {
width: '35px',
height: '25px',
position: 'absolute',
borderRadius: '100px',
bottom: '10%',
}




Object.assign(plusButton.style,pmb_style)
Object.assign(minusButton.style,pmb_style)

minusButton.style.backgroundColor="red"
plusButton.style.backgroundColor="green"


minusButton.style.left = "14%"
plusButton.style.right = "14%"

stateWindow.appendChild(plusButton)
stateWindow.appendChild(minusButton)

pSign = document.createElement("span")
mSign = document.createElement("span")

pSign.innerText = "+"
mSign.innerText = "-"


plusButton.appendChild(pSign)
minusButton.appendChild(mSign)





plusButton.addEventListener("click",function(){

tps.innerText = parseInt(tps.innerText) +10
TPspeed +=10
  
})
minusButton.addEventListener("click",function(){

tps.innerText =  parseInt(tps.innerText) -10
TPspeed -=10

  
})

root.removeChild(stateWindow)
//gui end





class commons{
getRoot = null
getReactRoot = null
getChatState = null 
searchObject = null
getRandom = null
}


class game{
getTankPhysics = null
getTank = null  
getWorld = null  
getMines = null
getFlags = null
getPlayers = null
getMapBoundary = null    
getBattleState = null
getSupplies = null
getHealth = null
getStriker = null
getCamera = null
getAirwalk = null
}


class hacks{
clicker = null
oneHitKill = null
noLaser = null
autoHeal = null
simpleTP = null
playerTP = null
randomTP = null

goldTP = null
speedhack = null


}

class vars{
FlagA = null
FlagB = null
target = null
tpName = null  
rocketCount = null
shellCache = null
  
  
}




commons.searchObject = function(object,item){
try {
for(let i=0; i<object.length;i++){
if(object[i].hasOwnProperty(item))
return object[i]

}      
} catch (error) {
    
}  
}


 function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



commons.getRoot = function(){
root = document.querySelector("#root")  
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0  
  
}



commons.getRandom = function(min,max){
return Math.floor(Math.random() * (max - min + 1) + min)
  
  
}

//keypressing


class KeyPressing{static k=[];static i(){document.addEventListener('keydown',(e)=>{const c=e.keyCode;if(KeyPressing.k.includes(c)==!1){KeyPressing.k.push(c)}}); document.addEventListener('keyup',(e)=>{const c=e.keyCode;if(KeyPressing.k.includes(c)==!0){const a=KeyPressing.k.indexOf(c);if(a!==-1){KeyPressing.k.splice(a,1)}}})} static isKeyPressed(c){return KeyPressing.k.includes(c)}}KeyPressing.i()




//GAME ITEMS



game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank

  
  
  
}

game.getWorld = function(){
return game.getTank().world  
  
}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);  
  
  
  
}

game.getMapBoundary = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}


game.getPlayers = function(){
return game.getTank().components_0.array[33].gameMode_0.tanksOnField
  
}
game.getBattleState = function(){
  
return commons.getReactRoot().at(1).state.inBattle
}

commons.getChatState = function(){
return document.querySelector(".sc-bwzfXH.iokmvL")
}


game.getStriker = function(){
return commons.searchObject(game.getTank().components_0.array,"strikerWeapon_jjsiik$_0").strikerWeapon_jjsiik$_0
  
  
  
  
}


game.getHealth = function(){
return game.getTank().components_0.array[1].isFullHealth()
  
  
}

game.getTankPhysics = function(){
return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0
  
  
  
}

game.getCamera = function(){
for (let i = 0; i < game.getTank().components_0.array.length; i++)
  {
    if(game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
    return game.getTank().components_0.array[i].followCamera_0.currState_0
    
  }
}


game.getFlags = function(){
try {
if(game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.teamType.name == "TEAM_A"){
vars.FlagA = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[1]._value_0.getPosition()

vars.FlagB = game.getWorld().triggers_0.triggers_0.array[0].flagBaseTriggerListener_0.flags_0.internalMap_uxhen5$_0.backingMap_0[0]._value_0.getPosition()

    
}    
} catch (error) {
    
}}





game.getAirwalk = function(){
return commons.searchObject(game.getTank().components_0.array,"trackedChassis_eytv59$_0").trackedChassis_eytv59$_0  
  
}



game.getSupplies = function(supply){
try {
for(key in game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return key 
}


}    
} catch (error) {
    
}  
  

}

function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")  
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")  
    
} catch (error) {
    
}
}

supps = setInterval(getSupplyArrays,500)




//HACKS

hacks.speedhack = function(){
try{
game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.currentValue_58o4vw$_0 = 15000
game.getTank().components_0.array[14].chassisLocker_kjqurp$_0.chassis_x8422y$_0.maxSpeedSmoother_fqgjkx$_0.targetValue_mmhheo$_0 = 15000
game.getAirwalk().speedCharacteristics_0.acceleration = 8000
 
}catch (error) {
 return Error
}

}


hacks.clicker = function(){ 
try {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply() 
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply() 

    
} catch (error) {
    
} 


}

function nt(){game.getTankPhysics().body.state.orientation.x = 0;
    game.getTankPhysics().body.state.orientation.y = 0;

    game.getTankPhysics().body.state.angularVelocity.x = 0;
    game.getTankPhysics().body.state.angularVelocity.y = 0;
    game.getTankPhysics().body.state.angularVelocity.z = 0;}

function noZVelocity(){


try {
game.getTankPhysics().body_xsop3k$_0.state.velocity.z = 0
game.getWorld().physicsScene_0.gravity.z  = 0

} catch (error) {
    
}
    
}

function simpleTP()

 {


 
 
 
 if (KeyPressing.isKeyPressed(87 /*key: W*/) && commons.getChatState()==null)
    {
       

        
            
            game.getTankPhysics().body.state.velocity.x += TPspeed * Math.sin(-game.getCamera().direction);
            game.getTankPhysics().body.state.velocity.y += TPspeed * Math.cos(-game.getCamera().direction);
        
    }

    if (KeyPressing.isKeyPressed(83 /*key: S*/) && commons.getChatState()==null)
    {
        
        game.getTankPhysics().body.state.velocity.x -= TPspeed * Math.sin(-game.getCamera().direction);
            game.getTankPhysics().body.state.velocity.y -= TPspeed * Math.cos(-game.getCamera().direction);
    }

    if (KeyPressing.isKeyPressed(65 /*key: A*/) && commons.getChatState()==null)
    {
        

       
           

            game.getTankPhysics().body.state.velocity.x -= TPspeed * Math.sin(-(game.getCamera().direction - Math.PI / 2));
            game.getTankPhysics().body.state.velocity.y -= TPspeed * Math.cos(-(game.getCamera().direction - Math.PI / 2));
        
    }

    if (KeyPressing.isKeyPressed(68 /*key: D*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.velocity.x +=TPspeed * Math.sin(-(game.getCamera().direction - Math.PI / 2));
            game.getTankPhysics().body.state.velocity.y += TPspeed * Math.cos(-(game.getCamera().direction - Math.PI / 2));
        
    }
   
   if (KeyPressing.isKeyPressed(74 /*key: J*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.position.x+=60
        
    }

   
   if (KeyPressing.isKeyPressed(75 /*key: K*/) && commons.getChatState()==null)
    {
        

       
            game.getTankPhysics().body.state.position.x-=100
        
    }
   
   
   
   
   

}



s1p = 0
s2p = 0
s3p = 0
s4p = 0


State1.addEventListener("click",function(){
s1p+=1
    
if(s1p%2==1){
State1.innerText = "ON"
State1.style.color = "green"
window.p = setInterval(hacks.clicker,30)

}
    
if(s1p%2==0){
clearInterval(window.p)
State1.innerText = "OFF"
State1.style.color = "red"

}    
    


})




State2.addEventListener("click",function(){
s2p+=1
    
if(s1p%2==1){
State2.innerText = "ON"
State2.style.color = "green"
window.ckp = setInterval(simpleTP,10)

}
    
if(s2p%2==0){
clearInterval(window.ckp)
State2.innerText = "OFF"
State2.style.color = "red"

}    
    


})




State2.addEventListener("click",function(){
s2p+=1
    
if(s2p%2==1){
window.rgt = game.getWorld().physicsScene_0.gravity.z 
State2.innerText = "ON"
State2.style.color = "green"
window.ckp = setInterval(simpleTP,10)
window.NZR = setInterval(noZVelocity,1)
window.ntr = setInterval(nt,1)
}
    
if(s2p%2==0){
clearInterval(window.ckp)
State2.innerText = "OFF"
State2.style.color = "red"
clearInterval(window.NZR)
clearInterval(window.ntr)   
game.getTankPhysics().body_xsop3k$_0.state.velocity.z = -1.3
game.getTankPhysics().body_xsop3k$_0.scene.gravity.z = window.rgt
}    
    


})




