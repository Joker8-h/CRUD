import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
function ActualizarNivel() {
const {id} = useParams();
    
    const [Nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [dificultad, setDificultad] = useState("");

    useEffect(() => {
            llenardatos()
        }, [])
    
        async function llenardatos() {
            await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`, {
                method: 'GET',
                headers: {
                    "content-type": 'application/json',
                    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
                }
            }).then((response) => response.json())
                .then((data) => {
                    const dt = data
                    setNombre(dt[0].nombre)
                    setDescripcion(dt[0].descripcion)
                    setDificultad(dt[0].dificultad)
                    
                })
        }
   

    async function actualizar(e) {
        e.preventDefault();
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`
            , {
                method: 'PATCH',
                headers: {
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                   
                    nombre: Nombre,
                    descripcion: descripcion,
                    dificultad: dificultad
                    
                })
            }
        )
    }
    return (
        <div>
        <NavBar></NavBar>
            <h2>
                ACTUALIZAR NIVEL
            </h2>
            <form onSubmit={actualizar}>
                
                <input type="text" placeholder="NOMBRE" value={Nombre} onChange={(event)=>setNombre(event.target.value)} />
                <input type="text" placeholder="DESCRIPCION"value={descripcion} onChange={(event)=>setDescripcion(event.target.value)} />
                <input type="text" placeholder="DIFICULTAD" value={dificultad} onChange={(event)=>setDificultad(event.target.value)} />
             
                <button type="submit">ACTUALIZAR</button>
            </form>
        </div>
    )
}
export default ActualizarNivel;
