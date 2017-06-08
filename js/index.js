
var openWindow=(function(){
        function _firstFuncV(str){
           var createDiv=document.createElement("div");
        
           document.body.appendChild(createDiv);
           createDiv.id="openWindow";
           createDiv.style.position="absolute";
           createDiv.style.top="-13.37%";
           createDiv.style.left="50%";
           createDiv.style.transform="translateX(-50%)";
           createDiv.style.width="98%";
           createDiv.style.height="12.37%";
           createDiv.style.maxWidth="670px";
           createDiv.style.backgroundColor="#fff";
           createDiv.style.color="black";
           createDiv.style.textAlign="center";
            var theLineHeight=createDiv.style.height;
            var fatherHeight=document.body.clientHeight;
            var childHeight=parseInt(theLineHeight)/100*parseInt(fatherHeight);
             createDiv.style.fontSize=0.2*childHeight+"px";
             createDiv.style.lineHeight=parseInt(theLineHeight)/100*parseInt(fatherHeight)+"px";
           createDiv.style.border="1px solid black";
           createDiv.style.borderBottomLeftRadius="5%";
           createDiv.style.borderBottomRightRadius="5%";
           createDiv.style.borderTopLeftRadius="5%";
           createDiv.style.borderTopRightRadius="5%";
           createDiv.style.display="none";
            createDiv.innerHTML=str;
    
         
       }//安卓弹窗
        function _firstFuncVI(id,str){
       window.starterId=id;
       window.content=str;
         
       }//安卓，触发器
      function _firstFuncVII(str){
           var createDiv=document.createElement("div");
        
           document.body.appendChild(createDiv);
           createDiv.id="openWindowII";
          function createDivNew(){
           var createDivSmall=document.createElement("div");
            createDiv.appendChild(createDivSmall);
           createDivSmall.style.position="absolute";
           createDivSmall.style.width="12%";
           createDivSmall.style.height="8%";
           createDivSmall.style.backgroundColor="#fff";
           createDivSmall.style.top="80%";
           createDivSmall.style.left="50%";
           createDivSmall.style.transform="translateX(-50%)";
          }
          
           //
           createDiv.style.position="absolute";
           createDiv.style.top="-15.3%";
           createDiv.style.left="50%";
           createDiv.style.transform="translateX(-50%)";
           createDiv.style.width="100%";
           createDiv.style.height="14.3%";
           createDiv.style.maxWidth="690px";
           createDiv.style.backgroundColor="black";
           createDiv.style.opacity="0.8";

           createDiv.style.color="#fff";
           createDiv.style.textAlign="center";
            var theLineHeight=createDiv.style.height;
            var fatherHeight=document.body.clientHeight;
            var childHeight=parseInt(theLineHeight)/100*parseInt(fatherHeight);
             createDiv.style.fontSize=0.2*childHeight+"px";
             createDiv.style.lineHeight=parseInt(theLineHeight)/100*parseInt(fatherHeight)+"px";
           createDiv.style.border="1px solid black";
           createDiv.style.display="none";
            createDiv.innerHTML=str;
            createDivNew();
    
         
      }//苹果弹窗

        function _firstFuncVIII(id,str){
       window.starterId2=id;
       window.content2=str;
         
       }//苹果，触发器
    return{
        
        andoridWindow:_firstFuncV,gainId_Str:_firstFuncVI,
        appleWindow:_firstFuncVII,gainId_Str2:_firstFuncVIII
        
    };

})();
   $(document).ready(function(){
     $(starterId).click(function(){
      openWindow.andoridWindow(content);
      $("#openWindow").css("display","block");
      $("#openWindow").animate({top:'1%'});
         var test = setTimeout(function(){
        disapear()
    },3000)
    
      function disapear() //先把窗口移动上去
      {
           $("#openWindow").animate({top:'-13.37%'});
            var test1 = setTimeout(function(){
        disapearOver()
    },1000)
       function disapearOver() //让窗口消失掉
       {
            $("#openWindow").remove();
       } 
      }
  });//控制安卓
     $(starterId2).click(function(){
      openWindow.appleWindow(content2);
      $("#openWindowII").css("display","block");
      $("#openWindowII").animate({top:'0%'});
         var test = setTimeout(function(){
        disapear()
    },3000)
    
      function disapear() //先把窗口移动上去
      {
           $("#openWindowII").animate({top:'-15.3%'});
            var test1 = setTimeout(function(){
        disapearOver()
    },1000)
       function disapearOver() //让窗口消失掉
       {
            $("#openWindowII").remove();
       } 
      }
  });//控制苹果
});
