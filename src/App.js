import { useState, useEffect, useCallback } from 'react';

import Button from './components/Button/Button';
import Divider from './components/Divider/Divider';

import styles from './App.module.css';

const adviceUrl = 'https://api.adviceslip.com/advice';

function App() {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvice = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(adviceUrl);

      if (!response.ok) {
        throw Error('Something went wrong. 😱');
      }

      const data = await response.json();

      if (data.message && data.message.type === 'error') {
        throw Error(data.message.text);
      }

      setAdvice(data.slip);
      setError(null);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  const clickHandler = (e) => {
    e.preventDefault();
    fetchAdvice();
  };

  let heading = 'Please wait...';
  let content = 'Loading...';

  if (!isLoading) {
    heading = !error ? 'Advice #' + advice?.id : 'Oops!';
    content = !error ? `“${advice?.advice}”` : error;
  }

  return (
    <div className={styles['advice']}>
      <h1 className={styles['advice__id']}>{heading}</h1>
      <p className={styles['advice__text']}>{content}</p>
      <Divider />
      <Button onClick={clickHandler} />
    </div>
  );
}

export default App;
