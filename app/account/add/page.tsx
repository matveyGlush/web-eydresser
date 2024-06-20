'use client'

import React from "react";
import styles from "../page.module.css";

export default function Closet() {

  return (
    <div>
      <div className={styles.header}>
        <h2>Добавить</h2>
        <div className={styles.hiUser}>
          <h3>Привет,&nbsp;Егор</h3>
          <img src="/userAvatar.png" className={styles.userAvatar}/>
        </div>
      </div>
    </div>
  );
}