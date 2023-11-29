// import {useState, useEffect, useContext} from "react";
// import {useParams} from "react-router-dom";
import React from "react";

import styles from "./Spacecraft.module.css";
// import {LoadingContext} from "../../context/LoadingProvider";
// import SpaceTravelApi from "../../services/SpaceTravelApi";

function Spacecraft ()
{
  // const [spacecraft, setSpacecraft] = useState();
  // const {id} = useParams();
  // const {enableLoading, disableLoading} = useContext(LoadingContext);

  // useEffect(() =>
  //           {
  //             async function getSpacecraft ()
  //             {
  //               enableLoading();
  //               const {data: spacecraft, isError} = await SpaceTravelApi.getSpacecraftById({id});
  //               if (!isError)
  //               {
  //                 setSpacecraft(spacecraft);
  //               }
  //               disableLoading();
  //             }

  //             getSpacecraft();
  //           },
  //           [enableLoading, disableLoading]
  // );

  return (
    <div className={styles["spacecraft"]}>
     ya?
    </div>
  );
}

export default Spacecraft;
