# Descripcion
El código que aquí se presenta pretende ayudar a crear ventanas de alerta utilizando para ello la librería estandar **sweetalert2.min** y que podeis encontrar y profundizar en [SweetAlert 2](https://sweetalert2.github.io).

# Primeros Pasos
1. Tienes que importar estos dos ficheros a tu proyecto:
> * sweetalert2.min. Librería estandar sobre la que nos vamos a apoyar.
> * customalert2.js. Librería personalizada que nos ayudará tan sólo llamando a métodos, a crear ventanas de alerta sin necesidad de tener que replicar constantemente el objeto de sweetalert. Esto facilita la **abstracción** por parte del programador.
2. Ya puedes utilizar los métodos creados para facilitar la abstracción:
> * mensajeSuccess(texto, configuracionUsuario);
> * mensajeError(texto, configuracionUsuario);
> * mensajeInfor(texto, configuracionUsuario);
> * mensajeWarning(texto, configuracionUsuario);
> * crearAlert2(configuracionUsuario);
### mensajeSuccess(texto, configuracionUsuario)
Este método nos mostrará un mensaje con el símbolo de correcto. Para ello le pasaremos el *texto* que queremos que nos muestre y si queremos añadir más opciones rellenaremos un objeto *configuracionUsuario*, que explicaremos más adelante.<br/>
![mensajeSuccess](./imagenes/MensajeSuccess.PNG)
### mensajeError(texto, configuracionUsuario)
Este método nos mostrará un mensaje con el símbolo de error. Para ello le pasaremos el *texto* que queremos que nos muestre y si queremos añadir más opciones rellenaremos un objeto *configuracionUsuario*, que explicaremos más adelante.<br/>
![mensajeError](./imagenes/MensajeError.PNG)
### mensajeInfor(texto, configuracionUsuario)
Este método nos mostrará un mensaje con el símbolo de información. Para ello le pasaremos el *texto* que queremos que nos muestre y si queremos añadir más opciones rellenaremos un objeto *configuracionUsuario*, que explicaremos más adelante.<br/>
![mensajeInformacion](./imagenes/MensajeInfor.PNG)
### mensajeWarning(texto, configuracionUsuario)
Este método nos mostrará un mensaje con el símbolo de advertencia. Para ello le pasaremos el *texto* que queremos que nos muestre y si queremos añadir más opciones rellenaremos un objeto *configuracionUsuario*, que explicaremos más adelante.<br/>
![mensajeAdvertencia](./imagenes/MensajeWarning.PNG)
### crearAlert2(configuracionUsuario)
Este método nos permitirá crear cualquier tipo de mensaje incluido los anteriormente citados. Para ellos le pasaremos un objeto *configuracionUsuario*, que explicaremos en el siguiente punto.<br/>
# Configuracion Usuario
*configuracionUsuario* es un objeto que permite amoldar la ventana de alerta a gusto del programador. En función de lo que quiera mostrar, tendrá que añadir parámetros a dicho objeto(**solamente aquellos que se necesiten**):
> *  
