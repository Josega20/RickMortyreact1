import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';

const MiApi = () => {
  const [busqueda, setBusqueda] = useState("");
  const [caracters, setCaracters] = useState([]);
  const [orden, setOrden] = useState("");


  const consultApi = async () => {
    const URL = "https://rickandmortyapi.com/api/character";
    const datos = await fetch(URL);
    const data = await datos.json();
    setCaracters(data.results);
  };

  useEffect(() => {
    consultApi();
  }, []);

  let results = [];
  if (!busqueda) {
    results = caracters;
  } else {
    results = caracters.filter((dato) =>
      dato.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  const handleOrdenChange = (e) => {
    const selectedOrden = e.target.value;
    setOrden(selectedOrden);
    if (selectedOrden === "1") {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOrden === "2") {
      results.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  return (
    <div>
      <Form.Select id="orden" aria-label="Default select example" value={orden} onChange={handleOrdenChange}>
        <option value="">Ordenar por</option>
        <option value="1">Nombre (A-Z)</option>
        <option value="2">Nombre (Z-A)</option>
      </Form.Select>
      <div className="buscador">
        <input
          id="input1"
          type="text"
          className="form-control"
          placeholder="Buscar Personaje"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Status</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, i) => (
            <tr key={i}>
              <td>{result.id}</td>
              <td>{result.name}</td>
              <td>{result.status}</td>
              <td>{result.species}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MiApi;
