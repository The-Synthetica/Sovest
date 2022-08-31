# Sovest
Pomodoro timer bot for Discord

Uso:
El bot se encarga de administrar una tecnica pomodoro donde los primeros 40 minutos de cada hora son de trabajo continuo, y los otros 20 de descanso.
El mismo se maneja dentro de un canal especifico del servidor y un rol de produccion. (para los afiliados al bot)
Cada minuto, si es que esta activado, se asegura de la hora y de haber cambiado el estado (sea de Descanso a Trabajo, o viceversa) alertara arrobando al rol.
Se puede prender y apagar a preferencia.

Limitaciones:
- Un solo canal de texto y tipo de intervalo
- Solo puede usarse en mi servidor debido a la limitacion del hosting
- El host se reinicia cada 5 minutos lo que me obliga a guardar los estados y variables que no son tan utiles.

Mejoras:
- Decidir los tiempos de intervalo.
- Suministrar el ID del rol y Canal para poder cambiarlo cuando quieras.
- Usar una base de datos
- Cambiar el hosting, dado a que uso Replit con Uptimer bot al ser gratutitos.

Modulos: Discord.js; Fs;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
