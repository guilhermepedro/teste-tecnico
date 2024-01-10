import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PacienteService } from 'src/services/Paciente/paciente.service';

@Component({
  selector: 'app-adicionar-editar',
  templateUrl: './adicionar-editar.component.html',
  styleUrls: ['./adicionar-editar.component.scss']
})
export class AdicionarEditarComponent implements OnInit {

  form = this.fb.group({
    nome: [''],
    cpf: [''],
    dtCriacao: [''],
    telefone: [''],
    dtNascimento: [''],
    endereco: [''],
  })

  constructor(private fb: FormBuilder, private pacienteService: PacienteService, 
    private snackbar: MatSnackBar, private readonly dialogRef: MatDialogRef<AdicionarEditarComponent>,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  adicionarPaciente() {
    let dadosPaciente = this.form.value;
    this.pacienteService.adicionar(dadosPaciente).subscribe(response => {
      this.dialogRef.close();
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

}
