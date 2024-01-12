import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medico } from 'src/app/model/medico';
import { MedicoService } from 'src/services/Medico/medico.service';

@Component({
  selector: 'app-adicionar-editar-medico',
  templateUrl: './adicionar-editar-medico.component.html',
  styleUrls: ['./adicionar-editar-medico.component.scss']
})
export class AdicionarEditarMedicoComponent implements OnInit {

  medico = new Medico();
  ExisteCadastro!: boolean;
  formMedico: FormGroup;

  constructor(private fb: FormBuilder, private medicoService: MedicoService, 
    private snackbar: MatSnackBar,
    private readonly dialogRef: MatDialogRef<AdicionarEditarMedicoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.ExisteCadastro = !data.medico;
      this.formMedico = this.fb.group({
        nome: [data.medico?.nome, [Validators.required]],
        numeroCRM: [data.medico?.numeroCRM, [Validators.required] ],
        especializacao: [data.medico?.especializacao, [Validators.required]],
        endereco: [data.medico?.endereco, [Validators.required]],
        
      })


    }

    ngOnInit(): void {
    }

    adicionarMedico() {
      let dadosMedico = this.formMedico.value;
      this.medicoService.adicionar(dadosMedico).subscribe(response => {
        this.dialogRef.close();
        this.snackbar.open(
          "Médico adicionada com sucesso",
          "Fechar",
          {
            duration: 3000
          }
        )}, (error => {
        this.snackbar.open(
          "Erro ao cadastrar médico",
          "Fechar",
          {
            duration: 3000
          }
        )
      }))
    }

    adicionarEditarMedico() {
      this.ExisteCadastro ? this.adicionarMedico() : this.editarMedico();
    }

    editarMedico(): void {
      this.montarBody();
      this.medicoService.alterar(this.medico).subscribe(response => {
        console.log(this.formMedico.value);
        this.dialogRef.close(true);
        this.snackbar.open(
          "Médico editado com sucesso",
          "Fechar",
          {
            duration: 10000
          }
        );
  
      }, (error) => {
        console.log(error)
        this.snackbar.open(
          "Erro ao editar médico",
          "Fechar",
          {
            duration: 10000
          }
        );
      })
    }

    private montarBody() {
      let id = this.data?.medico?.id;
      this.medico = this.formMedico.value;
      this.medico.id = id;
    }


}
