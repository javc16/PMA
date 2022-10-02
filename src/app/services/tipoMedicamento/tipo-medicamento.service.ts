import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoMedicamentoService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:54474/api/MaestroDeTipoDeMedicamento';
  }

  getData(): Observable<DatosMaestrosDTO[]> {
    return this.http.get<DatosMaestrosDTO[]>(this.url);
  }

  createMedicamento(tipoMedicamento: DatosMaestrosDTO) {
    return this.http.post(this.url, tipoMedicamento);
  }

  getDataId(id: number){
    return this.http.get<DatosMaestrosDTO>(`${this.url}/${id}`);
  }
}
