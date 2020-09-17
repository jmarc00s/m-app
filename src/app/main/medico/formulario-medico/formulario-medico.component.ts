import { IFormulario } from './../../../shared/interfaces/IFormulario';
import { MedicoHttpService } from './../shared/medico.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperacoesFormulario } from '../../../shared/types/Formulario.types'
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators'
import { MedicoModel } from '../shared/medico.model';
import { ToastrService } from 'ngx-toastr';



@Component({
  templateUrl: './formulario-medico.component.html',
  styleUrls: ['./formulario-medico.component.scss']
})
export class FormularioMedicoComponent implements OnInit, IFormulario<MedicoModel> {

  form: FormGroup;
  operacao: OperacoesFormulario;
  private _medico: MedicoModel;


  get nomeControl(): AbstractControl {
    return this.form.get('nome');
  }

  get crmControl(): AbstractControl {
    return this.form.get('crm');
  }

  get telefoneControl(): AbstractControl {
    return this.form.get('telefone');
  }


  get titulo(): string {
    return this.operacao === 'editando' ? 'Editando médico': 'Inserindo médico';
  }

  constructor(private _activatedRoute: ActivatedRoute,
              private _medicoHttpService: MedicoHttpService,
              private _formBuilder: FormBuilder,
              private _toasterService: ToastrService,
              private _router: Router){

  }

  get formularioInvalido(): boolean {
    return this.form.invalid;
  }

  ngOnInit(): void {
    this.verificarETratarOperacao(this._activatedRoute.snapshot.params['id']);
    this.form = this.construirFormulario();
  }

  salvar(): void {
    const entidade = this.form.getRawValue() as MedicoModel;
    if(this._medico){
      entidade.id = this._medico.id;
      this._medicoHttpService.editar(entidade).pipe(take(1)).subscribe(() => this._onSave('Médico editado com sucesso!'));
    } else {
      this._medicoHttpService.criar(entidade).pipe(take(1)).subscribe(() => this._onSave('Médico salvo com sucesso!'));
    }

  }


  construirFormulario(): FormGroup {
    return this._formBuilder.group({
      crm: [null, [Validators.maxLength(10), Validators.required]],
      nome: [null, [Validators.maxLength(100), Validators.required]],
      telefone: [null, [Validators.maxLength(20)]],
      valorConsulta: [0]
    });

  }

  verificarETratarOperacao(id: number): void {
    if(id){
      this.operacao = 'editando';
      this._medicoHttpService.buscar(id).pipe(take(1)).subscribe(data => {
        this.form.patchValue(data);
        this._medico = data as MedicoModel;
      });
      return;
    }

    this.operacao = 'inserindo';
  }

  private _onSave(mensagem: string): void {

    this._toasterService.success(mensagem, '', {
      timeOut: 3000
    });

    this._router.navigate(['medicos']);
  }


}
