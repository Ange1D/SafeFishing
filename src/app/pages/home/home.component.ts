import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/Data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayDetail:boolean=false;
  selected:any;
  
  db: any = (data as any).default;
  zonas:any[];
  estados:any[];
  details:any[];

  selectedEstado:any;
  selectedZona:any;
  selectedDetail:any;

  constructor() { }

  ngOnInit(): void {
    this.zonas = this.db.Zonas;
    this.estados = this.db.Estados;
    this.details = this.db.Detalle;    
  }

  displayModal( id ) {    
    this.selected = id;
    this.selectedEstado = this.estados.find( e => e.Id == id);

    if ( !this.selectedEstado)
      return;

    this.selectedZona = this.zonas.find( z => z.Id == this.selectedEstado.Zona);

    this.selectedDetail = this.details.filter( z => z.Zona == this.selectedZona.Id );
     
    if (this.selectedDetail.length > 0) {
      this.selectedDetail.forEach(detail => {
        detail.Flag = this.obtenerSemaforo(detail);
      });      
    }
    

    this.displayDetail = true;
    
  }


  strToDate(fecha:string) : Date  {
    try{
      let mes = fecha.substring(0,2);      
      let dia = fecha.substring(3,5);      
      let anio = fecha.substring(6,10);
      
      let newDate = new Date( Number(anio), Number(mes)-1, Number(dia) );      
      return newDate;
    } catch {
      return new Date(fecha);
    }
  }

  obtenerSemaforo( item ) : string {
    let today = new Date();    
    let inicio = this.strToDate(this.selectedDetail[0].Inicio);
    let fin = this.strToDate(this.selectedDetail[0].Fin);   
    let ok = (today >=  inicio  && today  <= fin);        
    if (ok)
    return 'redFlag';
    else
    return 'greenFlag';
  }



}
