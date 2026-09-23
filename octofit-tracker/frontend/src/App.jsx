import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import { apiBaseUrl } from './api.js';
import './App.css';

const navigation = [['Users', '/users'], ['Teams', '/teams'], ['Activities', '/activities'], ['Leaderboard', '/leaderboard'], ['Workouts', '/workouts']];

function Home() {
  return <section className="home-section"><div className="home-copy"><p className="eyebrow">Mergington High School · 2026</p><h1>Make your move count.</h1><p className="home-lede">OctoFit turns everyday activity into a shared reason to keep showing up.</p><Link className="primary-button" to="/activities">View activity log <span aria-hidden="true">↗</span></Link></div><div className="home-statline"><div><strong>05</strong><span>ways to explore</span></div><div><strong>01</strong><span>team rhythm</span></div><div><strong>∞</strong><span>small wins</span></div></div></section>;
}

function App() {
  return <div className="app-shell"><header className="app-header"><Link className="brand" to="/" aria-label="OctoFit home"><img src="/octofitapp-small.png" alt="" /><span>OctoFit <em>Tracker</em></span></Link><nav className="main-nav" aria-label="Main navigation">{navigation.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}</nav><span className="api-status"><i /> API connected</span></header><main><Routes><Route path="/" element={<Home />} /><Route path="/users" element={<Users />} /><Route path="/teams" element={<Teams />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/workouts" element={<Workouts />} /><Route path="*" element={<Home />} /></Routes></main><footer className="app-footer"><span>OctoFit Tracker</span><span>API: {apiBaseUrl.replace(/^https?:\/\//, '')}</span></footer></div>;
}

export default App;