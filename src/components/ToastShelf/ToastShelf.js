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
          <Toast id={item.id} variant={item.toastVariant} dismissToast={removeToast}>{item.messageText}</Toast>
        </li>
        )
      } )}
    </ol>
  );
}

export default ToastShelf;
