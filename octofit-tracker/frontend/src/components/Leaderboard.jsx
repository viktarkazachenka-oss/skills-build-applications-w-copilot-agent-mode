import { ResourceState } from './ResourceState.jsx';
import { useCollection } from '../hooks/useCollection.js';

// Codespaces endpoint shape: https://<name>-8000.app.github.dev/api/leaderboard/
export default function Leaderboard() {
  const state = useCollection('leaderboard');
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">This week</p><h1>Leaderboard</h1></div><p className="section-note">A snapshot of consistency, not a judgment.</p></div><ResourceState {...state}><div className="leaderboard-list">{state.items.map((entry, index) => <article className={`leaderboard-row ${index === 0 ? 'leaderboard-row-top' : ''}`} key={entry._id || entry.id || entry.rank}><span className="rank">{entry.rank || index + 1}</span><div className="leaderboard-name"><strong>{entry.user?.displayName || entry.user?.username || 'Athlete'}</strong><span>{entry.team?.name || 'Independent'} · {entry.streakDays || 0} day streak</span></div><strong className="points">{entry.points || 0}</strong></article>)}</div></ResourceState></section>;
}