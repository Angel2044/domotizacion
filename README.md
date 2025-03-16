# Domotización

## Descripción General

### Vista de configuración

- Configuración de escenarios: Se tratara de aquellas configuraciones de acciones o conjunto de acciones en un momento del día.
- Panel de monitorización: Sera un panel desde el que podre observar el consumo energético de la casa, para detectar así posibles incidencias.

### Vista dispositivos eléctricos

- Tener de una forma nominada e identificativa los elementos eléctricos, de tal forma que por ejemplo si quiero apagar o encender algo desde fuera de casa, ejemplo el horno para tener la comida lista cuando vaya a llegar o casi lista.
- Acceso al panel

### Vista Home (Default)

- Panel con parámetros generales: Temperatura media de la casa, estado en el que estan las persianas, listado de elementos eléctricos funcionando..

### Vista Espacios

- Configuración para cada habitacion de forma individual: Esta opcion permitira por ejemplo poner x temperatura mientras la casa este en y, levantar las persianas en distinta hora...

  > 💡 Botón true/false para aplicar la configuración general de la casa o no.

### Integración con Google calendar

- Quiero llegar a conseguir que la casa con ayuda de IA se gestione sola en el sentido de que si yo me voy de viaje gracias a la integracion y a las configuraciones que tiene. Encuentre la forma de ser eficiente, es decir si me voy 5 dias de viaje los 3 primeros no interesa que la calefacción funcione pero si baja de x temperatura si para que no enfrié de mas y luego le cueste mas..

## Estructura de datos

### Para dispositivos electrónicos

```json
{
    "device_id": "123124",
    "name": "servidor",
    "type": "primario | secundario",
    "power": true / false,
    "location": "habitacionX",
    "energy-consuption": {
    	"current": 70,
    	"total": 1000
	},
	"connectivity":{
        "protocol": "a",
        "ip-address": "xxx.xxx.xxx.xxx",
        "mac-address": "xx:xx:xx:xx:xx:xx"
    },
	"last-update": 28-08-2024
}
```

### Para  habitaciones

```json
{
    "room_id",
    "name",
    "devices": ["device_id", "device_id"...],
    "temperature": {
        "current",
        "target"
    },
    "ligth-level": {
      	"current",
        "max"
    },
    "humidity": {
        "current",
        "target" // si puedo de alguna forma comprar un dispositivo que se deshaga de ella
    },
    "last-update": 28-08-2024
}
```

### Para escenarios

- Son 3 tablas

***Scenario***

```json
{
    "scenario_id",
    "name",
    "description",
    "active"
    "last-update": 28-08-2024
}
```

***Scenario_Condition***

```json
 {
     "condition_id",
     "scenario_id",
     "type", //enum sensor, time..
     "operator" // !=, =, <, > ..
     "value"
 }
```

***Scenario_Actions***

```json
{
    "action_id",
    "scenario_id",
    "device_id",
    "target_type",
    "action", //nombre de la funcion js que lance el codigo arduino??
    "value"
}
```

## Plan de desarrollo

| Nombre                        | Descripción                                                  | Estado      | Fecha Estimada | Fecha Finalización |
| ----------------------------- | ------------------------------------------------------------ | ----------- | -------------- | ------------------ |
| Back end - BD                 | Diseño de base de datos y comienzo de Node.js                | En progreso | 31-12-2024     |                    |
| 1º Fase de Arduino            | Desarrollo de la parte de persianas por tiempo, agua y cantidad luminica | En espera   | 28-02-2025     |                    |
| 1º Fase de pruebas            | Comunicación entre la 1º fase de arduino y el backend        | En espera   | 31-03-2025     |                    |
| 2º Fase de Arduino            | Desarrollo de sensores eléctricos, control de paso de electricicadad... | En espera   | 31-06-2025     |                    |
| 2º Fase de pruebas            | Comunicación entre la 1º y 2º fase de Arduino con el backend | En espera   |                |                    |
| Front end                     | Desarrollo de front end con React Native                     | En espera   |                |                    |
| 3º Fase de pruebas            | Comunicación entre back y front con datos de prueba          | En espera   |                |                    |
| 4º Fase de pruebas            | Comunicación a través de front entre front y back y arduino  | En espera   |                |                    |
| Fase de correcciones globales | Ir comentando cosas a corregir según se vayan encontrando y no sean grabes para ninguna de las fases anteriores y su funcionamiento. |             |                |                    |

## Test Unitarios
    ### Scenes
        Crear una nueva escena ✅ con dificitulades (error en el campo STATE/ENUM - ha quedado a nulo) 15/03/2025
        Actualizar Escena - A la espera de introducir un sensor
        Obtener escena por id ✅ 15/03/2025
        Obtener escena por nombre ✅ 15/03/2025
        Obtener todas las escenas ✅ 15/03/2025
        Eliminar escena - A la espera de un error al introducir escena
        [Posibles metodos, obtener con que contenga x cosa en el nombre, de esta forma podria hacer una barra de busqueda de scenas o incluso tener un metodo preparado que devolviera todas las escenas automaticas]
    ### Devices
        Crear un nuevo dispositivo ✅ 15/03/2025
        Actualizar un dispositivo a la ultima fecha/hora ✅ 15/03/2025
        Obtener dispositivo por id ✅ 15/03/2025
        Obtener todos los dispositivos ✅ 15/03/2025
        Eliminar dispositivo
    ### Rooms
        Crear nuevas habitaciones ✅ 15/03/2025
        Actualizar humedad ✅ 15/03/2025
        Actualizar temperatura ✅ 15/03/2025
        Actualizar luminiscencia ✅ 15/03/2025
        Obtener habitacion por id ✅ 15/03/2025
        Obtener todas las habitaciones ✅ 15/03/2025
        Eliminar habitacion 
    ### Actions
        Crear nuevas Acciones ✅ 15/03/2025
        Obtener Accion por ID ✅ 15/03/2025
        Obtener Accion por nombre ✅ 15/03/2025
        Obtener todas las Acciones ✅ 15/03/2025
        Eliminar una accion ✅ 15/03/2025
    ### Action_Scene
        Crear nuevas action_scene ✅ 16/03/2025
        Obtener todas las escenas asociadas a una accion por su id ✅ 16/03/2025
        Obtener todas las acciones asociadas a una escena por su id ✅ 16/03/2025
        Obtener todas las acciones_escenas ✅ 16/03/2025
        Eliminar una escena_accion
    ### Device_Scene ✅ 16/03/2025
