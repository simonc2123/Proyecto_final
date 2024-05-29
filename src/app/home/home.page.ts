import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudService } from '../services/crud.service'; // Importa CrudService

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  carril1Alumnos$: Observable<any[]> = new Observable<any[]>();
  carril2Alumnos$: Observable<any[]> = new Observable<any[]>();
  carril3Alumnos$: Observable<any[]> = new Observable<any[]>();
  
  constructor(private crudService: CrudService) {} // Inyecta CrudService

  ngOnInit() {
    // Consulta a través del servicio y filtra los alumnos por carril
    this.carril1Alumnos$ = this.crudService.getAlumnosPorCarril('1');
    this.carril2Alumnos$ = this.crudService.getAlumnosPorCarril('2');
    this.carril3Alumnos$ = this.crudService.getAlumnosPorCarril('3');
  }

  getColor(seccion: string): string {
    switch (seccion) {
      case 'Pre-escolar':
        return 'yellow';
      case 'Primaria':
        return 'red';
      case 'Bachillerato':
        return 'green';
      default:
        return 'white'; // Color por defecto si la sección no coincide
    }
  }
}
