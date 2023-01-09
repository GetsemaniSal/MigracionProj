interface PeriodoCapturaResponse {
    FechaCierre?: String;
    FechaExtenporaneaCierre?: String;
    FechaExtemporaneaInicio?: String;
    FechaInicio: String;
}

interface DatosCentroTrabajoResponse {
    idAsociacionCT: string;
    CCT: String;
    CP: String;
    calle: String;
    Colonia: String;
    Localidad: String;
    Municipio: String;
    Nombre: String;
    Numero:String;
    Sector: String;
    Telefono: String;
    TotalPadres: String;
    Turno: String;
    Zona: String;
    Nivel: String;

}
interface CargoIntegrante {
    Puesto: String;
    TipoMesa: String;
    Integrante?: IntegrantesMesa;
}

interface MesaCargosContenedor {
    Debate:Array<CargoIntegrante>;
    Directiva: Array<CargoIntegrante>;
}

interface IntegrantesMesa {
    id: String;
    CURP: String;
    TipoMesa: String;
    Puesto: String;
    Ciclo: String;
    Tutor: TutorRegistrado;
    ultimo:Function;
}
interface TutorRegistrado {
    id: Number;
    idCT: Number;
    Domicilio: String;
    ApellidoMaterno: String;
    Localidad: String;
    Telefono: String;
    Genero: String;
    Colonia: String;
    CURP: String;
    Municipio: String;
    ApellidoPaterno: String;
    Nombre: String;
    Correo: String;
    Tutor?: TutorRegistrado;
}
interface Tutor1{ 
    ApellidoMaterno: String;
    ApellidoPaterno: String;
    CURP: String; 
    Colonia: String;
    Domicilio: String;
    Genero: String;
    Localidad: String;
    Municipio: String;
    Nombre: String;
    Telefono: String;
}

interface idAsosiacion {
    idsociacionct: String;
}
interface IntegranteMesa2 {
    idAsociacion:String;
    Tutor:String;
    TipoMesa:String;
    Cargo: String;
    Ciclo: String;
}

interface HistorialCambiosExtraREsponse {
    HistorialCambios: String;
    FechaAsamblea: String;
    HoraInicioAsamblea: String;
    HoraTerminoASamblea: String;
    TutoresAsistentes: String;
    Quorum: String;
    VotosFavor: String;
    VotosCOntra: String;
    TutorSAle: String;
    Puesto: String;
    MotivoSalida:String;
    TutorEntra: String;
    FechaREgistroElectronico: String;
}
interface HistorialCAmbiosGeneral {
    HistorialCambios: String;
    FechaAswamblea: String;
    HoraInicioAsamblea: String;
    HoraTerminoAsamblea: String;

    FechaRegistroElectronico: String;
}

interface Asistentes {
    Tutor1: String;
    Tutor2: String;
    Tutor3: String;
    Tutor4: String;
    Tutor5: String;
    Tutor6: String;
    Tutor7: String;
    Tutor8: String;
}
interface IdDescripcionElement { 
    id: String;
    descripcion: String;
}
interface UbicacionElement {
    domicilio: String;
    entrecalle: String;
    ycalle: String;
    colonia: String;
    cp: String;
}
interface InstanciaElement {
    turno:  IdDescripcionElement;
    nivel: IdDescripcionElement,
}
interface AutenticadoElement {
    valdiado: boolean; 
    metodo: String;
    valido: boolean;
    token: String;
}
interface LoginResponseElement{
    clave: String;
    cct: String;
    nombre: String;
    zona: IdDescripcionElement,
    ubicacion: UbicacionElement,
    municipio: IdDescripcionElement;
    localidad: IdDescripcionElement;
    sostenimiento: String;
    sector: String;
    telefono: String;
    region: IdDescripcionElement;
    delegacion: IdDescripcionElement;
    director: String;
    instancia: Array<InstanciaElement>;
    autenticado: AutenticadoElement;
    supervisor: string;
    cliente: String;
}
interface CTABuscarElement {
    CCT: String;
    Turno: String;
    Nivel?: String;
}

    

