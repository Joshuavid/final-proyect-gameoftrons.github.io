// import {useState, useContext} from "react";
// import {useNavigate} from "react-router-dom";
import React from "react";

// import styles from "./SpacecraftBuild.module.css";
// import {LoadingContext} from "../../context/LoadingProvider";
// import SpaceTravelApi from "../../services/SpaceTravelApi";

function SpacecraftBuild ()
{
  // const INITIAL_SPACECRAFT = {
  //   name: "",
  //   capacity: "",
  //   description: "",
  //   pictureUrl: ""
  // };
  // const [spacecraft, setSpacecraft] = useState(INITIAL_SPACECRAFT);
  // const [errors, setErrors] = useState([]);
  // const navigate = useNavigate();
  // const {enableLoading, disableLoading} = useContext(LoadingContext);

  // function handleChangeOfFormInput (event)
  // {
  //   const {name, value} = event.target;

  //   setSpacecraft(prevSpacecraft => ({
  //     ...prevSpacecraft,
  //     [name]: value
  //   }));
  // }

  // async function handleSubmitOfForm (event)
  // {
  //   event.preventDefault();

  //   let {name, capacity, description, pictureUrl} = spacecraft;

  //   let isFormError = false;
  //   setErrors([]);

  //   if (name.length === 0)
  //   {
  //     isFormError = true;
  //     setErrors(prevErrors => ([
  //       ...prevErrors,
  //       "Name is required!"
  //     ]));
  //   }

  //   if (!capacity)
  //   {
  //     isFormError = true;
  //     setErrors(prevErrors => ([
  //       ...prevErrors,
  //       "Capacity is required!"
  //     ]));
  //   }

  //   capacity = Number(capacity);
  //   if (!Number.isInteger(capacity))
  //   {
  //     isFormError = true;
  //     setErrors(prevErrors => ([
  //       ...prevErrors,
  //       "Capacity should be an integer number!"
  //     ]));
  //   }

  //   if (!description)
  //   {
  //     isFormError = true;
  //     setErrors(prevErrors => ([
  //       ...prevErrors,
  //       "Description is required!"
  //     ]));
  //   }

  //   if (!isFormError)
  //   {
  //     enableLoading();
  //     const {isError} = await SpaceTravelApi.buildSpacecraft({name, capacity, description, pictureUrl});
  //     if (!isError)
  //     {
  //       setSpacecraft(INITIAL_SPACECRAFT);
  //     }
  //     disableLoading();
  //   }
  // }

  // function handleClickOfBack (event)
  // {
  //   navigate(-1);
  // }

  return (
    <>
     <dive>
      Ultima
     </dive>
    </>
  );
}

export default SpacecraftBuild;
