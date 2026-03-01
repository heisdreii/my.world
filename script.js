/* ===============================
   PAGE LOAD FADE IN
================================ */
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* ===============================
   SMOOTH PAGE TRANSITION
================================ */
function goToPage(page){
    document.body.classList.add("fade-out");
    setTimeout(()=>{
        window.location.href = page;
    }, 800);
}

/* ===============================
   PASSWORD CHECK
================================ */
function checkPassword(){
    let input = document.getElementById("password").value.trim().toLowerCase();
    if(input === "thapelo"){
        goToPage("page2.html");
    } else {
        let error = document.getElementById("error");
        error.innerText = "Incorrect password";
        error.style.animation = "none";
        void error.offsetWidth;
        error.style.animation = "shake 0.3s";
    }
}

/* ===============================
   MUSIC FADE IN
================================ */
function fadeInAudio(audio){
    audio.volume = 0;
    audio.play().catch(()=>{});
    let vol = 0;
    let interval = setInterval(()=>{
        if(vol < 1){
            vol += 0.05;
            audio.volume = vol;
        } else {
            clearInterval(interval);
        }
    }, 200);
}

/* Trigger music after first interaction */
window.addEventListener("click", ()=>{
    let m2 = document.getElementById("music2");
    let m3 = document.getElementById("music3");
    if(m2 && m2.paused) fadeInAudio(m2);
    if(m3 && m3.paused) fadeInAudio(m3);
});

/* ===============================
   MODAL
================================ */
function openModal(card){
    let modal = document.getElementById("modal");
    let img = card.querySelector("img").src;
    let text = card.querySelector(".full").innerText;

    document.getElementById("modal-img").src = img;
    document.getElementById("modal-text").innerText = "";

    modal.style.display = "flex";

    setTimeout(()=>{
        typeText(text);
    },200);
}

function typeText(text){
    let el = document.getElementById("modal-text");
    el.innerText="";
    let i=0;
    let interval=setInterval(()=>{
        if(i<text.length){
            el.innerText+=text[i];
            i++;
        } else clearInterval(interval);
    },40);
}

document.getElementById("modal")?.addEventListener("click",()=>{
    document.getElementById("modal").style.display="none";
});

/* ===============================
   HEARTS EFFECT
================================ */
function startHearts(){
    setInterval(()=>{
        let heart=document.createElement("div");
        heart.classList.add("heart");
        heart.innerText=Math.random()>0.5?"💘":"🌹";
        heart.style.left=Math.random()*100+"vw";
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),6000);
    },400);
}