import styles from './styles.module.css';
import {ReactComponent as Logo} from '../../assets/img/Logo-small.svg'
import {ReactComponent as SMS} from '../../assets/img/Icon-sms.svg'
import User from '../../assets/img/Dropdown.png'
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Header = () => {
  const [button, setButton] = useState([
    {
      name: 'Dashboard',
      path: '/dashboard'
    },
    {
      name: 'Progress',
      path: '/progress'
    },
    {
      name: 'Team',
      path: '/team'
    }
  ])

  const [active, setActive] = useState(0)

  const navigate = useNavigate();
  const handleNavigate = (path, i) => {
    setActive(i)
    navigate(`${path}`);
  };


  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.buttonWrapper}>
        {button.map((el, i) =>
          <div
            key={i}
            onClick={() => handleNavigate(el.path, i)}
            className={i === active ? styles.active : styles.navigation}>
            <p className={styles.text}>{el.name}</p>
          </div>
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <SMS/>
        <img src={User} alt={'user'}/>
      </div>
    </div>
  );
};

export {Header};
