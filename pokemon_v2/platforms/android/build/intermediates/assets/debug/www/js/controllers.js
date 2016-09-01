angular.module('starter.controllers', ['angucomplete'])


.controller('DashCtrl', function($scope) {
  //$scope.cp=0;
  $scope.evolvedPokemonCp="Click to calculate Cp";

                $scope.countries = 
                [
                    {name: 'Squirtle', code: 1.74, evolution: 'Wartortle'},
                    {name: 'Pikachu', code: 2.46, evolution: 'Raichu'},
                    {name: 'Cubone', code: 1.79, evolution: 'Merowak'},
                    {name: 'Charmander', code: 2.34, evolution: 'Charmeleon'},
                    {name: 'Growlithe', code: 2.35, evolution: 'Archanine'},
                    {name: 'Bulbasaur', code: 2.22, evolution: 'Ivysaur'},
                    {name: 'Ivysaur', code: 1.91, evolution: 'Venusaur'},
                    {name: 'Charmeleon', code: 2.01, evolution: 'Charizard'},
                    {name: 'Wartortle', code: 1.83, evolution: 'blastoise'},
                    {name: 'Caterpie', code: 1.49, evolution: 'Metapod'},
                    {name: 'Metapod', code: 3.38, evolution: 'Butterfree'},
                    {name: 'Weedle', code: 1.17, evolution: 'Kakuna'},
                    {name: 'Kakuna', code: 3.28, evolution: 'Beedrill'},
                    {name: 'Pidgey', code: 1.92, evolution: 'Pidgeotto'},
                    {name: 'Pidgeotto', code: 1.94, evolution: 'Pidgeot'},
                    {name: 'Rattata', code: 2.63, evolution: 'Raticate'},
                    {name: 'Spearow', code: 2.64, evolution: 'Fearow'},
                    {name: 'Ekans', code: 2.22, evolution: 'Arbok'},
                    {name: 'Sandshrew', code: 2.35, evolution: 'Sandslash'},
                    {name: 'Nidoran F', code: 1.71, evolution: 'Nidorina'},
                    {name: 'Nidorina', code: 1.84, evolution: 'Nidoqueen'},
                    {name: 'Nidoran M', code: 1.68, evolution: 'Nidorino'},
                    {name: 'Nidorino', code: 1.83, evolution: 'Nidoking'},
                    {name: 'Clefairy', code: 1.93, evolution: ' Clefable'},
                    {name: 'Vulpix', code: 2.5, evolution: ' Ninetales'},
                    {name: 'Jigglypuff', code: 2.41, evolution: ' Wigglytuff'},
                    {name: 'Zubat', code: 3.15, evolution: 'Golbat'},
                    {name: 'Oddish', code: 1.53, evolution: 'Gloom'},
                    {name: 'Gloom', code: 2.05, evolution: 'Vileplume'},
                    {name: 'Paras', code: 1.94, evolution: 'Parasect'},
                    {name: 'Venonat', code: 1.9, evolution: 'Venomoth'},
                    {name: 'Diglett', code: 3.18, evolution: 'Dugtrio'},
                    {name: 'Meowth', code: 3.18, evolution: 'Persian'},
                    {name: 'Psyduck', code: 2.31, evolution: 'Golduck'},
                    {name: 'Mankey', code: 2.14, evolution: 'primeape'},
                    {name: 'Poliwag', code: 1.72, evolution: 'Poliwhirl'},
                    {name: 'Poliwhirl', code: 1.79, evolution: 'Polywrath'},
                    {name: 'Abra', code: 2.59, evolution: 'Kadabra'},
                    {name: 'Kadabra', code: 2.09, evolution: ' Alakazam'},
                    {name: 'Machop', code: 1.69, evolution: 'Machoke'},
                    {name: 'Machoke', code: 1.56, evolution: 'Machamp'},
                    {name: 'Bellsprout', code: 1.89, evolution: 'Weepinbell'},
                    {name: 'Weepinbell', code: 1.49, evolution: 'Victreebel'},
                    {name: 'Tentacool', code: 3.18, evolution: 'tentacruel'},
                    {name: 'Geodude', code: 1.84, evolution: 'Graveler'},
                    {name: 'Graveler', code: 1.68, evolution: 'Golem'},
                    {name: 'Ponyta', code: 1.5, evolution: 'Rapidash'},
                    {name: 'Slowpoke', code: 2.23, evolution: 'Slowbro, Slowking'},
                    {name: 'Magnemite', code: 2.23, evolution: 'Magneton'},
                    {name: 'Doduo', code: 2.2, evolution: 'dodrio'},
                    {name: 'Seel', code: 1.68, evolution: 'Dewgong'},
                    {name: 'Grimer', code: 2.44, evolution: 'Muk'},
                    {name: 'Shellder', code: 2.58, evolution: 'Cloyster'},
                    {name: 'Gastly', code: 1.95, evolution: 'Haunter'},
                    {name: 'Haunter', code: 1.9, evolution: 'Gengar'},
                    {name: 'Drowzee', code: 2.09, evolution: 'Hypno'},
                    {name: 'Krabby', code: 2.36, evolution: ' Kingler'},
                    {name: 'Voltorb', code: 2.01, evolution: 'Electrode'},
                    {name: 'Exeggcute', code: 2.61, evolution: 'exeggutor'},
                    {name: 'Koffing', code: 4, evolution: 'Weezing'},
                    {name: 'Rhyhorn', code: 2.06, evolution: 'Rhydon'},
                    {name: 'Horsea', code: 2.19, evolution: 'Seadra'},
                    {name: 'Goldeen', code: 2.21, evolution: 'Seaking'},
                    {name: 'Staryu', code: 2.37, evolution: 'Starmie'},
                    {name: 'Magikarp', code: 10.55, evolution: 'Gyarados'},
                    {name: 'Drowzee', code: 2.09, evolution: 'Hypno'},
                    {name: 'Eevee', code: 2.59, evolution: 'Flareon'},
                    {name: 'Eevee', code: 2.13, evolution: 'Jolteon'},
                    {name: 'Eevee', code: 2.76, evolution: 'Vaporeon'},
                    {name: 'Omanyte', code: 4.44, evolution: 'Omastar'},
                    {name: 'Kabuto', code: 2.11, evolution: 'Kabutops'},
                    {name: 'Dratini', code: 2.56, evolution: 'Dragonair'},
                    {name: 'Dragonair', code: 2.01, evolution: 'Dragonite'}
                ];

        $scope.evolvedPokemon="Click to see the name";
        $scope.aftercp="Click to calculate cp";
        $scope.check=function (cp) {
          console.log("cp here");
             console.log(cp);
        };

        //calculating the cp of the pokemon
         $scope.test=function(pokemon,evolutionFactor,evolution,cp){
          console.log("cp--->"+cp);

            console.log("inside test"+pokemon+evolutionFactor+evolution);
            console.log(cp*evolutionFactor);
            //console.log($scope.evolution[pokemon]);


            $scope.evolvedPokemon=evolution;
            $scope.evolvedPokemonCp=cp*evolutionFactor;
        };
})

