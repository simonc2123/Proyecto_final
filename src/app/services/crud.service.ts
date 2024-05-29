import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  // Método para obtener todos los alumnos
  getAlumnos(): Observable<any[]> {
    return this.firestore.collection('alumnos').valueChanges();
  }

  // Método para obtener alumnos por carril
  getAlumnosPorCarril(carril: string): Observable<any[]> {
    return this.firestore
      .collection('alumnos', (ref) => ref.where('carril', '==', carril))
      .valueChanges();
  }
}
