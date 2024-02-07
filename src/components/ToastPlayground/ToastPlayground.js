import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [messageText, setMessageText] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toastList, setToastList] = React.useState([]);
  function handleMessageEvent(event) {
    setMessageText(event.target.value);
  }
  function addToastToList() {
    const newMessage = messageText;
    console.log(newMessage);
    const newToast = {
      id: crypto.randomUUID(),
      message: newMessage,
      variant: toastVariant
    }
    
    const newToastList = [...toastList, newToast];
    setToastList(newToastList);
    setMessageText('');
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    addToastToList();
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {<ToastShelf toastList={toastList} setToastList={setToastList}/>}

      <form className={styles.controlsWrapper} onSubmit={handleFormSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={messageText}
              onChange={handleMessageEvent}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`;
              return (
                <label key={id} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name="variant"
                    value={`${variant}`}
                    checked={toastVariant === variant}
                    onChange={(event) => {
                      setToastVariant(event.target.value);
                    }}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
