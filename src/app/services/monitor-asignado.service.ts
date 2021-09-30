import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorAsignadoService {

  url = 'http://localhost:4200/api/monitorias/';

  constructor(private httpCliente:HttpClient) { }

  getMonitorias(){
    return this.httpCliente.get<any>(this.url);
  }

  deleteMonitoria(id:number){
    return this.httpCliente.delete(this.url+ id);
  }

  updateMonitor(monitor:any){
    return this.httpCliente.put(this.url, monitor);
  }

  addMonitorias(data:any){
    return this.httpCliente.post(this.url, data)
  }
}
