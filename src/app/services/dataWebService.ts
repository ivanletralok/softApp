import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class DataWebService implements InMemoryDbService {
  createDb() {
    let monitores = [
      {
        id: 1,
        nombre: 'Ivan',
        apellido: 'Lasso',
        programa_academico: 'Ing Sistemas',
        semestre:'quinto semestre' ,
        cedula:1515158151,
        contacto: 'Este es un men'
    },
    {
        id: 2,
        nombre: 'Alex',
        apellido: 'Perez',
        programa_academico: 'Ing Sistemas',
        semestre:'octavo semestre' ,
        cedula:6596564,
        contacto: 'Men Dos'
    },
    {
        id: 3,
        nombre: 'Andres',
        apellido: 'Lopez',
        programa_academico: 'Ing Sistemas',
        semestre:'septimo semestre',
        cedula: 62665258,
        contacto: 'Men tres'
    },
    
    ];

    return {monitores}

/* 
    let monitorias = [
        {
          id: 1,
          materia: 'POP',
          monitorAsignado: 1,
          fecha: '20/05/2020',
          salon:'404',
      },
      {
        id: 2,
        materia: 'Algoritmo',
        monitorAsignado: 2,
        fecha: '20/05/2020',
        salon:'504',
      },
      {
        id: 3,
        materia: 'Web',
        monitorAsignado: 2,
        fecha: '20/05/2020',
        salon:'304',
      },
       
      ]; */

    }
}

  

  