export interface Cargo {
    codcargo: number;
    nombrecargo: string;
  }

export interface Colaborador{
    codcolaborador: number,
    nombrecol: string,
    apellidocol: string,
    telefonocol: string,
    correocol:string,
    dnicol: string,
    estado:boolean,
    cargo: Cargo

}