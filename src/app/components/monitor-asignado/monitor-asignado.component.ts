import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MonitorAsignadoService } from 'src/app/services/monitor-asignado.service';
import { MonitorService } from 'src/app/services/monitor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-monitor-asignado',
  templateUrl: './monitor-asignado.component.html',
  styleUrls: ['./monitor-asignado.component.css']
})
export class MonitorAsignadoComponent implements OnInit {

  monitorServ:any;

  isVisible;
  isVisible2;

  monitoria:any;
  datArray = [];
  title = '';
  modal ='';
  constructor(private monitoriaService:MonitorAsignadoService, private monitorService:MonitorService) {
    this.isVisible = false
    this.isVisible2 = false;

    this.monitoria = {
      materia: '',
      monitorAsignado:'',
      fecha:'',
      salon:''
    }

   }

  ngOnInit(): void {
    this.getMonitoriasAsignada();
  }

  getMonitoriasAsignada(){
    this.monitoriaService.getMonitorias().subscribe(data => {
      this.datArray = data;
        })
  }

  deleteMonitoria(id:any){

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
        this.monitoriaService.deleteMonitoria(id).subscribe(data => {
          this.getMonitoriasAsignada();
        })
          Swal.fire(
            'Eliminado!',
            'Presione ok, para continuar',
            'success'
          )
         
       
      }
    })
    
  }

  editMonitoria(){

  }
  
  selectMonitor(){
    this.monitorService.getMonitores().subscribe(res => {
      this.monitorServ = res;
    })
  }
  openPopup(item:any){
  this.selectMonitor();
    this.monitoria = item;
    this.title = 'Editar Monitorias';
    this.modal = 'block';
    this.isVisible = true;
    this.isVisible2 = false;
  }

  updateMonitoria(data:any){
    this.isVisible2 = false;
    this.monitoriaService.updateMonitor(data).subscribe(data =>{
      this.getMonitoriasAsignada();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Actualizado con exito',
        showConfirmButton: false,
        timer: 1000
      })
    this.modal = 'none'

    })

  }
  Cancelar(){
    this.modal = 'none'
  }

  openModal(){
    this.title = 'Crear Monitorias'
    this.monitoria = {};
    this.modal = 'block';
    this.isVisible = false;
    this.isVisible2 = true;
    this.selectMonitor();


  }

  crearMonitor(monitor:any){
    this.monitoria = {};
    this.monitoriaService.addMonitorias(monitor).subscribe(data=> {
      this.getMonitoriasAsignada();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Creado con exito',
        showConfirmButton: false,
        timer: 1000
      })
      this.modal = 'none'
    })
  }
}
