const { Client, Intents } = require('discord.js');

const myIntents = new Intents();

//Ahora la api de discord requiere que le avises que vas a intentar hacer al cliente y como uso esto para probar BANDA de cosas, activo todo de una... Pero en general la mayoria de cosas se hace con el acceso a los miembros, sus mensajes y los canales... Sin embargo hay algunas excepciones dependiendo el bot

//myIntents.add(Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_SCHEDULED_EVENTS);

myIntents.add(Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS);



// Create a new client instance
const client = new Client({ intents: myIntents });


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});


//Ids
const IDCanal= '942864733848109086';
const IDrol= '942866394045898803';
 
//Variables
var fs = require('fs');
var sovest= fs.readFileSync("./sovest.txt", "utf-8");
var um= fs.readFileSync("./um.txt", "utf-8");

var d= new Date();
var m= d.getMinutes();

//Evento llega el mensaje
client.on('messageCreate', msg => {

	//Si se requiere de activar
    if(msg.content.startsWith("Sovest ON")){

	//En el archivo de texto con el estado del bot indicamos que debe de estar prendido:
      fs.writeFileSync("sovest.txt", "on","utf-8");

	  //Borramos cualquier mensaje anterior y mandamos el prendido
      client.channels.cache.get('942864733848109086').bulkDelete(5);
      client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST** activado");
      fs.writeFileSync("sovest.txt", "on","utf-8");
    }

	//Si se requiere de apagar
    if(msg.content.startsWith("Sovest OFF")){

	//En el archivo de texto con el estado del bot indicamos que debe de estar apagado:
      fs.writeFileSync("sovest.txt", "off","utf-8");

	//Borramos cualquier mensaje anterior y mandamos el prendido
      client.channels.cache.get('942864733848109086').bulkDelete(25);
      client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST** desactivado");
      fs.writeFileSync("sovest.txt", "off","utf-8");
      fs.writeFileSync("um.txt", "Ap","utf-8");
    }


   //Ahora nos aseguramos de si el bot esta prendido o apagado, y de paso 
   		//si la persona entro en un horario donde deberia ya estar trabajando o descansando.
			//Dado a que el lapso de 40 minutos de trabajo y 20 de descanso del bot es constante e independiente al usuario...

   sovest= fs.readFileSync("./sovest.txt", "utf-8");
   um= fs.readFileSync("./um.txt", "utf-8"); //El archivo UM es por ultimo mensaje enviado...

    if(sovest==="on" && um==="Ap"){
    
    if(m>39){
         client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST**: <@&942866394045898803> Descansen.");
         fs.writeFileSync("um.txt", "De","utf-8");
         }
    
    if(m<40){
         client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST**: <@&942866394045898803> Trabajen!!");
         fs.writeFileSync("um.txt", "Es","utf-8");
         }
  }


});


//Cada minuto nos aseguramos la hora, para que al momento de ser mayor a 40 minutos sea descanso y sino trabajo...

let variable= setInterval( medir, 60000 );

function medir(){
  um= fs.readFileSync("./um.txt", "utf-8");
  sovest= fs.readFileSync("./sovest.txt", "utf-8");
  
  d= new Date();
  m= d.getMinutes();
  
  if(sovest==="on"){

    if(m>39){
      if(um==="Es"){
         client.channels.cache.get('942864733848109086').bulkDelete(1);
         client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST**: <@&942866394045898803> Descansen.");
         fs.writeFileSync("um.txt", "De","utf-8");
         }  }
    
    if(m<40){
      if(um==="De"){
         client.channels.cache.get('942864733848109086').bulkDelete(1);
         client.channels.cache.get('942864733848109086').send("Protocolo **SOVEST**: <@&942866394045898803> Trabajen!!");
         fs.writeFileSync("um.txt", "Es","utf-8");
         }  }

  }
}


// Login to Discord with your client's token
client.login('TOKEN');