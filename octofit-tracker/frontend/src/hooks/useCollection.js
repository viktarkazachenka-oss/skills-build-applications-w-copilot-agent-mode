import { useEffect, useState } from 'react';
import { fetchCollection } from '../api.js';

export function useCollection(resource) {
  const [items, setItems] = useState([]);
  const [state, setState] = useState({ loading: true, success: false, count: 0, error: '' });

  useEffect(() => {
    const controller = new AbortController();

    fetchCollection(resource, controller.signal)
      .then((nextItems) => {
        setItems(nextItems);
        setState({ loading: false, success: true, count: nextItems.length, error: '' });
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setState({ loading: false, success: false, count: 0, error: error.message || 'Unable to load data.' });
        }
      });

    return () => controller.abort();
  }, [resource]);

  return { items, ...state };
}