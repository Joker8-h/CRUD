import { useState } from "react";
import { useParams } from "react-router-dom";
function ActualizarNivelEnemigo() {
const {id} = useParams();
    
    const [id_enemigo, setId_Enemigo] = useState("");
    const [id_nivel, setId_nivel] = useState("");
    const [cantidad, setCantidad] = useState("");
   

    async function actualizar(e) {
        e.preventDefault();
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`
            , {
                method: 'PATCH',
                headers: {
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                   
                    id_enemigo: id_enemigo,
                    id_nivel: id_nivel,
                    cantidad: cantidad
                    
                })
            }
        )
    }
    return (
        <div>
            <h2>
                ACTUALIZAR NIVEL
            </h2>
            <form onSubmit={actualizar}>
                
                <input type="text" placeholder="ID-ENEMIGO" onChange={(event)=>setId_Enemigo(event.target.value)} />
                <input type="text" placeholder="ID-NIVEL" onChange={(event)=>setId_nivel(event.target.value)} />
                <input type="text" placeholder="CANTIDAD" onChange={(event)=>setCantidad(event.target.value)} />
             
                <button type="submit">ACTUALIZAR</button>
            </form>
        </div>
    )
}
export default ActualizarNivelEnemigo;
