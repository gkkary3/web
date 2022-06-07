const newBtn = document.querySelector("#newBtn");
const size = document.querySelector("#size");
bingoBoard.style.padding="50px";
newBtn.addEventListener("click",function(){
    for(let i=0;i<size.value;i++){
        //행 생성
        //행 스타일 추가
        const div1 = document.createElement("div");
        div1.classList.add("row");
        div1.style.display="flex";
        for(let k=0;k<size.value;k++){
            //열 생성 
            const div2 = document.createElement("div");
            div2.classList.add("col");
            //내용(숫자) 삽입
            // div2.innerText=k;
            //열 스타일 추가
            div2.style.display="flex";
            div2.style.justifyContent="center";
            div2.style.alignItems = "center";
            div2.style.border="1px solid black";
            div2.style.height="60px";
            div2.style.width="60px";
            div2.style.fontSize="20px";
            div2.style.margin="2px";
            //열 이벤트 추가
            div2.addEventListener("mouseenter", function(){
                this.style.backgroundColor="yellow";
            });
            div2.addEventListener("mouseleave", function(){
                this.style.backgroundColor="white";
            });
            //클릭 했을 때 색상 블루로 변화!
            div2.addEventListener("click", function(){
                this.style.backgroundColor="blue";
            });
            //행에 마지막 자식으로 열 추가
            div1.append(div2);
        }
    
        // 3)#bingoBoard의 마지막 자식으로 행 추가
        document.getElementById("bingoBoard").append(div1);
    }
});