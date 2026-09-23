export function ResourceState({ loading, success, count, error, children }) {
  if (loading) return <div className="state-panel">Loading your tracker data...</div>;
  if (error) {
    return <div className="state-panel state-panel-error" role="alert"><strong>We could not reach the API.</strong><span>{error}</span></div>;
  }
  if (success) {
    return <><div className="state-panel state-panel-success" role="status"><strong>API request succeeded.</strong><span>{count} {count === 1 ? 'record' : 'records'} loaded.</span></div>{children}</>;
  }

  return children;
}