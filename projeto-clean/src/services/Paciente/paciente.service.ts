import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Paciente } from 'src/app/model/paciente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) {}

  listar(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${environment.url_api}`).pipe(take(1));
  }

  adicionar(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${environment.url_api}`, paciente).pipe(take(1));
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.url_api}?paciente_ID=${id}`);
  }
  
}
