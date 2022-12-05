1 : Installer la version LTS de node JS
1.1 : vérifier dans une console que node et npm sont bien installé
1.1.1 : avec la commande node -v et npm -v

1.2 : Installer la dernière version d'angular sur votre machine en Global
1.2.1 : avec la commande npm install -g @angular/cli   (-g pour global à la machine et pas au projet !)
1.2.2 : Tester l'installation avec la commande ng version    (attention il vaux mieux relancer une console)

2.0 : Pour créer un projet, se mettre dans le répertoire souhaiter et lancer la commande
2.0.1 : ng new nomPorjet --skip-tests
2.0.2 : Il vous demande pour ajouter auto le router on dit "y"
2.0.3 : Et on choisi le style avec scss


3.0 : Pour la DataViz -> installer la librairie ngx-chart avec la commande npm i @swimlane/ngx-charts --save
3.1 : Vérifier également dans le fichier package.json en racine si @swimlane est bien cité

4.0 : Couper VS Code, et relancer dans la raçine du projet !!! et bien vérifier dans le terminal que l'on soit dedans !
4.1 : lancé le projet avec la commande ng serve --port 4200

5.0 : le app.compo.html contient le code de base prévu par angular, ne laisser que la ligne du router <router-outlet>
5.1 : ajouter au besoin une librairie css comme materialize -> ajouter les deux lignes suivante dans le index.html de la racine dans le <head>
5.1.1 : <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
5.1.2 : <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

5.2 : pour créer un compo, lancer la commande suivante dans un terminal dans la racine du projet: ng g c folder/nomCompo
5.3 : ne pas oublier une petite nav bar, et votre routage ! 
5.3.1 : ajouter par exemple dans le app.routing.module.ts dans le tableau des routes -> { path : "url", component : nomCompo }
5.4 : n'oubliez pas que les liens de navigation ne sont pas des <a href="url"> mais bien <a routerLink="path">

##exemple de code
![This is an image]("/src/assets/app.module.PNG")

