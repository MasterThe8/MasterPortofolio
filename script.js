document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    });
    navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

const typedEl = document.getElementById('typed-line');
const commands = [
'python -m pytest',
'git commit -m \"build portfolio\"',
'git push origin main'
];
let cmdIndex = 0, charIndex = 0, deleting = false;

function typeLoop(){
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(prefersReduced){ typedEl.textContent = commands[0]; return; }

const current = commands[cmdIndex];
if(!deleting){
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === current.length){
    deleting = true;
    setTimeout(typeLoop, 1600);
    return;
    }
} else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if(charIndex === 0){
    deleting = false;
    cmdIndex = (cmdIndex + 1) % commands.length;
    }
}
setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if(entry.isIntersecting){
    entry.target.classList.add('in');
    io.unobserve(entry.target);
    }
});
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));
