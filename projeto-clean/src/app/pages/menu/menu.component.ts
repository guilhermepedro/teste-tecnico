import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AdicionarEditarComponent } from 'src/app/modais/adicionar-editar.component';
import { Medico } from 'src/app/model/medico';
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

  displayedColumnsMedico: string[] = [
    'nome', 
    'numeroCRM', 
    'especializacao',  
    'endereco',
    'pacientes'
  ];

  dataSource = new MatTableDataSource<Paciente>();

  dataSourceMedico = new MatTableDataSource<Medico>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private dialog: MatDialog, private pacienteService: PacienteService, 
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarPaciente();
  }

  abrirAdicionarEditar() {
		const dialogRef = this.dialog.open(AdicionarEditarComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.listarPaciente();
    })

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

