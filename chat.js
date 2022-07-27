const socket=io();
// Pak();
socket.on("newCon",(msg)=>{
    console.log(msg);
})

document.querySelector("#msg-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const msg= e.target.elements.text.value;
    // document.querySelector("input").value=" ";
    
    // console.log(msg);
    socket.emit("formSubmit",msg)
    socket.on("res",(data)=>{
        console.log(data);
    })
})
    
    // socket.on("countUpdated",(c)=>{
    //     console.log("count updated",c);
    // })

    // document.querySelector("#inc").addEventListener("click",()=>{
    //     console.log("clicked");
    //     socket.emit("inc");
    // })