import React from 'react';
import './Resume.css';

const asset = (p) => (p && !/^https?:/.test(p) ? `${process.env.PUBLIC_URL}/${p.replace(/^\//, '')}` : p);

function SideTitle({ icon, children }) {
  return (
    <h3 className="side-title">
      <span className="side-title__icon"><i className={icon} /></span>
      {children}
      <span className="side-title__line" />
    </h3>
  );
}

function MainTitle({ icon, children }) {
  return (
    <h2 className="main-title">
      <span className="main-title__icon"><i className={icon} /></span>
      {children}
      <span className="main-title__line" />
    </h2>
  );
}

// Na impressão, thead/tfoot se repetem em cada página e criam a margem superior/inferior.
function PrintFrame({ children }) {
  return (
    <table className="print-frame">
      <thead>
        <tr><td><div className="print-space" /></td></tr>
      </thead>
      <tbody>
        <tr><td>{children}</td></tr>
      </tbody>
      <tfoot>
        <tr><td><div className="print-space" /></td></tr>
      </tfoot>
    </table>
  );
}

const has = (arr) => Array.isArray(arr) && arr.length > 0;

export default function Resume({ data }) {
  const { labels = {}, profile = {} } = data;

  return (
    <PrintFrame>
    <div className="resume">
      {/* ---------- SIDEBAR ---------- */}
      <aside className="sidebar">
        {profile.photo && (
          <div className="photo">
            <img
              src={asset(profile.photo)}
              alt={`${profile.firstName} ${profile.lastName}`}
              style={{ objectPosition: profile.photoPosition || 'center' }}
            />
          </div>
        )}

        <h1 className="name">
          <span>{profile.firstName}</span>
          <span>{profile.lastName}</span>
        </h1>
        <div className="role">{profile.title}</div>

        {has(data.contact) && (
          <section>
            <SideTitle icon="fas fa-address-book">{labels.contact}</SideTitle>
            <ul className="contact">
              {data.contact.map((c, i) => (
                <li key={i}>
                  <span className="contact__icon"><i className={c.icon} /></span>
                  {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.text}</a> : <span>{c.text}</span>}
                </li>
              ))}
            </ul>
          </section>
        )}

        {has(data.skills) && (
          <section>
            <SideTitle icon="fas fa-code">{labels.skills}</SideTitle>
            <ul className="skills">
              {data.skills.map((s, i) => (
                <li key={i}>
                  <span className="skills__name">{s.name}</span>
                  {s.level != null && (
                    <span className="skills__bar"><span style={{ width: `${s.level}%` }} /></span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {has(data.education) && (
          <section>
            <SideTitle icon="fas fa-graduation-cap">{labels.education}</SideTitle>
            {data.education.map((e, i) => (
              <div className="edu" key={i}>
                <strong>{e.degree}</strong>
                <div>{e.school}</div>
                {e.location && <div>{e.location}</div>}
                <div>{e.period}</div>
              </div>
            ))}
          </section>
        )}

        {has(data.certifications) && (
          <section>
            <SideTitle icon="fas fa-certificate">{labels.certifications}</SideTitle>
            {data.certifications.map((c, i) => (
              <div className="edu" key={i}>
                <strong>{c.name}</strong>
                {(c.issuer || c.year) && <div>{[c.issuer, c.year].filter(Boolean).join(' | ')}</div>}
              </div>
            ))}
          </section>
        )}

        {has(data.languages) && (
          <section>
            <SideTitle icon="fas fa-language">{labels.languages}</SideTitle>
            <ul className="langs">
              {data.languages.map((l, i) => (
                <li key={i}><span>{l.name}</span><small>{l.level}</small></li>
              ))}
            </ul>
          </section>
        )}
      </aside>

      {/* ---------- MAIN ---------- */}
      <main className="content">
        {data.summary && (
          <section>
            <MainTitle icon="fas fa-user">{labels.summary}</MainTitle>
            <p className="summary">{data.summary}</p>
          </section>
        )}

        {has(data.experience) && (
          <section>
            <MainTitle icon="fas fa-briefcase">{labels.experience}</MainTitle>
            <div className="timeline">
              {data.experience.map((x, i) => (
                <div className="job" key={i}>
                  <div className="job__head">
                    <strong>{x.role}</strong>
                    <span>{x.start} – {x.end || labels.present}</span>
                  </div>
                  <div className="job__company">
                    {[x.company, x.location].filter(Boolean).join(' | ')}
                  </div>
                  {has(x.items) && (
                    <ul>{x.items.map((t, j) => <li key={j}>{t}</li>)}</ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {has(data.achievements) && (
          <section className="avoid-break">
            <MainTitle icon="fas fa-award">{labels.achievements}</MainTitle>
            <ul className="achievements">
              {data.achievements.map((a, i) => (
                <li key={i}><i className="far fa-check-circle" />{a}</li>
              ))}
            </ul>
          </section>
        )}

        {has(data.references) && (
          <section className="avoid-break">
            <MainTitle icon="fas fa-users">{labels.references}</MainTitle>
            <div className="refs">
              {data.references.map((r, i) => (
                <div className="ref" key={i}>
                  <strong>{r.name}</strong>
                  <div>{r.position}</div>
                  <div>{r.company}</div>
                  {r.phone && <div><i className="fas fa-phone" /> {r.phone}</div>}
                  {r.email && <div><i className="fas fa-envelope" /> {r.email}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
    </PrintFrame>
  );
}
