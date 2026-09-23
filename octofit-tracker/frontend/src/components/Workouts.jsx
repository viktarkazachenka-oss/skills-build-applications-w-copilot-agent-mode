import { ResourceState } from './ResourceState.jsx';
import { useCollection } from '../hooks/useCollection.js';

export default function Workouts() {
  const state = useCollection('workouts');
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">For your next session</p><h1>Workouts</h1></div><p className="section-note">Pick a focused session and leave with something in the bank.</p></div><ResourceState {...state}><div className="data-grid">{state.items.map((workout) => <article className="data-card workout-card" key={workout._id || workout.id || workout.title}><div className="workout-meta"><span>{workout.category || 'Training'}</span><span>{workout.durationMinutes || '—'} min</span></div><h2>{workout.title}</h2><p>{workout.description}</p><small>{workout.difficulty || 'All levels'}</small></article>)}</div></ResourceState></section>;
}