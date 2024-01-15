import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PacienteService } from 'src/services/Paciente/paciente.service';
import { Paciente } from '../model/paciente';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
  styleUrls: ['./adicionar-editar.component.scss']
})
export class AdicionarEditarComponent implements OnInit {

  paciente = new Paciente();
  ExisteCadastro!: boolean;
  formPaciente: FormGroup;


  constructor(private fb: FormBuilder, private pacienteService: PacienteService, 
    private snackbar: MatSnackBar, 
    private readonly dialogRef: MatDialogRef<AdicionarEditarComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.ExisteCadastro = !data.paciente;
      this.formPaciente = this.fb.group({
        nome: [data.paciente?.nome, [Validators.required]],
        cpf: [data.paciente?.cpf, [Validators.required]],
        dtCriacao: [data.paciente?.dtCriacao, [Validators.required]],
        telefone: [data.paciente?.telefone, [Validators.required]],
        dtNascimento: [data.paciente?.dtNascimento, [Validators.required]],
        endereco: [data.paciente?.endereco, [Validators.required]],
      })



     }

  ngOnInit(): void {
  }

  adicionarPaciente() {
    let dadosPaciente = this.formPaciente.value;
    this.pacienteService.adicionar(dadosPaciente).subscribe(response => {
      this.dialogRef.close(true);
      this.snackbar.open(
				"Paciente adicionada com sucesso",
				"Fechar",
				{
					duration: 3000
				}
			)}, (error => {
      this.snackbar.open(
				"Erro ao cadastrar paciente",
				"Fechar",
				{
					duration: 3000
				}
			)
    }))
  }

  adicionarEditarPaciente() {
    this.ExisteCadastro ? this.adicionarPaciente() : this.editarPaciente();
  }

  editarPaciente(): void {
    this.montarBody();
    this.pacienteService.alterar(this.paciente).subscribe(response => {
      console.log(this.formPaciente.value);
      this.dialogRef.close(true);
      this.snackbar.open(
        "Paciente editado com sucesso",
        "Fechar",
        {
          duration: 10000
        }
      );

    }, (error) => {
      console.log(error)
      this.snackbar.open(
        "Erro ao editar paciente",
        "Fechar",
        {
          duration: 10000
        }
      );
    })
  }

  private montarBody() {
    let id = this.data?.paciente?.id;
    this.paciente = this.formPaciente.value;
    this.paciente.id = id;
  }

}
