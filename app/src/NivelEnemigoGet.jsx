import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";


function NivelEnemigoGet() {
   
   const [nivelEnemigo, setNivelEnemigo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        traerdatos();
    }, []);

    const actualizarNivelEnemigo = (id) => {
        alert(`Actualizar nivel con ID: ${id}`);
        navigate('/actualizarNivelEnemigo/' + id);
    };

    const eliminarNivelEnemigo= async (id) => {
        alert(`Eliminar nivel con ID: ${id}`);

        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`, {
            method: 'DELETE',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
            }
        });

        traerdatos();

    };

    const traerdatos = async () => {

        const response = await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo", {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        });
        const data = await response.json();
        setNivelEnemigo(data);

    };

    return (
        <div>
            <h1>Tabla</h1>
            <table>
                <thead>
                    <tr>
                    
                        <th>id_nivel</th>
                        <th>id_enemigo</th>
                        <th>cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {nivelEnemigo.map((nivel) => (
                        <tr key={nivel.id}>
                            <td>{nivel.id_nivel}</td>
                            <td>{nivel.id_enemigo}</td> 
                            <td>{nivel.cantidad}</td>
                           
                           
                            <td>
                                <button onClick={() => actualizarNivelEnemigo(nivel.id)}>actualizar</button>
                                <button onClick={() => eliminarNivelEnemigo(nivel.id)}>eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NivelEnemigoGet;