(() => {
  'use strict';
  const $ = (s, c=document) => c.querySelector(s), $$ = (s,c=document) => [...c.querySelectorAll(s)];

  // Boot sequence
  const boot = $('#boot'), log = $('#bootLog');
  const bootLines = ['Loading Embedded Systems...','Loading FPGA...','Loading Machine Learning...','Loading Projects...','Ready.'];
  bootLines.forEach((line,i)=>setTimeout(()=>{ const d=document.createElement('div'); d.textContent=`[${String(i+1).padStart(2,'0')}] ${line}`; log.appendChild(d); if(i===bootLines.length-1) setTimeout(()=>boot.classList.add('done'),420); }, i*390));

  // Animated PCB canvas
  const canvas=$('#pcbCanvas'), ctx=canvas.getContext('2d'); let traces=[];
  function resize(){const dpr=Math.min(devicePixelRatio||1,2);canvas.width=innerWidth*dpr;canvas.height=innerHeight*dpr;canvas.style.width=innerWidth+'px';canvas.style.height=innerHeight+'px';ctx.setTransform(dpr,0,0,dpr,0,0);makeTraces()}
  function makeTraces(){traces=Array.from({length:Math.max(16,Math.floor(innerWidth/75))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,len:80+Math.random()*220,dir:Math.random()>.5?1:-1,speed:.08+Math.random()*.18,phase:Math.random()*Math.PI*2,vertical:Math.random()>.5}))}
  function draw(t){ctx.clearRect(0,0,innerWidth,innerHeight);ctx.lineWidth=.7;traces.forEach((p,i)=>{const pulse=(Math.sin(t*.001*p.speed*10+p.phase)+1)/2;ctx.strokeStyle=i%4===0?`rgba(252,0,122,${.045+pulse*.065})`:`rgba(0,225,253,${.035+pulse*.06})`;ctx.beginPath();if(p.vertical){ctx.moveTo(p.x,p.y);ctx.lineTo(p.x,p.y+p.len*.55);ctx.lineTo(p.x+p.dir*35,p.y+p.len*.55);ctx.lineTo(p.x+p.dir*35,p.y+p.len)}else{ctx.moveTo(p.x,p.y);ctx.lineTo(p.x+p.dir*p.len*.55,p.y);ctx.lineTo(p.x+p.dir*p.len*.55,p.y+35);ctx.lineTo(p.x+p.dir*p.len,p.y+35)}ctx.stroke();ctx.fillStyle=ctx.strokeStyle;ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}
  addEventListener('resize',resize,{passive:true});resize();requestAnimationFrame(draw);

  // Cursor glow and scroll trace
  const glow=$('.cursor-glow'); addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true});
  const progress=$('#scrollTrace'); function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max?scrollY/max*100:0)+'%'} addEventListener('scroll',updateProgress,{passive:true});updateProgress();

  // Reveals + nav state
  const revealObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(el=>revealObs.observe(el));
  const navLinks=$$('.side-nav a'); const sectionObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-35% 0px -55% 0px'});$$('main section[id]').forEach(s=>sectionObs.observe(s));

  // Project filters
  $$('.filters button').forEach(btn=>btn.addEventListener('click',()=>{ $$('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;$$('.project-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&!card.dataset.category.split(' ').includes(f))); }));

  // Image lightbox
  const lightbox=$('#lightbox'), lightImg=$('img',lightbox); $$('[data-lightbox]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();lightImg.src=el.tagName==='IMG'?el.src:el.href;lightbox.showModal()})); $('button',lightbox).addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});

  // Video demo
  const vm=$('#videoModal'), video=$('video',vm); $$('[data-video]').forEach(b=>b.addEventListener('click',()=>{video.src=b.dataset.video;vm.showModal();video.play().catch(()=>{})})); $('button',vm).addEventListener('click',()=>{video.pause();vm.close()});vm.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load()});

  // Terminal easter egg
  const term=$('#terminal'), input=$('#terminalInput'), out=$('#terminalOutput');
  const commands={help:'Commands: about, skills, projects, research, contact, clear, exit',about:'Luna Nguyen // Computer Systems Engineering @ ASU // Expected May 2027',skills:'C | Verilog | Python | ARM Cortex-M0+ | FPGA | Linux | PyTorch | OpenCV | PCB Design',projects:'P01 Hydrophone PCB\nP02 Agricultural Field Segmentation\nP03 AI Robotic Arm\nP04 Multi-Cycle MIPS FPGA\nP05 Embedded Systems Robots\nP06 Linux Kernel Modules',research:'ACTIVE: Data-efficient agricultural field segmentation using U-Net + FTW + active learning.',contact:'Email: uyenluna18@gmail.com\nLinkedIn: /in/phuong-uyen-nguyen-7a2a59291/'};
  function openTerm(){term.hidden=false;input.focus()} function closeTerm(){term.hidden=true}
  addEventListener('keydown',e=>{if((e.key==='t'||e.key==='T')&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();term.hidden?openTerm():closeTerm()}if(e.key==='Escape'&&!term.hidden)closeTerm()});
  $('#terminalClose').addEventListener('click',closeTerm); input.addEventListener('keydown',e=>{if(e.key!=='Enter')return;const cmd=input.value.trim().toLowerCase();out.innerHTML+=`\n\n<span style="color:#fc007a">$ ${input.value}</span>`;if(cmd==='clear')out.innerHTML='';else if(cmd==='exit')closeTerm();else out.innerHTML+='\n'+(commands[cmd]||`command not found: ${cmd}`);input.value='';out.scrollTop=out.scrollHeight});
})();
