import React from 'react'

const songs = [
  { youtube: "https://youtu.be/O2K-jgLjYgY?si=k7-nGtasAbZANLon", spotify: "https://spotify.link/KLzvsMzQVXb" },
  { youtube: "https://youtu.be/SrAfK7bskik?si=riBcdpMWHDOsof-b", spotify: "https://spotify.link/tC9LnACQVXb" },
  { youtube: "https://youtu.be/OQJoI71vAFE?si=DFLYzOw2493UJfaM", spotify: "https://spotify.link/WrBPLcEQVXb" },
  { youtube: "https://youtu.be/lggsvri4D64?si=cXoAKU_Qtl_vpoyk", spotify: "https://spotify.link/IE5JhIGQVXb" },
  { youtube: "https://youtu.be/1H_ekuD9e1c?si=hxh9G7s6MprWuUMA", spotify: "https://spotify.link/Vib0ExNQVXb" },
  { youtube: "https://youtu.be/agv0GoBPc_Q?si=2-n5BStfuDv76Szh", spotify: "https://spotify.link/R6YqD9PQVXb" },
  { youtube: "https://youtu.be/SBg7_cCTjSM?si=7dVZ5sAyt2f62j9D", spotify: "https://spotify.link/lr7ztfRQVXb" },
  { youtube: "https://youtu.be/SjqYtphXuYE?si=UL4EgotQvnjF_oSH", spotify: "https://spotify.link/O1KOrtSQVXb" },
  { youtube: "https://youtu.be/eU4dQ1aSOQc?si=2Hq8-XHkNKil8vtk", spotify: "https://spotify.link/mm91OqUQVXb" },
  { youtube: "https://youtu.be/WSmA3dyguPM?si=FiXzfwy0Vc3296AU", spotify: "https://spotify.link/KcqeRvVQVXb" },
  { youtube: "https://youtu.be/VqweazyBBGA?si=Wl8KN4qcML8yZha7", spotify: "https://spotify.link/XBBfqSWQVXb" },
]

export default function App(){
  return (
    <div className="page">
      <header className="intro">
        <div className="spotlight">
          <h1 className="title">ASIRI PERERA</h1>
          <p className="tagline">I WROTE A POEM THAT NEVER ENDS</p>
        </div>
      </header>

      <main className="container">
        <section className="about">
          <h2>About</h2>
          <p>I’m Asiri Perera — a Sinhala artist and lyricist. My songs blend deep emotion with modern rhythm. You can find my work on Spotify and YouTube.</p>
        </section>

        <section className="follow">
          <h2>Follow Me</h2>
          <div className="links">
            <a href="https://www.facebook.com/share/17XPbh2Nwg/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://youtube.com/@asiripereraofficial?si=zbz_95zDB64P_O8P" target="_blank" rel="noreferrer">YouTube</a>
            <a href="https://www.tiktok.com/@asiri_official?_r=1&_t=ZS-911jWTIP6Nb" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://www.instagram.com/asi_asiri?igsh=MTMxNTZtZTdrcDF5cg==" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </section>

        <section className="music">
          <h2>Music</h2>
          <div className="cards">
            {songs.map((s, i) => (
              <div className="card" key={i}>
                <div className="card-title">Song {i+1}</div>
                <div className="card-links">
                  <a href={s.youtube} target="_blank" rel="noreferrer">YouTube</a>
                  <a href={s.spotify} target="_blank" rel="noreferrer">Spotify</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>Contact / DM</h2>
          <a className="whatsapp" href="https://wa.me/94754587939" target="_blank" rel="noreferrer">💬 Message on WhatsApp</a>
        </section>

        <section className="coming">
          <h2>Coming Soon</h2>
          <p>Stay tuned for more music</p>
        </section>
      </main>

      <a className="spotify-float" href="https://spotify.link/KLzvsMzQVXb" target="_blank" rel="noreferrer">Listen on Spotify</a>

      <footer className="footer">
        <small>© {new Date().getFullYear()} ASIRI PERERA</small>
      </footer>
    </div>
  )
}