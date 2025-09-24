import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import NavBar from "./NavBar";


function EnemigoGet() {
   
    const [Enemigo, setEnemigo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        traerdatos();
    }, []);

    const actualizarEne = (id_enemigo) => {
        alert(`Actualizar enemigo con ID: ${id_enemigo}`);
        navigate('/actualizar/' + id_enemigo);
    };

    const eliminarEnemigo = async (id) => {
        alert(`Eliminar enemigo con ID: ${id}`);

        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`, {
            method: 'DELETE',
            headers: {
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
            }
        });

        traerdatos();

    };

    const traerdatos = async () => {

        const response = await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo", {
            headers: {
                apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998'
            }
        });
        const data = await response.json();
        setEnemigo(data);

    };

  
    return (
        <div className="content-container"> 
            <NavBar></NavBar>
            <h1>Tabla de Enemigos</h1>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>tipo</th>
                        <th>vida</th>
                        <th>ataque</th>
                        <th>Acciones</th> 
                    </tr>
                </thead>
                <tbody>
                    {Enemigo.map((enemi) => (
                        <tr key={enemi.id_enemigo}>
                            <td>{enemi.id_enemigo}</td>
                            <td>{enemi.nombre}</td>
                            <td>{enemi.tipo}</td>
                            <td>{enemi.vida}</td>
                            <td>{enemi.ataque}</td>
                            <td>
                                <div className="table-actions"> 
                                    <button onClick={() => actualizarEne(enemi.id_enemigo)}>Actualizar</button>
                                    <button className="btn-eliminar" onClick={() => eliminarEnemigo(enemi.id_enemigo)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}



export default EnemigoGet;