import React, { useState } from "react";
import NavBar from "./NavBar";


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
        <div className="content-container">
            <NavBar></NavBar>
            <h1>Crear Nuevo Enemigo</h1>
            <form className="styled-form" onSubmit={GuardarEnemigo}>
                
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Nombre del enemigo" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="tipo">Tipo</label>
                    <input id="tipo" type="text" placeholder="Tipo (ej: Fuego, Agua)" value={tipo} onChange={(e) => setTipo(e.target.value)} required/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="vida">Vida</label>
                    <input id="vida" type="number" placeholder="Puntos de vida" value={vida} onChange={(e) => setVida(e.target.value)} required/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="ataque">Ataque</label>
                    <input id="ataque" type="number" placeholder="Puntos de ataque" value={ataque} onChange={(e) => setAtaque(e.target.value)} required/>
                </div>

                <div className="form-actions">
                    <button type="submit">Guardar Enemigo</button>
                </div>
            </form>
        </div>
    );

}

export default EnemigoPost;