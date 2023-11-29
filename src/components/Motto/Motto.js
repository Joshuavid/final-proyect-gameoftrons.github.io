import styles from "./Motto.module.css";
import React from "react";

function Motto ()
{
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>The solar system: the new home.</span>
      <span className={styles["motto__emojis"]} role="img" aria-label="emojis-juntos">🌎🚀🧑‍🚀🪐</span>
    </div>
  );
}

export default Motto;
