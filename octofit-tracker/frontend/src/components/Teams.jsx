import { ResourceState } from './ResourceState.jsx';
import { useCollection } from '../hooks/useCollection.js';

// Codespaces endpoint shape: https://<name>-8000.app.github.dev/api/teams/
export default function Teams() {
  const state = useCollection('teams');
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">Friendly competition</p><h1>Teams</h1></div><p className="section-note">Collective momentum beats a perfect score.</p></div><ResourceState {...state}><div className="data-grid">{state.items.map((team) => <article className="data-card team-card" key={team._id || team.id || team.name}><span className="team-swatch" style={{ backgroundColor: team.color || '#d97706' }} /><div><h2>{team.name}</h2><p className="muted">{team.members?.length || 0} members</p><strong>{team.totalPoints || 0} points</strong></div></article>)}</div></ResourceState></section>;
}