# CONSEGNA
Creiamo il frontend del nostro mini e-commerce e le sue pagine principali! <br/>
Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.

*PARTE 1*<br/>
Installiamo React Router DOM: npm i react-router-dom <br/>
Creiamo almeno 3 pagine principali:<br/>
- Homepage (con un messaggio di benvenuto o immagine promozionale)
- Chi siamo
- Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da qui)
- Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse

*BONUS PARTE 1*<br/>
Usiamo i layout per evitare di importare la navbar in tutte le pagine: centralizziamola in un componente Layout<br/>
Gestiamo la classe active per i link attivi nella Navbar

*PARTE 2*<br/>
Nella pagina Prodotti, ogni prodotto deve essere cliccabile (usa <Link>)<br/>
Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese da https://fakestoreapi.com/products/:id<br/>
Configuriamo il routing dinamico per leggere l’id del prodotto dalla URL

*BONUS PARTE 2*<br/>
Aggiungiamo una navigazione programmatica che riporti alla pagina di listato se viene cercato un prodotto che non esiste<br/>
*Super bonus:* aggiungiamo nella pagina di dettaglio dei pulsanti per navigare al prodotto precedente o successivo (usando useNavigate() programmaticamente)