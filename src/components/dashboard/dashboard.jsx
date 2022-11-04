import React from 'react';
import {Header} from "../header/header";
import styles from './styles.module.css';
import {ReactComponent as GroupIcon} from '../../assets/img/groop_icon.svg'
import {ReactComponent as HeadIcon} from '../../assets/img/head_icon.svg'
import {ReactComponent as ChartIcon} from '../../assets/img/chart.svg'
import {ReactComponent as HandIcon} from '../../assets/img/heand.svg'
import {ReactComponent as CloseIcon} from '../../assets/img/IconClose.svg'
import EnhancedTable from "../tabel/tabel";

const Dashboard = () => {

  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>Welcome back, Tania! 👋</h1>
          <div className={styles.board}>
            <h1 className={styles.cardTitleBox}>Stay on top of your wellness!</h1>
            <div className={styles.cardBox}>
              <div className={styles.card1}>
                <p>Article</p>
                <span className={styles.cardText}>8 Ways Managers Can Support Employees</span>
                <div className={styles.iconGroup}>
                  <GroupIcon/>
                </div>
              </div>
              <div className={styles.card2}>
                <p>Article</p>
                <span className={styles.cardText2}>8 Ways Managers Can Support Employees</span>
                <div className={styles.iconHead}>
                  <HeadIcon/>
                </div>
              </div>
              <div className={styles.card3}>
                <p>Article</p>
                <span className={styles.cardText3}>8 Ways Managers Can Support Employees</span>
                <div className={styles.iconChart}>
                  <ChartIcon/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.appointments}>
            <div className={styles.proTip}>
              <div className={styles.proTipText}>
                <div style={{marginRight: '20px'}}>
                  <HandIcon/>
                </div>
                <div>
                  <span className={styles.paragraphs}>Pro-tip to help you prepare for your next appointment!</span>
                  <p>Write down business goals you hope to achieve in the next 3-6-12 months!</p>
                </div>
              </div>

              <div>
                <CloseIcon/>
              </div>
            </div>
            <div className={styles.upcoming}>
              Upcoming Appointments
            </div>
            <EnhancedTable/>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Dashboard;
