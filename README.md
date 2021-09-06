# MobileAnnotator


Dieses Projekt ist im Zuge einer Bachelorarbeit entstanden und wurde von Pascal Adeberg in Zusammenarbeit mit dem TextTechnologyLab der Goethe Universität Frankfurt (Main) entwickelt.

# How to use the Tool - Manual

Please read the following document before annotating.

https://github.com/cr-heidemann/MobileAnnotator/blob/main/src/assets/manual.pdf

Please read the documentation if you are further developing this tool.

https://github.com/cr-heidemann/MobileAnnotator/blob/main/documentation.md

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

# How to set up the Tool - In English

1) Download and install Visual Studio Code from 
> code.visualstudio.com
2) Download and install Node.js  from 
> nodejs.dev
3) Download and install Yarn from 
> classic.yarnpkg.com/en/
4) Open the command line and copy this, then press enter
> yarn global add @angular/cli ng config -g cli.packageManager yarn
5) clone the github code (e.g. with the Github Desktop App)
6) in the command line, change the directory to the directory of the mobile annotator files on your machine with
> cd Path_to_your_directory
7) now type in the command line and enter:
> yarn
8) now type in the command line and enter:
> yarn start
9) after it concluded loading, you can access the website in a browser of your choice with 
> localhost:4200 
in the address field





# Cite
If you want to use the Project, please quote this as follows:

Pascal Adeberg. MobileAnnotator : eine App für den TextAnnotator , bachelor’s thesis, Johann Wolfgang Goethe-Universität, Frankfurt, Germany, 2020. 
http://publikationen.ub.uni-frankfurt.de/files/57150/Thesis2.pdf

G. Abrami, A. Henlein, A. Lücking, A. Kett, P. Adeberg, and A. Mehler, “Unleashing annotations with TextAnnotator: Multimedia, multi-perspective document views for ubiquitous annotation,” in Proceedings of the Seventeenth Joint ACL – ISO Workshop on Interoperable Semantic Annotation (ISA-17), 2021. accepted

# BibTeX
```
@thesis{Adeberg:2020,
  address = {Frankfurt, Germany},
  author = {Adeberg, Pascal},
  institution = {Institute of Computer Science and Mathematics, Text Technology Lab},
  pdf = {http://publikationen.ub.uni-frankfurt.de/files/57150/Thesis2.pdf},
  school = {Johann Wolfgang Goethe-Universit{\"a}t},
  title = {MobileAnnotator : eine App f{\"u}r den TextAnnotator},
  type = {bachelor's thesis},
  url = {http://publikationen.ub.uni-frankfurt.de/frontdoor/index/index/docId/57150},
  year = {2020}
}

@InProceedings{Abrami:et:al:2021,
  Author         = {Abrami, Giuseppe and Henlein, Alexander and Lücking, Andy and Kett, Attila and Adeberg, Pascal and Mehler, Alexander},
  Title          = {Unleashing annotations with {TextAnnotator}: Multimedia, multi-perspective document views for ubiquitous annotation},
  BookTitle      = {Proceedings of the Seventeenth Joint ACL - ISO Workshop on Interoperable Semantic Annotation (ISA-17)},
  Series         = {ISA-17},
  location       = {Groningen, Netherlands},
  month     = {June},
  year           = {2021},
  note = {accepted}
}



```
