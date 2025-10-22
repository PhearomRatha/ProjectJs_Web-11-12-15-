const text = "Welcome to manus smos Shop";
console.log(text);

let speed = 200; 
let i=0;
function ani(){
    if(i<text.length){
        document.getElementById("aniText").innerHTML+=text.charAt(i);//W 
        i++;
        console.log(text.charAt(i)); 
        setTimeout(ani,speed);
    }else{
        setTimeout(()=>{
            document.getElementById("aniText").innerHTML="";
            i=0;
            ani();
        })
    }
}

ani();