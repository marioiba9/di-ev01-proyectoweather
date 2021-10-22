# PROYECTO WEATHER

Bienvenido a mi proyecto web V2 OpenWeather, el cual consta de una interfaz web, adaptada a cualquier tipo de pantalla gracias a Bootstrap, con jQuery, Sass y Ajax. La aplicación está orientada a móviles, en tamaño web puede haber algún pequeño defecto de tamaño.

En este proyecto, la V1 la he metido en la carpeta www, que es donde se encuentra el index.html y la carpeta assets.

# WWW


## INDEX:

La pagina principal está divida en un menú de navegación y el contenido. En el menú de navegación podemos encontrar dos iconos, el de la casa te lleva al home de la web, en el cual aparece un mensaje de bienvenida.
Si clickamos en la flecha, nos lleva a nuestra segunda sección, nos aparece un input en el cual deberemos introducir el nombre de una ciudad. Tras clickar en search, nos apareceran 5 cards con el tiempo de hoy y de los próximos 4 dias.
 

## ASSETS:

 - [ ] **css:** 
 En la carpeta css, se encuentran 2 archivos, el css de la página(compilación del scss), y el css de bootstrap. Aquí no he tocado mucho ya que el index.css es la conversion del Scss.
 
 - [ ] **img:**
 En esta carpeta guardo las imágenes que aparecen en los cards, van variando en función al tipo de clima que tengamos.
  - [ ] **js:**
  Aquí es donde está la chicha. Por un lado tenemos el jquery.min.js, que es el javascript necesario para poder utilizar JQuery.

	Por otro lado tenemos el index.js. Cuando se carga el documento cargo la página home, y depende que página elijas (home o search), mediante una query voy ocultando la otra.
	Cuando pulsas en el botón search, guardo el valor del input en una variable, al igual que el div en el que quiero que aparezcan las cartas del tiempo. Mediante Ajax, accedo a la API openweather obteniendo los datos que necesito para sacar el tiempo. En función del tipo de clima, le hago un append al div de las cartas añadiendo un div adaptado a todas las pantallas de tipo card con su foto del clima correspondiente. También accedo a los datos del clima de los 4 días siguientes, haciendo lo mismo.
	
 - [ ] **scss:**
 Lo he separado en 4 archivos, variables, mixin, components e index. En variables he creado las variables para el fondo y el color de las letras. En mixin he creado un mixin para definir el margen de las cartas. En components añado las variables a cada div y en index importo los archivos anteriores para poder crear el css.

## CORDOVA

En esta nueva versión, se han visto modificados estos archivos:
- [ ] **js:** 
	Mediante la llamada al método onSuccess y la instalación del plugin location, se ha realizado una llamada a la API para poder sacar el tiempo de la actual ubicación. La ubicacíon la determina mediante la latitud y la longitud las cuales obtenemos mediante la función onSuccess y la instalación del plugin previamente mencionado.

	Cada vez que se recarga la página, el navegador pregunta por tu ubicación.
- [ ] **index:** 
	En la barra de navegación se ha agregado la opción de ubicación.
	Al clickar sobre ella, aparece una carta con el nombre de la ciudad en la que estás ubicado, con el tiempo actual.
