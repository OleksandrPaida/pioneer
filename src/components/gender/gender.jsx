import styles from './styles.module.css';
import { ReactComponent as Logo } from '../../assets/img/Logo.svg'
import { ReactComponent as Step } from '../../assets/img/step_group.svg'
import { ReactComponent as Back } from '../../assets/img/arrow_button.svg'
import Info from '../../assets/img/info-circle.svg'
import {useNavigate} from "react-router-dom";


const Gender = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.aboutContainer}>
        <p className={styles.heading}>Getting to know you</p>
        <Step/>
        <h1 className={styles.title}>What gender do you identify with?</h1>
        <img className={styles.infoIcon} src={Info} alt={'#'}/>
        <div style={{marginTop:'42px'}}>
        <select className={styles.select}>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Transgender</option>
          <option>Non-Binary/Gender-nonconfirming</option>
          <option>Prefer to self describe</option>
        </select>
        <p className={styles.label}>Please select one</p>
        </div>
        <button onClick={handleNavigate} className={styles.button}>Continue</button>
        <div className={styles.back}>
          <Back/>
        </div>
      </div>
    </div>
  );
};

export { Gender };
