import { useState } from 'react';
import axios from 'axios';
import './UrlShortener.css';

export default function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/shorten', { originalUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <header className="app-navbar">
  <h1 className="app-title">🔗 URL Shortener</h1>
  <button
    className="theme-toggle"
    onClick={() => {
      document.body.classList.toggle('dark-mode');
    }}
  >
    🌓
  </button>
</header>

      <div className="url-shortener">
        <h1 className="fade-slide">✨ Convert your URLs into short and sweet 💫</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
          <button type="submit">Shorten 🔍</button>
        </form>
        {shortUrl && (
          <p>
            ✅ Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
          </p>
        )}
      </div>
    </>
  );
}
