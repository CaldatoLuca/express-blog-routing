# Express Routing

### Sistema di Routing di Express

Lavorando su un array fornito creare le rotte in un file **routers/posts.js**:

- / (index) -> ritorna un html con un ul dei post
- /:slug (show) -> ritorna un json coi dati del post
- /create (create) -> ritorna un html con un h1 Creazione nuovo post e, in caso di richiesta diversa da html, ritorna un 406
- /:slug/download (download) -> fa scaricare l' immagine del post indicato dallo slug

Scrivere tutte le funzioni nel controller dedicato
Importare il router in app.js col prefisso **/posts**

### Bonus

Nella rotta show aggiungi una proprietà **image_url** dove creare il link completo dell' immagine
Aggiungere una proprietà **image_download_url** che fa scaricare l' immagine puntando alla rotta download
Navigare i post, aggiungere un link alla index per la show di ogniuno
