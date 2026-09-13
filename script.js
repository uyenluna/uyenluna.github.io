window.addEventListener('load',()=>{
 setTimeout(()=>{
  document.getElementById('boot').style.display='none';
  document.querySelector('.layout').classList.remove('hidden');
  document.querySelector('.layout').style.opacity='1';
 },1800);
 document.addEventListener('mousemove',e=>{
  document.querySelector('.pcb-bg').style.backgroundPosition=`${e.clientX/80}px ${e.clientY/80}px`;
 });
});
