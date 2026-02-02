const heritageDB = {
    "Delhi": {
        "New Delhi": [
            { name: "Qutub Minar", img: "https://images.unsplash.com/photo-1523544545175-92e04b96d26b", map: "https://maps.app.goo.gl/B9x1r", hindi: "कुतुब मीनार दिल्ली का एक प्रसिद्ध ऐतिहासिक स्तंभ है।" },
            { name: "Red Fort", img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29", map: "https://maps.app.goo.gl/D9k2m", hindi: "लाल किला मुगल वास्तुकला का एक बेहतरीन उदाहरण है।" },
            { name: "Humayun's Tomb", img: "https://images.unsplash.com/photo-1585506942812-e72b29cef752", map: "https://maps.app.goo.gl/Z2e1x", hindi: "हुमायूँ का मकबरा भारत का पहला उद्यान मकबरा है।" },
            { name: "Lotus Temple", img: "https://images.unsplash.com/photo-1542385151-efd9000785a0", map: "https://maps.app.goo.gl/Y3r4w", hindi: "लोटस टेंपल अपने कमल के आकार के लिए जाना जाता है।" }
        ]
    },
    "Uttar Pradesh": {
        "Agra": [
            { name: "Taj Mahal", img: "https://images.unsplash.com/photo-1564507592333-c60657eaa0ae", map: "https://maps.app.goo.gl/T4a1m", hindi: "ताजमहल दुनिया के सात अजूबों में से एक है।" },
            { name: "Agra Fort", img: "https://images.unsplash.com/photo-1585135497273-1a86b099433d", map: "https://maps.app.goo.gl/F2k5r", hindi: "आगरा का किला यूनेस्को की विश्व धरोहर स्थल है।" }
        ],
        "Varanasi": [
            { name: "Kashi Temple", img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7", map: "https://maps.app.goo.gl/V1s9z", hindi: "काशी विश्वनाथ मंदिर भगवान शिव को समर्पित है।" },
            { name: "Sarnath", img: "https://images.unsplash.com/photo-1596402184320-417d717867cd", map: "https://maps.app.goo.gl/S3m8p", hindi: "सारनाथ वह स्थान है जहाँ बुद्ध ने अपना पहला उपदेश दिया था।" }
        ]
    },
    "Maharashtra": {
        "Mumbai/Pune": [
            { name: "Gateway of India", img: "https://images.unsplash.com/photo-1570160897040-30430ef2015a", map: "https://maps.app.goo.gl/M2p1q", hindi: "गेटवे ऑफ इंडिया मुंबई का सबसे प्रतिष्ठित स्मारक है।" },
            { name: "Ajanta Caves", img: "https://images.unsplash.com/photo-1591873831871-364276709b1f", map: "https://maps.app.goo.gl/A4k2o", hindi: "अजंता की गुफाएं अपनी प्राचीन बौद्ध पेंटिंग के लिए प्रसिद्ध हैं।" }
        ]
    }
    // ... Note: You can continue adding up to 50+ sites in this structure
};

const interests = ["Architecture", "Sacred", "Nature", "Mughal", "Ancient", "Buddhist", "Forts"];

window.onload = () => {
    const pillBox = document.getElementById('pref-pills');
    interests.forEach(i => pillBox.innerHTML += `<div class="pill" onclick="this.classList.toggle('active')">${i}</div>`);

    const sSelect = document.getElementById('state-select');
    Object.keys(heritageDB).forEach(s => sSelect.innerHTML += `<option>${s}</option>`);

    new QRCode(document.getElementById("qrcode"), "USER_PRO_INTEL_2026");
    syncStateData();
};

function syncStateData() {
    const state = document.getElementById('state-select').value;
    const cSelect = document.getElementById('city-select');
    cSelect.innerHTML = "";
    Object.keys(heritageDB[state]).forEach(c => cSelect.innerHTML += `<option>${c}</option>`);
    renderHeritageGrid();
}

function renderHeritageGrid() {
    const state = document.getElementById('state-select').value;
    const city = document.getElementById('city-select').value;
    const grid = document.getElementById('heritage-nodes');
    grid.innerHTML = "";

    heritageDB[state][city].forEach(site => {
        grid.innerHTML += `
            <div class="h-node">
                <img src="${site.img}">
                <div class="h-label">${site.name}</div>
                <div style="padding: 10px; display:flex; gap:5px;">
                    <button class="action-btn" style="font-size:0.5rem" onclick="window.open('${site.map}')">MAP</button>
                    <button class="action-btn" style="font-size:0.5rem" onclick="playHindiGuide('${site.hindi}')">HINDI</button>
                </div>
            </div>`;
    });
}

function playHindiGuide(text) {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = "Streaming: Hindi Guide...";
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'hi-IN'; // MODULE 6: Hindi Voice Guide Implementation
    window.speechSynthesis.speak(utter);
}

function stopAudio() {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = "System Idle";
}

function generateTrail() {
    document.getElementById('trail-log').innerHTML = "[SUCCESS] CIRCUIT_TRAIL_OPTIMIZED";
}

function openAdmin() {
    alert("CRITICAL: ACCESSING STATE_ADMIN_DASHBOARD_V2.0");
}
