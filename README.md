# MobileAnnotator

Dieses Projekt ist im Zuge einer Bachelorarbeit entstanden und wurde von Pascal Adeberg in Zusammenarbeit mit dem TextTechnologyLab der Goethe Universität Frankfurt (Main) entwickelt.

## Hinweise für die Entwicklung

>Für die Arbeit an dem Projekt wird **Visual Studio Code** empfohlen.

Das Projekt verwendet das **Angular** Framework mit **Yarn** als Package Manager.
Um **Yarn** zu installieren wird zunächst **Node.js** benötigt. Beide können von den folgenden Quellen bezogen werden:

>Node.js: nodejs.dev
>Yarn: classic.yarnpkg.com/en/

Für das Hinzufügen von **Angular** muss nach erfolgreicher Installation von **Yarn** in der *Eingabeaufforderung(command prompt)* folgendes Eingegeben werden:

> `yarn global add @angular/cli`
> `ng config -g cli.packageManager yarn`

## Starten und Bauen der Anwendung

Zunächst muss sichergestellt werden, dass alle nötigen Pakete lokal vorliegen. Dazu muss im *Projekt Root Verzeichnis* folgender Befehl ausgeführt werden:

> `yarn`

Anschließend lässt sich über `yarn start` die Anwendung bauen und über *localhost:4200* aufrufen.
Für das Bauen der Anwendung, um sie zum Beispiel auf einem Server produktiv zu schalten, muss statt dessen der Befehl `yarn prodbuild` ausgeführt werden. Die gebaute Anwendung ist nach Abschluss des Vorgangs im *dist/* Verzeichnis zu finden.