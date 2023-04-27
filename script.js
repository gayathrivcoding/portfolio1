
  /*const buttons = document.getElementsByTagName("button");
  console.log(buttons[1])*/
  
  const darkButton = document.getElementById("dark-btn");
  const lightButton = document.getElementById("light-btn");
  const bodyTag = document.getElementsByTagName("body");
  darkButton.addEventListener("click",function(event){
    bodyTag[0].classList.remove("light");
    bodyTag[0].classList.add("dark");
  });

  lightButton.addEventListener("click",function(event){
    bodyTag[0].classList.remove("dark");
    bodyTag[0].classList.add("light");
  });


