import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import NavBar from "./NavBar";


function NivelGet() {
   
    const [nivel, setNivel] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        traerdatos();
    }, []);

    const actualizarNive = (id_nivel) => {
        alert(`Actualizar nivel con ID: ${id_nivel}`);
        navigate('/actualizarNivel/' + id_nivel);
    };

    const eliminarNive= async (id) => {
        alert(`Eliminar nivel con ID: ${id}`);

        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`, {
            method: 'DELETE',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
            }
        });

        traerdatos();

    };

    const traerdatos = async () => {

        const response = await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        });
        const data = await response.json();
        setNivel(data);

    };

    return (
        
        <div>
            <NavBar/>
            <h1>Tabla</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>descripcion</th>
                        <th>dificultad</th>
                    </tr>
                </thead>
                <tbody>
                    {nivel.map((nive) => (
                        <tr key={nive.id_nivel}>
                            <td>{nive.id_nivel}</td>
                            <td>{nive.nombre}</td> 
                            <td>{nive.descripcion}</td>
                            <td>{nive.dificultad}</td>
                           
                            <td>
                                <button onClick={() => actualizarNive(nive.id_nivel)}>actualizar</button>
                                <button onClick={() => eliminarNive(nive.id_nivel)}>eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NivelGet;