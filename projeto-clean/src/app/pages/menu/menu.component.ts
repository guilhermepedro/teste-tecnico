import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { AdicionarEditarMedicoComponent } from 'src/app/modais/adicionar-editar-medico/adicionar-editar-medico.component';
import { AdicionarEditarComponent } from 'src/app/modais/adicionar-editar.component';
import { Medico } from 'src/app/model/medico';
import { Paciente } from 'src/app/model/paciente';
import { MedicoService } from 'src/services/Medico/medico.service';
import { PacienteService } from 'src/services/Paciente/paciente.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listaPaciente: Paciente[] = [];

  listaMedico: Medico[] = [];

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
    'icone'
  ];

  dataSource = new MatTableDataSource<Paciente>();

  dataSourceMedico = new MatTableDataSource<Medico>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private dialog: MatDialog, private pacienteService: PacienteService, 
    private medicoService: MedicoService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.listarPaciente();
    this.listarMedico();
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

listarMedico() {
  this.medicoService.listar().subscribe((response) => {
    this.listaMedico = response;
    this.dataSourceMedico = new MatTableDataSource<Medico>(this.listaMedico);
    this.dataSource.paginator = this.paginator;

  }, (error) => {console.log(error)})
}

deletarMedico(medico: Medico): void {
  this.medicoService.deletar(medico.id).subscribe(
      () => {
          this.listarMedico();
          this.snackbar.open(
            'Médico deletada com sucesso', 'Fechar', {
              duration: 3000
          });
      },
      (error) => {
          this.snackbar.open(
              'Erro ao deletar médico',
              'Tenta novamente',
              {
                  duration: 3000
              }
          );
      }
  );
}

abrirAdicionarEditarMedico(medico?: Medico) {

  const dialogRef = this.dialog.open(AdicionarEditarMedicoComponent, {
      data: {
          medico: medico
      }
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.listarMedico();
      }
  });
}

abrirAdicionarEditarPaciente(paciente?: Paciente) {

  const dialogRef = this.dialog.open(AdicionarEditarComponent, {
      data: {
          paciente: paciente
      }
  });

  dialogRef.afterClosed().subscribe(result => {
      if (result) {
          this.listarPaciente();
      }
  });
}







}

