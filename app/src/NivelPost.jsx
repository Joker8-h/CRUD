import React, { useState } from "react";


 function NivelPost() {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dificultad, setDificultad] = useState("");
 async function GuardarNivel(e) {
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
            method: "POST",
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ nombre, descripcion, dificultad}),
        })}



    return (
       
         <div>
        <h1 className="titulo">Agregar Nivel</h1>
        <form onSubmit={GuardarNivel} className="formulario">
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="descripcion..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            <input type="text" placeholder="baja-media-alta" value={dificultad} onChange={(e) => setDificultad(e.target.value)} />

            <button type="submit">Agregar Nivel</button>
        </form>
         </div>
    
    );

}

export default NivelPost;