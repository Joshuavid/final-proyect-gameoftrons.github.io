import styles from "./Home.module.css";
import React from "react";

function Home ()
{
  return (
    <div>
      <section className={styles["section__container"]}>
        <h1 className={styles["titulo-Home"]}>Game of thrones</h1>
      </section>

      <section className={styles["section__container"]}>
        <h2><span role="img" aria-label="cohete espacial"></span>They say ..</h2>
        <p>In the land of dragons and betrayals, where shadows dance in hearts' travails, rises the Iron Throne, cold and grim, witness to secrets it never will hymn.</p>
      </section>


    </div>
  );
}

export default Home;
