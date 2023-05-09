import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div class={styles['lds-ellipsis']} role="alert" aria-busy="true">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
