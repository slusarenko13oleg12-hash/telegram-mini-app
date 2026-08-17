const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#f5f6f8'); tg.setBackgroundColor('#f5f6f8'); } catch(e) {}
}

const user = tg?.initDataUnsafe?.user;
if (user) {
  const name = user.first_name || 'Пользователь';
  document.getElementById('greeting').textContent = `Привет, ${name} 👋`;
  document.getElementById('avatar').textContent = (name[0] || 'U').toUpperCase();
}

function showToast(text){
  const el=document.getElementById('toast');
  el.textContent=text; el.classList.add('show');
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>el.classList.remove('show'),2200);
}
function deposit(){showToast('Пополнение подключим следующим шагом');}
function withdraw(){showToast('Вывод подключим следующим шагом');}
function showProfile(){
  const id=user?.id ? `Telegram ID: ${user.id}` : 'Откройте приложение из Telegram';
  showToast(id);
}
function home(){window.scrollTo({top:0,behavior:'smooth'});}
