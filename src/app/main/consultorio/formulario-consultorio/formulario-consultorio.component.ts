import { MedicoConsultorio } from './../shared/medico-consultorio.model';
import { EOperacaoVinculo } from './../shared/EOperacaoVinculo';
import { MedicoModel } from './../../medico/shared/medico.model';
import { ConsultorioModel } from './../shared/consultorio.model';
import { IFormulario } from './../../../shared/interfaces/IFormulario';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { OperacoesFormulario } from 'src/app/shared/types/Formulario.types';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultorioHttpService } from '../shared/consultorio-http.service';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable, pipe } from 'rxjs';
import { MedicoHttpService } from '../../medico/shared/medico.service';
import { VinculoMedicoConsultorioModel } from '../shared/vinculo-medico-consultorio.model';

@Component({
  selector: 'MApp-formulario-consultorio',
  templateUrl: './formulario-consultorio.component.html',
  styleUrls: ['./formulario-consultorio.component.scss']
})
export class FormularioConsultorioComponent implements OnInit, IFormulario<ConsultorioModel> {

  form: FormGroup;
  operacao: OperacoesFormulario;
  consultorio: ConsultorioModel = new ConsultorioModel();
  medicoSelectControl: FormControl = new FormControl();
  medicos$: Observable<MedicoModel[]>;

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


  get OperacaoVinculo(): typeof EOperacaoVinculo {
    return EOperacaoVinculo;
  }

  constructor(private _activatedRoute: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private _consultorioHttpService: ConsultorioHttpService,
              private _toastrService: ToastrService,
              private _router: Router,
              private _medicoHttpService: MedicoHttpService) { }

  ngOnInit(): void {
    this.verificarETratarOperacao(this._activatedRoute.snapshot.params['id']);
    this.form = this.construirFormulario();
    this.medicos$ = this._medicoHttpService.buscarTodos();
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
            this.consultorio = entidade;
            this.form.patchValue(entidade);
          });
      return;
    }
    this.medicoSelectControl.disable();
    this.operacao = 'inserindo';
  }

  salvar(): void {
    const entidade = this.form.getRawValue() as ConsultorioModel;

    if(this.consultorio){
      entidade.id = this.consultorio.id;
      this._consultorioHttpService.editar(entidade).pipe(take(1)).subscribe(() => this._OnSave('Consultório editado com sucesso!'));
    } else {
      this._consultorioHttpService.criar(entidade).pipe(take(1)).subscribe(() => this._OnSave('Consultório salvo com sucesso!'));
    }
  }

  realizarOperacaoVinculo(operacao: EOperacaoVinculo, medicoId?: number): void {
      const viewModel: VinculoMedicoConsultorioModel = {
        operacao: operacao,
        consultorioId: this.consultorio.id,
        medicoId: parseInt(this.medicoSelectControl.value, 10) || medicoId
      };

      this
        ._consultorioHttpService
        .realizarOperacaoVinculo(viewModel)
        .pipe(take(1))
        .subscribe(consultorio => {
            this._toastrService.success('Médico (des)vinculado com sucesso!', '', {timeOut: 3000});
            this.consultorio = consultorio;
            this.form.patchValue(consultorio);
        }, (error) => this._toastrService.error(error.error, 'Erro', {timeOut: 3000}));
  }


  private _OnSave(mensagem: string): void {
    this._toastrService.success(mensagem, 'Sucesso', {timeOut: 3000});
    this._router.navigate(['consultorios']);
  }



}
