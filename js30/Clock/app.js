const secondHand =document.querySelector('.second-hand');
const minHand =document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const seconds=now.getSeconds();
  const minute=now.getMinutes();
  const minuteDegree=((minute/60)*360)+90;
  const hour=now.getHours();
  const hourDegree=((hour/12)*360)+90;
  const secondDegrees = ((seconds/60)*360)+90;
  secondHand.style.transform =`rotate(${secondDegrees}deg)`;
  minHand.style.transform=`rotate(${minuteDegree}deg)`;
  hourHand.style.transform=`rotate(${hourDegree}deg)`;
}


setInterval(setDate,1000);
setDate();