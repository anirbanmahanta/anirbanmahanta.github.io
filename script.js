* {
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg,#0a0f1f,#05070d);
  color:#fff;
}

/* NAV */
.nav {
  position:sticky;
  top:0;
  display:flex;
  justify-content:space-between;
  padding:20px 40px;
  z-index:100;
}

.logo {
  font-weight:600;
}

.logo span {
  color:#00d4ff;
}

.nav a {
  margin-left:20px;
  text-decoration:none;
  color:#ccc;
}

/* GLASS */
.glass {
  background:rgba(255,255,255,0.05);
  backdrop-filter:blur(14px);
  border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;
}

/* HERO */
.hero {
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:20px;
}

.hero h1 {
  font-size:48px;
}

.hero span {
  background:linear-gradient(90deg,#00d4ff,#7c3aed);
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}

.subtitle {
  margin-top:10px;
  color:#aaa;
}

/* BUTTON */
.btn {
  padding:12px 20px;
  margin:10px;
  border-radius:8px;
  text-decoration:none;
  transition:0.3s;
}

.primary {
  background:#00d4ff;
  color:#000;
}

.primary:hover {
  transform:scale(1.05);
}

.ghost {
  border:1px solid #00d4ff;
  color:#00d4ff;
}

/* STATS */
.stats {
  display:flex;
  justify-content:center;
  gap:30px;
  margin-top:30px;
}

.stat h3 {
  color:#00d4ff;
}

/* SECTIONS */
.section {
  padding:80px 20px;
  max-width:1000px;
  margin:auto;
}

/* GRID */
.grid {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:20px;
}

/* CARD */
.card {
  padding:20px;
  text-align:center;
  transition:0.3s;
}

.card:hover {
  transform:translateY(-8px);
}

/* PROJECT */
.project {
  padding:20px;
  margin-top:20px;
  transition:0.3s;
}

.project:hover {
  transform:translateY(-6px);
}

/* ANIMATION */
.reveal {
  opacity:0;
  transform:translateY(40px);
  transition:all 0.8s ease;
}

.reveal.active {
  opacity:1;
  transform:translateY(0);
}

/* MOBILE */
@media(max-width:768px){
  .hero h1 {
    font-size:32px;
  }
}