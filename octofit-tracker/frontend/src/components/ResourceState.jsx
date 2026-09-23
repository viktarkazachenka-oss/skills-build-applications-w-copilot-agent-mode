export function ResourceState({ loading, error, children }) {
  if (loading) return <div className="state-panel">Loading your tracker data...</div>;
  if (error) {
    return <div className="state-panel state-panel-error" role="alert"><strong>We could not reach the API.</strong><span>{error}</span></div>;
  }
  return children;
}