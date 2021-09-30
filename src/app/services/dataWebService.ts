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



    let monitorias = [
        {
          id: 1,
          materia: 'POP',
          monitorAsignado: "Alex",
          fecha: '2021-09-08',
          salon:'404',
      },
      {
        id: 2,
        materia: 'Algoritmo',
        monitorAsignado: "Alex",
        fecha: '2021-09-08',
        salon:'504',
      },
      {
        id: 3,
        materia: 'Web',
        monitorAsignado: 'Andres',
        fecha: '2021-09-08',
        salon:'304',
      },
       
      ]; 
      return {monitores, monitorias}

    }
}

  

  