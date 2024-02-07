import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toastList, setToastList}) {
  function removeToast(id){
    setToastList(toastList.filter(item => item.id !== id));
  }

  return (
    <ol className={styles.wrapper}>
      { toastList.map(item => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
          <Toast variant={item.variant} dismissToast={() => removeToast(item.id)}>{item.message}</Toast>
        </li>
        )
      } )}
    </ol>
  );
}

export default ToastShelf;
