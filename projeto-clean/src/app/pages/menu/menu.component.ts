import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  displayedColumns: string[] = [
    'nome', 
    'cpf', 
    'dtCriacao', 
    'telefone', 
    'dtNascimento', 
    'endereco',
    'icone'];

  dataSource = new MatTableDataSource<Paciente>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  nome: string, 
  cpf: number, 
  dtCriacao: string,
  telefone: string,
  dtNascimento: string, 
  endereco: string
}

const ELEMENT_DATA: Paciente[] = [
  {nome: 'Hydrogen', cpf: 10079, dtCriacao: '10/10/10', telefone: '1522222', dtNascimento: '522222', endereco: 'sdadasd'},
];
