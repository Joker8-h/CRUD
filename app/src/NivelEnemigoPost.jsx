import React, { useState } from "react";
import NavBar from "./NavBar";


 function NivelEnemigoPost() {
    const [id_nivel, setId_nivel] = useState("");
    const [id_enemigo, setIdEnemigo] = useState("");
    const [cantidad, setCantidad] = useState("");
    
 async function GuardarEnemigo(e) {
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo", {
            method: "POST",
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ id_nivel, id_enemigo, cantidad}),
        })}



    return (
       
         <div>
            <NavBar></NavBar>
        <h1 className="titulo">Agregar Enemigo</h1>
        <form onSubmit={GuardarEnemigo} className="formulario">
            <input type="text" placeholder="id-nivel" value={id_nivel} onChange={(e) => setId_nivel(e.target.value)} />
            <input type="text" placeholder="id-enemigo" value={id_enemigo} onChange={(e) => setIdEnemigo(e.target.value)} />
            <input type="text" placeholder="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
   
            <button type="submit">Agregar Nivel Enemigo</button>
        </form>
         </div>
    
    );

}

export default NivelEnemigoPost;