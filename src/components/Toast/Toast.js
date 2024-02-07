import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
const STYLES_BY_VARIANT = {
  notice: styles.notice,
  warning: styles.warning,
  success: styles.success,
  error: styles.error,
};

function Toast({ variant, children, dismissToast }) {
  var Tag = ICONS_BY_VARIANT[variant];
  var variantStyle = STYLES_BY_VARIANT[variant];
  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Tag size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={dismissToast}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
