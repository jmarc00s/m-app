import { MedicoModel } from './../../medico/shared/medico.model';
import { ConsultorioModel } from './../shared/consultorio.model';
import { IFormulario } from './../../../shared/interfaces/IFormulario';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OperacoesFormulario } from 'src/app/shared/types/Formulario.types';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultorioHttpService } from '../shared/consultorio-http.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'MApp-formulario-consultorio',
  templateUrl: './formulario-consultorio.component.html',
  styleUrls: ['./formulario-consultorio.component.scss']
})
export class FormularioConsultorioComponent implements OnInit, IFormulario<ConsultorioModel> {

  form: FormGroup;
  operacao: OperacoesFormulario;
  private _consultorio: ConsultorioModel;

  get titulo(): string {
    return this.operacao === 'inserindo' ? 'Inserindo consultório' : 'Editando consultório'
  }

  get formularioInvalido(): boolean{
    return this.form.invalid;
  }

  get telefoneControl(): AbstractControl {
    return this.form.get('telefone');
  }

  get enderecoControl(): AbstractControl{
    return this.form.get('endereco');
  }

  constructor(private _activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _consultorioHttpService: ConsultorioHttpService,
              private _toastrService: ToastrService,
              private _router: Router) { }

  ngOnInit(): void {
    this.verificarETratarOperacao(this._activatedRoute.snapshot.params['id']);
    this.form = this.construirFormulario();
  }


  construirFormulario(): FormGroup {
    return this._formBuilder.group({
      nome: [null,Validators.maxLength(100)],
      telefone: [null, [Validators.required, Validators.maxLength(20)]],
      endereco: [null, [Validators.required, Validators.maxLength(200)]]
    })
  }

  verificarETratarOperacao(id: number): void {
    if(id){
      this.operacao = 'editando';
      this._consultorioHttpService.buscar(id)
          .pipe(take(1))
          .subscribe((entidade: ConsultorioModel) => {
            this._consultorio = entidade;
            this.form.patchValue(entidade);
          });
      return;
    }
    this.operacao = 'inserindo';
  }

  salvar(): void {
    const entidade = this.form.getRawValue() as ConsultorioModel;

    if(this._consultorio){
      entidade.id = this._consultorio.id;
      this._consultorioHttpService.editar(entidade).pipe(take(1)).subscribe(() => this._OnSave('Consultório editado com sucesso!'));
    } else {
      this._consultorioHttpService.criar(entidade).pipe(take(1)).subscribe(() => this._OnSave('Consultório salvo com sucesso!'));
    }
  }

  private _OnSave(mensagem: string): void {
    this._toastrService.success(mensagem, 'Sucesso', {timeOut: 3000});
    this._router.navigate(['consultorios']);
  }

}
