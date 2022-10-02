import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatosMaestrosDTO } from 'app/models/DatosMaestrosDTO';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedicamentoService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:54474/api/MaestroDeMedicamentos';
  }

  getData(): Observable<DatosMaestrosDTO[]> {
    return this.http.get<DatosMaestrosDTO[]>(this.url);
  }

  createMedicamento(medicamento: DatosMaestrosDTO) {
    return this.http.post(this.url, medicamento);
  }

  getDataId(id: number){
    return this.http.get<DatosMaestrosDTO>(`${this.url}/${id}`);
  }
}
