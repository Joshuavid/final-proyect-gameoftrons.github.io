// import {useState, useContext, useEffect} from "react";
// import {useNavigate} from "react-router-dom";
import React from "react";

// import styles from "./Spacecrafts.module.css";
// import {LoadingContext} from "../../context/LoadingProvider";
// import SpaceTravelApi from "../../services/SpaceTravelApi";
//POR ALGUNA RAZON SI SOLAMENTE BORRAS TODO Y DEJAS UN RETURN COMN ALGUN HOLA ESTARIA FUNCIONANDO YA.

import React, { useState, useEffect } from 'react';
import './DataFetcher.css';

function Spacecrafts ()
{

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Ajusta el número de elementos por página

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      // Reemplaza la URL con la URL de tu API
      const response = await fetch(`https://anapioficeandfire.com//posts?_page=${currentPage}&_limit=${itemsPerPage}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error al obtener los datos de la API', error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="data-fetcher">
      <h2>Lista de Datos</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Siguiente</button>
      </div>
    </div>
  );
  
}

export default Spacecrafts;
