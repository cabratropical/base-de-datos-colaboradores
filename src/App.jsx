
import React, { useState } from 'react';
import Listado from './assets/Componentes/Listado';
import Formulario from './assets/Componentes/Formulario';
import Buscador from './assets/Componentes/Buscador';
import Alert from './assets/Componentes/Alert';
import { BaseColaboradores } from './assets/BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState(null);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, { id: (colaboradores.length + 1).toString(), ...nuevoColaborador }]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  };

  const buscarColaboradores = (busqueda) => {
    const resultadoBusqueda = BaseColaboradores.filter(colaborador => {
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase())
      );
    });
    setColaboradores(resultadoBusqueda);
  };

  const mostrarAlerta = (tipo, mensaje) => {
    setAlerta({ tipo, mensaje });
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  return (
    <div className="container mt-5">
      {alerta && <Alert tipo={alerta.tipo} mensaje={alerta.mensaje} />}
      <Buscador buscarColaboradores={buscarColaboradores} />
      <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
      <Formulario agregarColaborador={agregarColaborador} mostrarAlerta={mostrarAlerta} />
    </div>
  );
};

export default App;