import styles from './Divider.module.css';

import mobileDivider from '../../assets/pattern-divider-mobile.svg';
import desktopDivider from '../..//assets/pattern-divider-desktop.svg';

const Divider = () => {
  return (
    <picture className={styles['divider']}>
      <source srcSet={desktopDivider} media="(min-width: 30rem)" />
      <img src={mobileDivider} alt="divider" />
    </picture>
  );
};

export default Divider;
