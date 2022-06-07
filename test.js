const checkObj ={

  "inputId": false,
  "inputPw": false,
  "inputPwConfirm" : false,
  "inputName" : false,
  "gender" : false,
  "inputTel" : false,
}


document.getElementById("inputId").addEventListener("input", function(){
  const regExp = /^[a-z][\w_-]{5,13}$/;

  if(regExp.test(this.value)){
    this.style.backgroundColor="springgreen";
    checkObj.inputId=true;
  }else{
    this.style.backgroundColor="red";
    this.style.color="white";
    checkObj.inputId=false;
  }
});

const inputPw = document.getElementById("inputPw");
const inputPwConfirm = document.getElementById("inputPwConfirm");
const pwMessage = document.getElementById("pwMessage");

inputPwConfirm.addEventListener("keyup",function(){

  if(inputPw.value.length==0){
    inputPwConfirm.value="";
    alert('비밀번호를 입력해주세요.')
    inputPw.focus();
    checkObj.inputPw=false;
  }
});

inputPw.addEventListener("keyup",function(){
  if((inputPw.value==inputPwConfirm.value)&&inputPw.value.length != 0){
    pwMessage.innerText = "비밀번호 일치";
    pwMessage.classList.add("confirm");
    pwMessage.classList.remove("error");
    checkObj.inputPw = true;
    checkObj.inputPwConfirm = true;
  }else{
    pwMessage.innerText = "비밀번호 불일치";
    pwMessage.classList.add("error");
    pwMessage.classList.remove("confirm");
    checkObj.inputPw = false;
    checkObj.inputPwConfirm = false;
  }
});

inputPwConfirm.addEventListener("keyup",function(){
  if((inputPw.value==inputPwConfirm.value)&&inputPw.value.length != 0){
    pwMessage.innerText = "비밀번호 일치";
    pwMessage.classList.add("confirm");
    pwMessage.classList.remove("error");
    checkObj.inputPw = true;
    checkObj.inputPwConfirm = true;
  }else{
    pwMessage.innerText = "비밀번호 불일치";
    pwMessage.classList.add("error");
    pwMessage.classList.remove("confirm");
    checkObj.inputPw = false;
    checkObj.inputPwConfirm = false;
  }
});


document.getElementById("inputName").addEventListener("change",function(){
  const regExp =/^[가-힣]{2,5}$/;
  const nameMessage = document.getElementById("nameMessage");
  
  if(reqExp.test(this.value)){
    nameMessage.innerText="정상입력";
    nameMessage.classList.add("confirm");
    nameMessage.classList.remove("error");
    checkObj.inputName=true;

  }else{
    nameMessage.innerText="한글만 입력하세요";
    nameMessage.classList.add("error");
    nameMessage.classList.remove("confirm");
    checkObj.inputName=false;
  }
});