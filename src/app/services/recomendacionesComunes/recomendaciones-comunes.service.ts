import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesComunesService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:54474/api/RecomendacionComun';
  }

  getData(): Observable<DatosMaestrosDTO[]> {
    return this.http.get<DatosMaestrosDTO[]>(this.url);
  }

  createMedicamento(recomendacionesComunes: DatosMaestrosDTO) {
    return this.http.post(this.url, recomendacionesComunes);
  }
}
