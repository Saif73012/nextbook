# Nextbook

![](doc/images/image4.png)

[nextbook-bht.herokuapp.com](https://nextbook-bht.herokuapp.com/)

## Kopie des Repository von meinem Semesterprojekts

## Projektbeschreibung

Als Entwicklerteam wollen wir das alte gute Freundschaftsbuch wieder zum Leben bringen, indem wir das Konzept des Freundschaftsbuch digitalisieren. Um das Freundschaftsbuch, wie aus der Grundschulzeit, rumzugeben, wird ein individueller QR-Code erstellt, womit man Zugriff auf den Fragenkatalog bekommt.

## Installation

1. Die aktuellste Version aus dem Git-Repositiry holen mit `git pull git@gitlab.beuth-hochschule.de:semsterprojekt/project-nextbook.git`

2. Die Modules für das Backend installieren mit `npm install`

2. Die Modules für das Frontend installieren mit `npm run client-install`

## Lokal ausführen

### Befehle

Um Client und API lokal zu starten den Befehl `npm run dev` ausführen.

**Client:** [http://localhost:3000](http://localhost:3000)

**API:** [http://localhost:9000](http://localhost:9000)

### Abhängigkeiten

Als Datenbanken werden die online Dienste von [cloudinary.com](https://cloudinary.com/) und [cloud.mongodb.com](https://cloud.mongodb.com/) verwendet. Deshalb ist eine Internetverbindung nötig um das Projekt auszuführen.
Wenn dies nicht möglich ist, oder aus anderen Gründen alternative Datenbanken verwendet werden sollten, so kann die MongoDb Cloud Verbindung in der [.env](./.env) Datei und die Cloudinary Verbindung in den Dateien [client/src/component/Page/register/Register3.js](./client/src/component/Page/register/Register3.js) und [client/src/component/Page/guest/GuestPicUpload.js](client/src/component/Page/guest/GuestPicUpload.js) ersetzt werden.

## Deployment

Um das Projekt mittels heroku zu veröffentlichen die folgenden Anweisungen ausführen. (Geht nur mit dem Master Branch.)

1. Client [runterladen](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

2. Einloggen:

`heroku login`

3. Befehl ausführen (im repository):

`heroku git:remote -a nextbook-bht`

4. Nachdem Änderungen commitet wurden auf heroku pushen mit dem Befehl:

`git push heroku master`

## Dokumentation

- [Endpoints](/doc/endpoints.md)
- [Database](/doc/database.md)
- [Systemarchitektur](/doc/images/systemarchitektur.png)

*Für das bessere Verständnis wurden Kommentare in den Quellcode gefügt.*
