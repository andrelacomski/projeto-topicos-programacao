import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Swal from 'sweetalert2';
import './App.css';

export default function App() {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'nome', headerName: 'Nome' },
    { field: 'sobrenome', headerName: 'Sobrenome' },
    { field: 'age', headerName: 'Idade', type: 'number' }
  ];

  const rows = [
    { id: 1, sobrenome: 'Lacomski', nome: 'Andre', age: 22 },
    { id: 2, sobrenome: 'Ribeiro', nome: 'Michael', age: 25 },
    { id: 3, sobrenome: 'Torrecilhas', nome: 'Rebeca', age: 23 },
    { id: 4, sobrenome: 'Santos', nome: 'Cleverson', age: 26 },
    { id: 5, sobrenome: 'Oliveira', nome: 'Matheus', age: 23 },
  ];

  const openModal = () => {
    Swal.fire('Olá', 'Eu sou um modal!', 'success');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Framework React - Pesquisa Prática 2</h3>

      <div style={{ paddingLeft: 100, paddingRight: 100, marginTop: 50, marginBottom: 50 }}>
        <h4>Carousel de imagens</h4>
        <Carousel showThumbs={false} >
          <div>
            <img src="banner.jpg" height={400} />
          </div>
          <div>
            <img src="banner_01.jpg" height={400} />
          </div>
          <div>
            <img src="banner_02.jpg" height={400} />
          </div>
        </Carousel>
      </div>

      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <h4>Validação de dados de uma formulário</h4>
      </div>

      <div style={{ marginTop: 50, marginBottom: 50 }}>
        <h4>Modal/Dialog</h4>
        <button style={{ width: 200, height: 40, background: '#313131', color: '#FFFFFF', fontWeight: 600 }} onClick={openModal}>Abrir modal</button>
      </div>

      <div>
        <h4>Ordenar campos de uma tabela</h4>
        <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 100, height: 300 }}>
          <DataGrid rows={rows} columns={columns} hideFooter disableColumnMenu />
        </div>
      </div>
    </div>
  );
}