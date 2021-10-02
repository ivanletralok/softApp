import { Component, OnInit } from '@angular/core';

import { MonitorService } from 'src/app/services/monitor.service'; 
import Swal from 'sweetalert2'

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.component.html',
  styleUrls: ['./monitores.component.css']
})
export class MonitoresComponent implements OnInit {
  title = '';
  isVisible = true;
  isVisible2 = true;
  
  displayStyle = "none";

  modalToClose: any;
  boopstrap: any;


  dataInf = [];
  monitor:any;
  constructor(private monitores:MonitorService, private modalService: NgbModal ) {
    this.displayStyle = ''
    this.monitor = {
      nombre: '',
      apellido: '',
      programa_academico:'',
      semestre:'',
      cedula:'',
      contacto:''
    }
    
   }
   


  ngOnInit(): void {
    this.getMonitore();
}

ngAfterViewInit() {
  this.boopstrap = (<any>window).bootstrap;
  console.log("Inicio")
  const objModal = document.getElementById("modalToCLose");
  this.modalToClose = new this.boopstrap.Modal(objModal);
}

getMonitore(){
  this.monitores.getMonitores().subscribe(data => {
    this.dataInf = data;
  })
}

delete(id: number){
  Swal.fire({
    title: 'Esta Seguro?',
    text: "No puedes revertir esta opcion",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirmar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.monitores.deleteMonitor(id).subscribe(data =>{
        this.getMonitore();
        Swal.fire(
          'Eliminado!',
          'Presione ok, para continuar',
          'success'
        )
       })
     
    }
  })
   

}

openPopup(data:any){
  this.title = 'Actualizar Monitor';
  this.modalToClose.show();

  this.monitor = data;
  this.isVisible = true;

  this.isVisible2 = false;

}

UpdateMonitor(){
  this.monitores.updateMonitor(this.monitor).subscribe(data => {
    this.getMonitore();
    Swal.fire(
      'Actualizado con exito!',
      '',
      'success'
    )
    this.modalToClose.hide();
  }) 
}

Cancelar(){
  this.getMonitore()
  console.log("jose no vale monda");
  console.log(this.modalService.hasOpenModals())
  if (this.modalToClose) this.modalToClose.hide();
  //this.displayStyle = 'none'

}

openModal(){
  this.title = 'Crear Monitor';
  this.monitor = { nombre: '' };
  this.displayStyle = 'block';
  this.isVisible2 = true;
  this.isVisible = false;
  
}

crearMonitor(data:any){
    this.monitor = data;
    this.monitores.createMonitor(data).subscribe(res => {
      this.getMonitore();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Creado con exito',
        showConfirmButton: false,
        timer: 1000
      })

      this.displayStyle = 'none'
  
    })
 
}

}

