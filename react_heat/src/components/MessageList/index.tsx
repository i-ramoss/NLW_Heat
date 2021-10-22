import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>I can't wait to start this event, it's definitely going to be the best ever, let's go up! 🔥🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/i-ramoss.png" alt="Ian Ramos" />
            </div>
            <span>Ian Ramos</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>I can't wait to start this event, it's definitely going to be the best ever, let's go up! 🔥🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/i-ramoss.png" alt="Ian Ramos" />
            </div>
            <span>Ian Ramos</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>I can't wait to start this event, it's definitely going to be the best ever, let's go up! 🔥🔥</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/i-ramoss.png" alt="Ian Ramos" />
            </div>
            <span>Ian Ramos</span>
          </div>
        </li>
      </ul>
    </div>
  )
}