/* script.js - تفاعلات بسيطة للمبتدئين */
document.addEventListener('DOMContentLoaded', ()=>{

  // Smooth scroll to sections (for index CTA)
  const cta = document.querySelectorAll('.scroll-to');
  cta.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const target = e.currentTarget.dataset.target;
      const el = document.querySelector(target);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Simple lightbox for gallery (works if images have .lightbox class)
  document.querySelectorAll('.lightbox').forEach(img=>{
    img.addEventListener('click', ()=>{
      const src = img.getAttribute('src');
      openLightbox(src);
    });
  });

  function openLightbox(src){
    let box = document.createElement('div');
    box.style.position='fixed';
    box.style.inset='0';
    box.style.background='rgba(0,0,0,0.85)';
    box.style.display='flex';
    box.style.alignItems='center';
    box.style.justifyContent='center';
    box.style.zIndex='9999';
    box.innerHTML = <img src="${src}" style="max-width:92%;max-height:88%;border-radius:10px;box-shadow:0 20px 60px rgba(0,0,0,0.8)"/>;
    box.addEventListener('click', ()=>box.remove());
    document.body.appendChild(box);
  }

  // Quiz page logic (if quiz container exists)
  const quizForm = document.getElementById('quizForm');
  if(quizForm){
    quizForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      let score = 0;
      const answers = {q1:'b', q2:'a', q3:'c', q4:'b', q5:'a'};
      Object.keys(answers).forEach(k=>{
        const val = quizForm.querySelector([name="${k}"]:checked);
        if(val && val.value === answers[k]) score++;
      });
      const result = document.getElementById('quizResult');
      result.innerText = نتيجتك: ${score} / 5;
      result.style.display = 'block';
      result.scrollIntoView({behavior:'smooth'});
    });
  }

  // Guess the number game (games page)
  const guessBtn = document.getElementById('guessBtn');
  if(guessBtn){
    let secret = Math.floor(Math.random()*20)+1;
    document.getElementById('resetGuess').addEventListener('click', ()=>{
      secret = Math.floor(Math.random()*20)+1;
      document.getElementById('guessInput').value='';
      document.getElementById('guessMsg').innerText='جرب رقم بين 1 و 20';
    });
    guessBtn.addEventListener('click', ()=>{
      const g = Number(document.getElementById('guessInput').value);
      const msg = document.getElementById('guessMsg');
      if(!g){ msg.innerText='اكتب رقم صحيح'; return; }
      if(g === secret) msg.innerText = '🎉 رائع! صدقت الرقم';
      else if(g > secret) msg.innerText = '📉 الرقم أصغر';
      else msg.innerText = '📈 الرقم أكبر';
    });
  }

  // Contact form validation simple
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      const name = contactForm.querySelector('[name="name"]').value.trim();
      const email = contactForm.querySelector('[name="email"]').value.trim();
      const msg = contactForm.querySelector('[name="message"]').value.trim();
      if(!name  !email  !msg){
        e.preventDefault();
        alert('رجاءً عَبّي كل الحقول');
      } else {
        e.preventDefault();
        alert('تم استلام رسالتك (تجريبي)');
        contactForm.reset();
      }
    });
  }

});