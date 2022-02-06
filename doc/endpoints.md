API
===


Endpoints
---------

Das Backend läuft gerade auf Port 9000 in Version 1 der API. Dadurch
ergibt sich folgende URL Anfang, der bei jeder Anfrage nötig ist:
`http://localhost:9000/api/v1`.

Die Endpoints für die Questions sind noch nicht vorhanden, da es sich
dabei nicht um eine Kern-Funktion handelt, sondern ein Feature das erst
in zukünftigen Versionen umgesetzt werden soll.

Die Arrays ‘questions’ und ‘posts’ bei den user Dokumenten können nicht
bearbeitet werden, da diese lediglich zur Anzeige der Relationen dienen.
Soll eine dort abgebildete Relation entfernt/hinzugefügt werden, dann
passiert dies direkt über das dort verknüpfte Dokument.

### Post:

`GET /post`

Gibt alle Post aus, die in der Datenbank vorhanden sind.

`GET /post/count`

Gibt die Anzahl aller Posts in der Datenbank aus.

`GET /post?sort=name`

`GET /post?sort=-name`

Gibt alle Post aus die in der Datenbank vorhanden sind sortiert nach dem
angegeben Attribut. (Hier im Beispiel: sortiert den Namen nach dem
Alphabet aufsteigend oder absteigend).

`GET /post?select=name`

Gibt nur ein angegebenes Feld aus allen Dokumenten in der Post
Collection aus. (Hier im Beispiel: der Name). 

`POST /post`

Erstellt einen Post welcher in der Datenbank hinzugefügt wird. Gibt eine
Fehlermeldung wenn im Schema definierte Angaben fehlen/falsch sind. Gibt
das erstellte Dokument inkl. neu erstellter ID zurück. Die ID wird in
das Posts Array im Dokument des User, welcher in ‘owner’ angegeben ist
eingefügt.

`DELETE /post`

Löscht alle Post die es in der Datenbank gibt. Bitte nicht probieren !!
Wir werden die Abfrage noch mit JWT diesen Zugriff einschränken sodass
nur Admins diese Anfrage durchführen können!

`GET /post/:id`

Gibt den Post mit der entsprechenden ID aus.

`GET /post/:id/shallow`

Gibt den Post mit der entsprechenden ID aus, jedoch werden die Attribute
owner ,birth und CustomQuestions  mit dem Wert true ausgegeben statt den
eigentlichen Wert.

`PUT /post/:id`

`PATCH /post/:id`

Updated den Post mit der angegeben ID. Da ein Post nicht ohne User:in
existiert und diese:r auch nicht geändert wird,  kann das Feld ‘owner’
nicht verändert werden.

`DELETE /post/:id`

Löscht den Post mit der entsprechenden ID und löscht auch die
Referenzen, d.h. die im entsprechenden User stehende Posts Liste wird
aktualisiert und der Eintrag gelöscht.

### User:

`GET /user`

Gibt alle User aus, die in der Datenbank vorhanden sind.

`GET /user/count`

Gibt die Anzahl aller User in der Datenbank aus.

`GET /user?sort=lastName`

`GET /user?sort=-lastName`

Gibt alle User aus die in der Datenbank vorhanden sind sortiert nach dem
angegeben Attribut (hier im Beispiel: sortiert den Nachnamen nach dem
Alphabet aufsteigend oder absteigend)

 

`GET /user?populate=posts`

Gibt alle User aus die in der Datenbank vorhanden sind und alle Post
Einträge mit ihren entsprechenden Attributen und Werten.

`GET /user?select=firstName`

Gibt eine Tabelle aus mit allen Vornamen der User.

`POST /user`

Erstellt einen User welcher in der Datenbank hinzugefügt wird. Gibt eine
Fehlermeldung wenn im Schema definierte Angaben fehlen/falsch sind. Gibt
das erstellte Dokument inkl. neu erstellter ID zurück.

`DELETE /user`

Löscht alle User die es gibt in der Datenbank. Bitte nicht probieren !!
Wir werden die Abfrage noch mit JWT diesen Zugriff einschränken sodass
nur Admins diese Anfrage durchführen können!  

`GET /user/:id`

Gibt den User mit der entsprechenden ID aus.

`GET /user/:id/shallow`

Gibt den User mit der entsprechenden ID aus, jedoch werden die Attribute
Posts und Questions mit dem Wert true ausgegeben statt den eigentlichen
Wert.

`PUT /user/:id`

`PATCH /user/:id`

Updated den User mit der angegeben ID.

`DELETE /user/:id`

Löscht den User mit der entsprechenden ID und löscht auch alle
Dokumente, welche diesen User als ‘owner’ angegeben haben.

`GET /user/:userId?populate=posts`

Gibt alle Post aus die mit der User ID zugehörig sind und die Daten des
Users

`GET /post?query={"owner":":userId"}`

Gibt alle Post aus die mit der User ID zugehörig sind

### Query:

Abfragen von Post oder User nach bestimmten Bedingungen:

`GET /post?query={"name":"Bob"}`

`GET /post?query={"name":{"\$regex":"\^(Bob)"}}`

`GET /post?query=%7By={"size":{"\$gt":170}}`

`GET /post?query={"size":{"\$gte":170}}`

`GET /post?query={"size":{"\$lt":170}}`

`GET /post?query={"size":{"\$lte":170}}`

`GET /post?query={"size":{"\$ne":170}}`

`GET /user?query={"lastName":"Bob"}`

`GET /user?query={"lastName":{"\$regex":"\^(Bob)"}}`

`GET /user?query={"firstName":"Bob"}`

`GET /user?query={"firstName":{"\$regex":"\^(Bob)"}}`

Weitere Aktionen die auf den Endpoints ausgeführt werden können, sind in
der Dokumentation von
[express-restify-mongoose](https://www.google.com/url?q=https://florianholzapfel.github.io/express-restify-mongoose/&sa=D&ust=1592302535313000) nachzulesen.

Test
----

Zum Testen der API wurden verschieden Postman Collections erstellt. Diese sind im Ordner `/test` zu finden.
