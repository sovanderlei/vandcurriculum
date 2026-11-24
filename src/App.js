import React, { useEffect, useState } from 'react';
import Resume from './resume/Resume';

// Os dados do currículo ficam em public/data/ — edite os JSON e recarregue a página.
const LANGS = {
  pt: { label: 'PT', file: 'data/curriculo-pt.json', html: 'pt-BR' },
  en: { label: 'EN', file: 'data/curriculo-en.json', html: 'en' },
};

function initialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl && LANGS[fromUrl]) return fromUrl;
  try {
    const saved = localStorage.getItem('resume-lang');
    if (saved && LANGS[saved]) return saved;
  } catch (e) { /* ignore */ }
  return 'pt';
}

export default function App() {
  const [lang, setLang] = useState(initialLang);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    fetch(`${process.env.PUBLIC_URL}/${LANGS[lang].file}`, { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((json) => {
        setData(json);
        document.documentElement.lang = LANGS[lang].html;
        document.title = `${json.profile.firstName} ${json.profile.lastName} – ${json.profile.title}`;
      })
      .catch((e) => setError(`Erro ao carregar ${LANGS[lang].file}: ${e.message}`));
    try { localStorage.setItem('resume-lang', lang); } catch (e) { /* ignore */ }
  }, [lang]);

  return (
    <>
      <div className="toolbar">
        {Object.entries(LANGS).map(([key, l]) => (
          <button key={key} className={key === lang ? 'active' : ''} onClick={() => setLang(key)}>
            {l.label}
          </button>
        ))}
        <button onClick={() => window.print()}>
          <i className="fas fa-print" /> {data?.labels?.print || 'Print'}
        </button>
      </div>
      {error && <div className="loading">{error}</div>}
      {!error && (data ? <Resume data={data} /> : <div className="loading">...</div>)}
    </>
  );
}
