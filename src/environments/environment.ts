// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {

    usuarioEndPoint: 'https://auth.sev.gob.mx/basic/centro-trabajo',
    centroTrabajo: 'https://padres-familia-msvc.sev.gob.mx/api/CT',
    IdAsociacion:'https://padres-familia-msvc.sev.gob.mx/api/idAsociacion/',
    CargosMesaDebate:'https://padres-familia-msvc.sev.gob.mx/api/CargosMesa/',
    CentroDeTrabajo: 'https://padres-familia-msvc.sev.gob.mx/api/CT',
    DatosAsamblea:'https://padres-familia-msvc.sev.gob.mx/api/Asociacion/',
    DatosCambio: 'https://padres-familia-msvc.sev.gob.mx/api/Cambios/',
    integranteCambio:'https://padres-familia-msvc.sev.gob.mx/api/IntegrantesCambio/',
    HistorialCambiosExtraordinarios:'https://padres-familia-msvc.sev.gob.mx/api/HistorialGeneral/',
    idendpoint: 'https://padres-familia-msvc.sev.gob.mx/api/idAsociacion/',
    IntegranteEndPoint: 'https://padres-familia-msvc.sev.gob.mx/api/Mesa/',
    EliminarEndPoint: 'https://padres-familia-msvc.sev.gob.mx/api/EliminarMiembro/',
    AgregarIntegranteEndPoint: 'https://padres-familia-msvc.sev.gob.mx/api/IntegrantesMesa/',
    TutoresEndPoint:'https://tutores-msvc.sev.gob.mx/api/Tutores/',
    TutoresActaEndPoint: 'https://tutores-msvc.sev.gob.mx/api/TutoresActa/',
    Periodos:'https://padres-familia-msvc.sev.gob.mx/api/Periodo/'
  },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
