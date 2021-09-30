import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {

  url = 'http://localhost:4200/api/monitores';
  constructor(private httpCleinte:HttpClient) { }

  getMonitores(){
    return this.httpCleinte.get<any>(this.url);
  }

  getMonitor(){
    return this.httpCleinte.get(this.url+'/1').subscribe(data=>{console.log(data)})
  }

  deleteMonitor(id:number){
    console.log(id)

    return this.httpCleinte.delete(this.url+ '/' +id);
  }

  updateMonitor(monitor:any){
    return this.httpCleinte.put(this.url, monitor);
  }


}
