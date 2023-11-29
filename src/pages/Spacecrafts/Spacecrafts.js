// import {useState, useContext, useEffect} from "react";
// import {useNavigate} from "react-router-dom";
import React from "react";

// import styles from "./Spacecrafts.module.css";
// import {LoadingContext} from "../../context/LoadingProvider";
// import SpaceTravelApi from "../../services/SpaceTravelApi";

function Spacecrafts ()
{
  // const [spacecrafts, setSpacecrafts] = useState([]);
  // const {enableLoading, disableLoading} = useContext(LoadingContext);

  // async function getSpacecrafts ()
  // {
  //   const {data: spacecrafts, isError} = await SpaceTravelApi.getSpacecrafts();
  //   if (!isError)
  //   {
  //     setSpacecrafts(spacecrafts);
  //   }
  // }

  // useEffect(() =>
  //           {
  //             async function runGetSpacecrafts ()
  //             {
  //               enableLoading();
  //               await getSpacecrafts();
  //               disableLoading();
  //             }

  //             runGetSpacecrafts();
  //           },
  //           [enableLoading, disableLoading]
  // );

  // const navigate = useNavigate();

  // function handleClickOfBuild ()
  // {
  //   navigate("/spacecraft/build");
  // }

  // function handleClickOfImageContainer (event, id)
  // {
  //   navigate(`/spacecraft/${id}`);
  // }

  // async function handleClickOfDestroy (event, id)
  // {
  //   enableLoading();
  //   const {isError} = await SpaceTravelApi.destroySpacecraftById({id});
  //   if (!isError)
  //   {
  //     await getSpacecrafts();
  //   }
  //   disableLoading();
  // }

  return (
    <div>
     y esta?
    </div>
  );
}

export default Spacecrafts;
