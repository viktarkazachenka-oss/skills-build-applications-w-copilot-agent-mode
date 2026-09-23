import { ResourceState } from './ResourceState.jsx';
import { useCollection } from '../hooks/useCollection.js';

export default function Activities() {
  const state = useCollection('activities');
  return <section className="page-section"><div className="section-heading"><div><p className="eyebrow">Movement log</p><h1>Activities</h1></div><p className="section-note">Every session counts. Here is the latest pulse from the gym floor.</p></div><ResourceState {...state}><div className="table-shell"><table className="tracker-table"><thead><tr><th>Activity</th><th>Athlete</th><th>Duration</th><th>Points</th></tr></thead><tbody>{state.items.map((activity) => <tr key={activity._id || activity.id}><td><strong>{activity.type || 'Workout'}</strong><span>{activity.distanceMiles ? `${activity.distanceMiles} miles` : 'Logged session'}</span></td><td>{activity.user?.displayName || activity.user?.username || 'Team member'}</td><td>{activity.durationMinutes || '—'} min</td><td><strong className="points">+{activity.points || 0}</strong></td></tr>)}</tbody></table></div></ResourceState></section>;
}