const bingoBoard = document.getElementById("bingoBoard");
const col = document.getElementsByClassName("col");
const row = document.getElementsByClassName("row");

bingoBoard.style.padding="50px";


for(let e1 of col){
    e1.style.display="flex";
    e1.style.justifyContent="center";
    e1.style.alignItems = "center";
    e1.style.border="1px solid black";
    e1.style.height="60px";
    e1.style.width="60px";
    e1.style.fontSize="20px";
    e1.style.margin="2px";

    e1.addEventListener("mouseenter", function(){
        this.style.backgroundColor="yellow";
    });
    e1.addEventListener("mouseleave", function(){
        this.style.backgroundColor="white";
    });
   
}

for(let e2 of row ){
    e2.style.display="flex";
}
