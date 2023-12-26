// import {useState, useEffect, useContext} from "react";
import React from "react";

// import styles from "./Planets.module.css";
// import {LoadingContext} from "../../context/LoadingProvider";
// import SpaceTravelApi from "../../services/SpaceTravelApi";

function Planets ()
{
  // const [planetsWithSpacecrafts, setPlanetsWithSpacecrafts] = useState([]);
  // const {isLoading, enableLoading, disableLoading} = useContext(LoadingContext);
  // const [selectedPlanetId, setSelectedPlanetId] = useState();
  // const [selectedSpacecraftId, setSelectedSpacecraftId] = useState();

  // async function getPlanetsWithSpacecrafts ()
  // {
  //   const {data: planets, isError: isErrorPlanets} = await SpaceTravelApi.getPlanets();
  //   const {data: spacecrafts, isError: isErrorSpacecrafts} = await SpaceTravelApi.getSpacecrafts();

  //   if (!isErrorPlanets && !isErrorSpacecrafts)
  //   {
  //     for (const planet of planets)
  //     {
  //       planet.spacecrafts = [];

  //       for (const spacecraft of spacecrafts)
  //       {
  //         if (planet.id === spacecraft.currentLocation)
  //         {
  //           planet.spacecrafts.push(spacecraft);
  //         }
  //       }
  //     }

  //     setPlanetsWithSpacecrafts(planets);
  //   }
  // }

  // useEffect(() =>
  //           {
  //             async function runGetPlanetsWithSpacecrafts ()
  //             {
  //               enableLoading();
  //               await getPlanetsWithSpacecrafts();
  //               disableLoading();
  //             }

  //             runGetPlanetsWithSpacecrafts();
  //           },
  //           [enableLoading, disableLoading]
  // );

  // function handleClickOfPlanet (event, id)
  // {
  //   if (!isLoading)
  //   {
  //     setSelectedPlanetId(id);
  //   }
  // }

  // async function handleClickOfSpacecraft (event, spacecraftId, planetId)
  // {
  //   if (!isLoading && Number.isInteger(selectedPlanetId) && selectedPlanetId !== planetId)
  //   {
  //     setSelectedSpacecraftId(spacecraftId);

  //     enableLoading();

  //     const {isError} = await SpaceTravelApi.sendSpacecraftToPlanet({spacecraftId, targetPlanetId: selectedPlanetId});
  //     if (!isError)
  //     {
  //       await getPlanetsWithSpacecrafts();
  //       setSelectedPlanetId(null);
  //       setSelectedSpacecraftId(null);
  //     }

  //     disableLoading();
  //   }
  // }

  return (
    <>
      <div>
        Y esta tambien?wwwwwwwwwwwwwwwwwwwwwwwwwwww
      </div>
    </>
  );
}

export default Planets;
