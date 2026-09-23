import { ResourceState } from './ResourceState.jsx';
import { useCollection } from '../hooks/useCollection.js';

// Codespaces endpoint shape: https://<name>-8000.app.github.dev/api/users/
export default function Users() {
  const state = useCollection('users');
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">Community</p><h1>Users</h1></div><p className="section-note">The students turning small habits into a team-wide rhythm.</p></div><ResourceState {...state}><div className="data-grid">{state.items.map((user) => <article className="data-card" key={user._id || user.id || user.username}><div className="avatar-mark">{(user.displayName || user.username || '?').slice(0, 1)}</div><div><h2>{user.displayName || user.username}</h2><p className="muted">@{user.username} · Grade {user.grade || '—'}</p><strong>{user.totalPoints || 0} points</strong></div></article>)}</div></ResourceState></section>;
}