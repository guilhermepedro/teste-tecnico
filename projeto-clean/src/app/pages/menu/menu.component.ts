import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from 'src/app/model/paciente';
import { PacienteService } from 'src/services/Paciente/paciente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listaPaciente: Paciente[] = [];

  displayedColumns: string[] = [
    'nome', 
    'cpf', 
    'dtCriacao', 
    'telefone', 
    'dtNascimento', 
    'endereco',
    'icone'
  ];

  dataSource = new MatTableDataSource<Paciente>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private pacienteService: PacienteService, 
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarPaciente();
  }

  listarPaciente() {
    this.pacienteService.listar().subscribe((response) => {
      this.listaPaciente = response;
      this.dataSource = new MatTableDataSource<Paciente>(this.listaPaciente);
      this.dataSource.paginator = this.paginator;

    }, (error) => {console.log(error)})
  }

  deletarPaciente(paciente: Paciente): void {
    this.pacienteService.deletar(paciente.id).subscribe(
        () => {
            this.listarPaciente();
            this.snackbar.open(
              'Paciente deletada com sucesso', 'Fechar', {
                duration: 3000
            });
        },
        (error) => {
            this.snackbar.open(
                'Erro ao deletar paciente',
                'Tenta novamente',
                {
                    duration: 3000
                }
            );
        }
    );
}

}