.controller('ChatsCtrl', function($scope, Chats) {
            $scope.n="Click to find Type";


           $scope.pokemontype = [{"name":"Bulbasaur ","type":[" Grass"," Poison "]},{"name":"Ivysaur ","type":[" Grass"," Poison "]},{"name":"Venusaur ","type":[" Grass"," Poison "]},{"name":"Charmander ","type":[" Fire "]},{"name":"Charmeleon ","type":[" Fire "]},{"name":"Charizard ","type":[" Fire"," Flying "]},{"name":"Squirtle ","type":[" Water "]},{"name":"Wartortle ","type":[" Water "]},{"name":"Blastoise ","type":[" Water "]},{"name":"Caterpie ","type":[" Bug "]},{"name":"Metapod ","type":[" Bug "]},{"name":"Butterfree ","type":[" Bug"," Flying "]},{"name":"Weedle ","type":[" Bug"," Poison "]},{"name":"Kakuna ","type":[" Bug"," Poison "]},{"name":"Beedrill ","type":[" Bug"," Poison "]},{"name":"Pidgey ","type":[" Normal"," Flying "]},{"name":"Pidgeotto ","type":[" Normal"," Flying "]},{"name":"Pidgeot ","type":[" Normal"," Flying "]},{"name":"Rattata ","type":[" Normal "]},{"name":"Raticate ","type":[" Normal "]},{"name":"Spearow ","type":[" Normal"," Flying "]},{"name":"Fearow ","type":[" Normal"," Flying "]},{"name":"Ekans ","type":[" Poison "]},{"name":"Arbok ","type":[" Poison "]},{"name":"Pikachu ","type":[" Electric "]},{"name":"Raichu ","type":[" Electric "]},{"name":"Sandshrew ","type":[" Ground "]},{"name":"Sandslash ","type":[" Ground "]},{"name":"Nidoran? ","type":[" Poison "]},{"name":"Nidorina ","type":[" Poison "]},{"name":"Nidoqueen ","type":[" Poison "]},{"name":"Nidoran? ","type":[" Poison "]},{"name":"Nidorino ","type":[" Poison "]},{"name":"Nidoking ","type":[" Poison "]},{"name":"Clefairy ","type":[" Fairy "]},{"name":"Clefable ","type":[" Fairy "]},{"name":"Vulpix ","type":[" Fire "]},{"name":"Ninetales ","type":[" Fire "]},{"name":"Jigglypuff ","type":[" Normal "]},{"name":"Wigglytuff ","type":[" Normal"," Fairy "]},{"name":"Zubat ","type":[" Poison"," Flying "]},{"name":"Golbat ","type":[" Poison"," Flying "]},{"name":"Oddish ","type":[" Grass"," Poison "]},{"name":"Gloom ","type":[" Grass"," Poison "]},{"name":"Vileplume ","type":[" Grass"," Poison "]},{"name":"Paras ","type":[" Bug"," Grass "]},{"name":"Parasect ","type":[" Bug"," Grass "]},{"name":"Venonat ","type":[" Bug"," Poison "]},{"name":"Venomoth ","type":[" Bug"," Poison "]},{"name":"Diglett ","type":[" Ground "]},{"name":"Dugtrio ","type":[" Ground "]},{"name":"Meowth ","type":[" Normal "]},{"name":"Persian ","type":[" Normal "]},{"name":"Psyduck ","type":[" Water "]},{"name":"Golduck ","type":[" Water "]},{"name":"Mankey ","type":[" Fighting "]},{"name":"Primeape ","type":[" Fighting "]},{"name":"Growlithe ","type":[" Fire "]},{"name":"Arcanine ","type":[" Fire "]},{"name":"Poliwag ","type":[" Water "]},{"name":"Poliwhirl ","type":[" Water "]},{"name":"Poliwrath ","type":[" Water"," Fighting "]},{"name":"Abra ","type":[" Psychic "]},{"name":"Kadabra ","type":[" Psychic "]},{"name":"Alakazam ","type":[" Psychic "]},{"name":"Machop ","type":[" Fighting "]},{"name":"Machoke ","type":[" Fighting "]},{"name":"Machamp ","type":[" Fighting "]},{"name":"Bellsprout ","type":[" Grass"," Poison "]},{"name":"Weepinbell ","type":[" Grass"," Poison "]},{"name":"Victreebel ","type":[" Grass"," Poison "]},{"name":"Tentacool ","type":[" Water"," Poison "]},{"name":"Tentacruel ","type":[" Water"," Poison "]},{"name":"Geodude ","type":[" Rock"," Ground "]},{"name":"Graveler ","type":[" Rock"," Ground "]},{"name":"Golem ","type":[" Rock"," Ground "]},{"name":"Ponyta ","type":[" Fire "]},{"name":"Rapidash ","type":[" Fire "]},{"name":"Slowpoke ","type":[" Water"," Psychic "]},{"name":"Slowbro ","type":[" Water"," Psychic "]},{"name":"Magnemite ","type":[" Electric"," Steel "]},{"name":"Magneton ","type":[" Electric"," Steel "]},{"name":"Farfetch'd ","type":[" Normal"," Flying "]},{"name":"Doduo ","type":[" Normal"," Flying "]},{"name":"Dodrio ","type":[" Normal"," Flying "]},{"name":"Seel ","type":[" Water "]},{"name":"Dewgong ","type":[" Water"," Ice "]},{"name":"Grimer ","type":[" Poison "]},{"name":"Muk ","type":[" Poison "]},{"name":"Shellder ","type":[" Water "]},{"name":"Cloyster ","type":[" Water"," Ice "]},{"name":"Gastly ","type":[" Ghost"," Poison "]},{"name":"Haunter ","type":[" Ghost"," Poison "]},{"name":"Gengar ","type":[" Ghost"," Poison "]},{"name":"Onix ","type":[" Rock"," Ground "]},{"name":"Drowzee ","type":[" Psychic "]},{"name":"Hypno ","type":[" Psychic "]},{"name":"Krabby ","type":[" Water "]},{"name":"Kingler ","type":[" Water "]},{"name":"Voltorb ","type":[" Electric "]},{"name":"Electrode ","type":[" Electric "]},{"name":"Exeggcute ","type":[" Grass"," Psychic "]},{"name":"Exeggutor ","type":[" Grass"," Psychic "]},{"name":"Cubone ","type":[" Ground "]},{"name":"Marowak ","type":[" Ground "]},{"name":"Hitmonlee ","type":[" Fighting "]},{"name":"Hitmonchan ","type":[" Fighting "]},{"name":"Lickitung ","type":[" Normal "]},{"name":"Koffing ","type":[" Poison "]},{"name":"Weezing ","type":[" Poison "]},{"name":"Rhyhorn ","type":[" Ground"," Rock "]},{"name":"Rhydon ","type":[" Ground"," Rock "]},{"name":"Chansey ","type":[" Normal "]},{"name":"Tangela ","type":[" Grass "]},{"name":"Kangaskhan ","type":[" Normal "]},{"name":"Horsea ","type":[" Water "]},{"name":"Seadra ","type":[" Water "]},{"name":"Goldeen ","type":[" Water "]},{"name":"Seaking ","type":[" Water "]},{"name":"Staryu ","type":[" Water "]},{"name":"Starmie ","type":[" Water"," Psychic "]},{"name":"Mr. Mime ","type":[" Psychic"," Fairy "]},{"name":"Scyther ","type":[" Bug"," Flying "]},{"name":"Jynx ","type":[" Ice"," Psychic "]},{"name":"Electabuzz ","type":[" Electric "]},{"name":"Magmar ","type":[" Fire "]},{"name":"Pinsir ","type":[" Bug "]},{"name":"Tauros ","type":[" Normal "]},{"name":"Magikarp ","type":[" Water "]},{"name":"Gyarados ","type":[" Water"," Flying "]},{"name":"Lapras ","type":[" Water"," Ice "]},{"name":"Ditto ","type":[" Normal "]},{"name":"Eevee ","type":[" Normal "]},{"name":"Vaporeon ","type":[" Water "]},{"name":"Jolteon ","type":[" Electric "]},{"name":"Flareon ","type":[" Fire "]},{"name":"Porygon ","type":[" Normal "]},{"name":"Omanyte ","type":[" Rock"," Water "]},{"name":"Omastar ","type":[" Rock"," Water "]},{"name":"Kabuto ","type":[" Rock"," Water "]},{"name":"Kabutops ","type":[" Rock"," Water "]},{"name":"Aerodactyl ","type":[" Rock"," Flying "]},{"name":"Snorlax ","type":[" Normal "]},{"name":"Articuno ","type":[" Ice"," Flying "]},{"name":"Zapdos ","type":[" Electric"," Flying "]},{"name":"Moltres ","type":[" Fire"," Flying "]},{"name":"Dratini ","type":[" Dragon "]},{"name":"Dragonair ","type":[" Dragon "]},{"name":"Dragonite ","type":[" Dragon"," Flying "]},{"name":"Mewtwo ","type":[" Psychic "]},{"name":"Mew ","type":[" Psychic"]}];


              $scope.attributes = [{"type" : "NORMAL","Strong":"None","Weak":"Fighting"},
                {"type" : "BUG","Strong":"Grass, Psychic, Dark","Weak":"Fire, Flying, Rock"},
                {"type" : "POISON","Strong":"Grass, Fairy","Weak":"Ground, Psychic"},
                {"type" : "GRASS","Strong":"Water, Ground Rock","Weak":"Fire, Ice, Poison, Flying, Bug"},
                {"type" : "WATER","Strong":"Fire, Ground, Rock","Weak":"Electric, Grass"},
                {"type" : "FIRE","Strong":"Steel, Bug, Ice, Grass","Weak":"Rock, Water, Ground"},
                {"type" : "GROUND","Strong":"Fire, Electric, Poison, Rock, Steel","Weak":"Water, Grass, Ice"},
                {"type" : "FIGHTING","Strong":"Normal, Ice, Rock, Dark, Steel","Weak":"Flying, Psychic, Fairy"},
                {"type" : "ROCK","Strong":"Fire, Ice, Flying, Bug","Weak":"Water, Grass, Fighting, Ground, Steel"},
                {"type" : "FAIRY","Strong":"Fighting, Dragon, Dark","Weak":"Poison, Steel"},
                {"type" : "ELECTRIC","Strong":"Water, Flying","Weak":"Ground"},
                {"type" : "PSYCHIC","Strong":"Fighting, Poison","Weak":"Bug, Ghost, Dark"},
                {"type" : "GHOST","Strong":"Psychic, Ghost","Weak":"Ghost, Dark"},
                {"type" : "DRAGON","Strong":"Dragon","Weak":"Ice, Dragon, Fairy"},
                {"type" : "ICE","Strong":"Grass, Ground, Flying, Dragon","Weak":"Fire, Fighting, Rock, Steel"},
                {"type" : "FLYING","Strong":"Grass, Fighting, Bug","Weak":"Electric, Steel, Rock"},
                {"type" : "DARK","Strong":"Psychic, Ghost","Weak":"Fighting, Fairy, Bug"},
                {"type" : "STEEL","Strong":"Fairy, Ice, Rock","Weak":"Fighting, Fire, Ground"}];

              

              $scope.show = function(name)
              {

                console.log("inside show function");
                         $scope.attributes = 
                                  [
                                    {"type" : "NORMAL","Strong":"None","Weak":"Fighting"},
                                    {"type" : "BUG","Strong":"Grass, Psychic, Dark","Weak":"Fire, Flying, Rock"},
                                    {"type" : "POISON","Strong":"Grass, Fairy","Weak":"Ground, Psychic"},
                                    {"type" : "GRASS","Strong":"Water, Ground, Rock","Weak":"Fire, Ice, Poison, Flying, Bug"},
                                    {"type" : "WATER","Strong":"Fire, Ground, Rock","Weak":"Electric, Grass"},
                                    {"type" : "FIRE","Strong":"Steel, Bug, Ice, Grass","Weak":"Rock, Water, Ground"},
                                    {"type" : "GROUND","Strong":"Fire, Electric, Poison, Rock, Steel","Weak":"Water, Grass, Ice"},
                                    {"type" : "FIGHTING","Strong":"Normal, Ice, Rock, Dark, Steel","Weak":"Flying, Psychic, Fairy"},
                                    {"type" : "ROCK","Strong":"Fire, Ice, Flying, Bug","Weak":"Water, Grass, Fighting, Ground, Steel"},
                                    {"type" : "FAIRY","Strong":"Fighting, Dragon, Dark","Weak":"Poison, Steel"},
                                    {"type" : "ELECTRIC","Strong":"Water, Flying","Weak":"Ground"},
                                    {"type" : "PSYCHIC","Strong":"Fighting, Poison","Weak":"Bug, Ghost, Dark"},
                                    {"type" : "GHOST","Strong":"Psychic, Ghost","Weak":"Ghost, Dark"},
                                    {"type" : "DRAGON","Strong":"Dragon","Weak":"Ice, Dragon, Fairy"},
                                    {"type" : "ICE","Strong":"Grass, Ground, Flying, Dragon","Weak":"Fire, Fighting, Rock, Steel"},
                                    {"type" : "FLYING","Strong":"Grass, Fighting, Bug","Weak":"Electric, Steel, Rock"},
                                    {"type" : "DARK","Strong":"Psychic, Ghost","Weak":"Fighting, Fairy, Bug"},
                                    {"type" : "STEEL","Strong":"Fairy, Ice, Rock","Weak":"Fighting, Fire, Ground"}
                                    ];
            $scope.n=name[0];
            console.log(name);

            $scope.strength="";
            $scope.weakness="";

            for (var i = 0; i < $scope.attributes.length; i++) {
                console.log($scope.attributes[i]);
                
                for(var j=0;j<name.length;j++){
                     
                   var nameElement = name[j] || '';
                   nameElement=nameElement.trim();
                   console.log("nameElement--->"+nameElement.toUpperCase())
                   console.log("type--->"+$scope.attributes[i].type);
                    if($scope.attributes[i].type == nameElement.toUpperCase()){
                        console.log("inside");
                        $scope.strength=$scope.attributes[i].Strong+","+$scope.strength;
                         $scope.weakness=$scope.attributes[i].Weak+","+$scope.weakness;
                    }

                }
                console.log("printing strength");
                console.log($scope.strength);
               
                
            }

            function uniq_fast(a) {
                    var seen = {};
                    var out = [];
                    var len = a.length;
                    var j = 0;
                    for(var i = 0; i < len; i++) {
                         var item = a[i];
                         if(seen[item] !== 1) {
                               seen[item] = 1;
                               out[j++] = item;
                         }
                    }
                    return out;
                }

                console.log(uniq_fast($scope.weakness.slice(0, -1).split(",")));

            console.log("final strength--->"+$scope.strength.slice(0, -1));
             console.log("final weakness-->"+$scope.weakness.slice(0, -1));


             $scope.wk=true;
             $scope.finalStrength=uniq_fast($scope.strength.slice(0, -1).split(","));
             $scope.finalWeakness=uniq_fast($scope.weakness.slice(0, -1).split(","));

        }
   $scope.typePokemon="Click to see the type";
  $scope.strength="Click to see strengths";
  $scope.weakness="Click to see weakness";
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
