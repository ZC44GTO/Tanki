root = document.querySelector("#root")
hackWindow = document.createElement("div")
hackWindow_style={
    display: "flex",
    backgroundColor: "black",
    height:"500px",
    width:"250px",
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
hackWindow.style.outline = "1px solid red"
//Object.assign():
Object.assign(hackWindow.style,hackWindow_style);
root.appendChild(hackWindow)

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

draggable(hackWindow)


title = document.createElement("span")
title.innerText = "New Hack"
hackWindow.appendChild(title)

title_style = {

color:"white",
textAlign:"center",
fontSize : "23px",
padding: "23px 43%",
   


    
}



Object.assign(title.style,title_style)

