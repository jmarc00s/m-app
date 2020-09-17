export interface IListagem<T>{
  listaEntidades: T[];
  buscarDadosResolver(): T[];
  removerEntidade(entidade: T): void;
  removerEntidadeDaLista(entidade: T): void;
  adicionar(): void;
}
