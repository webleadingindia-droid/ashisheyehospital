// Same toast/flash look as the original main.js
export function showFlash(status: 'success' | 'error', msg: string) {
  const flash = document.createElement('div');
  flash.className = `alert alert-${status}`;
  flash.style.cssText = `position:fixed;top:80px;right:24px;z-index:9000;max-width:360px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,.15);animation:heroEnter .4s ease;`;
  const icon = document.createElement('i');
  icon.className = `fas fa-${status === 'success' ? 'check-circle' : 'exclamation-circle'}`;
  flash.appendChild(icon);
  flash.appendChild(document.createTextNode(' ' + msg));
  document.body.appendChild(flash);
  setTimeout(() => { flash.style.opacity = '0'; flash.style.transition = 'opacity .5s'; }, 4000);
  setTimeout(() => flash.remove(), 4600);
}
