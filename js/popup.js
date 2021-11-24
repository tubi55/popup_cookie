class CookiePop{

   constructor(){
      const btnDel = document.querySelector(".del"); 
      const btnView = document.querySelector(".view"); 
      const popup = document.querySelector("#popup"); 
      const btnClose = popup.querySelector(".close"); 
      
      const isCookie = document.cookie.indexOf("today=done"); 
      let isOn;  
      
       
      (isCookie == -1) ? isOn = "block" : isOn = "none"; 
      popup.style.display = isOn; 
      
      
      //쿠키 확인 버튼 이벤트 
      btnView.addEventListener("click", e=>{
         e.preventDefault(); 
         console.log(document.cookie); 
      });
      
      //쿠키삭제 버튼 이벤트 
      btnDel.addEventListener("click", e=>{
         e.preventDefault(); 
         setCookie("today", "done", 0); 
      })
      
      
      //팝업 닫기 버튼 이벤트 
      btnClose.addEventListener("click", e=>{
         popup.style.display = "none";  
      
         let isChecked = popup.querySelector("input[type=checkbox]").checked; 
         if(isChecked) setCookie("today", "done", 1); 
      });
   }

   
   
   
   function setCookie(name, val, due){
      const today = new Date(); 
      const date = today.getDate(); 
      today.setDate(date + due); 
      const duedate = today.toGMTString(); 
      document.cookie = `${name}=${val}; path=/; expires = ${duedate}`; 
   }
}
