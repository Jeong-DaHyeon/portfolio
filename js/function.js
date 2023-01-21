function drawCircle(circleTag,per){
  circleTag.css("stroke-dashoffset",314-(314*per/100))
}

function circleProgress(){
  $(".skill circle").each(function(){
    let percentTag = $(this).parent().parent().children(".percentTag")
    let percent = Number(percentTag.text())
    let num = 0;
    let timer = setInterval(function(){
      if(num<percent){
        num++
        percentTag.text(num+"%")
      }else{
        clearInterval(timer)
      }
    },1);
    drawCircle($(this),percent);
  });
  console.log("서클프로그레스가 실행되었습니다.");
  return true;
}







// ls
