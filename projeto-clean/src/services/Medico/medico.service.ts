import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Medico } from 'src/app/model/medico';
import { Paciente } from 'src/app/model/paciente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) {}

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${environment.url_api}`).pipe(take(1));
  }

  adicionar(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${environment.url_api}`, medico).pipe(take(1));
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url_api}?medico_ID=${id}`).pipe(take(1));
  }





}
