import styles from './styles.module.css';
import {useNavigate} from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.heading}>Oops.. Page not found.</h1>
      <div className={styles.buttonWrapper}>
        <button onClick={handleNavigate}>Return home</button>
      </div>
    </div>
  );
};

export {NotFound};
