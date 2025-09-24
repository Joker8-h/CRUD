import React, { useState } from "react";


 function EnemigoPost() {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [vida, setVida] = useState("");
    const [ataque, setAtaque] = useState("");
 async function GuardarEnemigo(e) {
        e.preventDefault();
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo", {
            method: "POST",
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({ nombre, tipo, vida, ataque }),
        })}



    return (
       
         <div>
        <h1 className="titulo">Agregar Enemigo</h1>
        <form onSubmit={GuardarEnemigo} className="formulario">
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <input type="text" placeholder="Tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
            <input type="number" placeholder="Vida" value={vida} onChange={(e) => setVida(e.target.value)} />
            <input type="number" placeholder="Ataque" value={ataque} onChange={(e) => setAtaque(e.target.value)} />
            <button type="submit">Agregar Enemigo</button>
        </form>
         </div>
    
    );

}

export default EnemigoPost;