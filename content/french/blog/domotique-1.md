---
title: "Domotique mais Késako ? Aller plus loin dans la réflexion"
meta_title: "Domotique éducative : comprendre et agir avec Home Assistant"
description: "Découvrez comment la domotique, notamment via Home Assistant, peut servir de levier pédagogique pour penser autrement la gestion d’un lieu de biodiversité."
date: 2026-03-29
tags: ["Domotique", "Home Assistant"]
categories: ["Domotique"]
author: "Jean-Georges"
draft: true
---   

<br>

{{< notice "Définition " >}}
C’est l’ensemble des technologies qui permettent d’automatiser et de contrôler à distance les équipements de votre maison, comme le chauffage, l’éclairage, les volets roulants, les systèmes de sécurité notamment les alarmes.  

Elle vise à **rendre votre quotidien plus simple, plus confortable, plus sûr et plus économe en énergie**. Par exemple, vous pouvez programmer vos volets pour qu’ils s’ouvrent le matin, faire allumer les lumières quand vous rentrez, ou faire baisser le chauffage quand vous êtes absent.  

Le mot vient du latin *domus* (maison) et du suffixe *-tique* (relatif à une technique), donc **la science de la maison**. Aujourd’hui, tout cela se fait souvent via un smartphone, une tablette ou par le biais d'assistant comme Alexa ou Google Home.  
{{< /notice >}}

Voici le type de définition commune que l'on va trouver en cherchant sur internet et en se renseignant dans les boutiques spécialisés où l'on va faire l'éloge de la "maison intelligente".

Pour ma part, ce n'est pas sous cet angle que je souhaite aborder ce qu'est la domotique.

Quelqu'un de curieux cherche à comprendre son environnement pour mieux intéragir avec lui. Le rapport entre le jardinier et son jardin est l'exemple parfait. 

À l'aide d'observations minutieuses, de réflexions et d'apprentissages sur les processus naturels, celui-ci essaye de domestiquer son environement à son profit et en faisant cela il peut-être soit un propagateur de biodiversité soit un destructeur s'il ne fait pas les choses en conscience ou plutôt en bonne intelligence.

À cet effet une foultitude d'outils, de techniques, de savoir-faire ont été créées pour atteindre ses objectifs et, en principe, lui permettre de mieux comprendre les effets de ses choix.

Disons que nous en somme encore là, à chercher à comprendre :) Mais pour comprendre il est nécessaire d'avoir idée précise de ce qui se passe, donc d'avoir de l'information.

C'est là où la domotique peut servir au delà de l'utilisation d'un ènième gadget censé combler notre désir insatiable de facilité et de confort.


Le centre de tout ce processus est la récolte d'information (comme toujours en fait) car ne dit on pas un homme averti en vaut deux.
C'est là, que tout l'intérêt   Pour ensuite l'analyser via un ordinateur et 

Pour reprendre l'exemple du jardinier, il a de très nombreuses informations à rassembler pour décider des actions à mene, et quand les mener pour obtenir un résultat. Souvent en lien avec la météo, plus précisemment les températures, l'humidité, 


La domotique n'est finalement que la somme des données des différents types de capteurs mis en interrelation pour réaliser des automatisations censés élargir notre champ d'action dans notre quotidien

sont la résultantes des  déployés et    
On entendSur le papier on va nous nous  rendre notre habitat "intelligent" mais en réalité ce n'est pas la meilleure façon d'aborder 
<hr>

La domotique, vue sous un angle profondément humain, peut être comprise comme **une extension de nos sens et de notre volonté** — une matérialisation moderne de notre besoin ancestral d’interagir avec l’environnement pour mieux y vivre. 

Plutôt que de la réduire à une simple « maison intelligente », on peut y voir **un système vivant d’interactions**, où capteurs, automates et réseaux forment un **nouvel organe perceptif collectif**.  Ces capteurs — thermiques, de mouvement, d’humidité, sonores — agissent comme des prolongements de nos yeux, oreilles ou peau, percevant des changements que nous ne remarquerions pas.

En reliant ces données et en les traduisant en actions (allumer une lumière, fermer un volet, ajuster le chauffage), la domotique devient **un langage entre l’humain et son habitat**.  Elle ne remplace pas l’action humaine, mais **l’amplifie**, en permettant de réagir à distance, en anticipant nos besoins ou en adaptant l’espace à nos rythmes. 

C’est donc moins une technologie de confort qu’un **outil d’emprise sur le réel**, au service de notre autonomie, de notre sécurité, ou de notre harmonie avec l’environnement.  Dans cette perspective, la domotique n’est pas une rupture, mais **la suite logique de l’instinct humain qui cherche, depuis toujours, à domestiquer le monde — pas seulement la maison, mais la relation entre soi et le monde.**




### Usage avancé : la base de données

<br>

Il y a des données qui sont très intérressantes à suivre dans le temps pour permettre une analyse plus fine ensuite. En particulier les données météorologiques quand on dispose d'une station météo sur son lieu.
{.text-lg .mb-4}
Ici nous procédons depuis peu par ce biais à la collecte systèmatique des données climatiques du lieu, notamment :
{.text-lg .mb-4}
- les précipations en mm et leurs intensitées,
- la vitesse et sens du vent en km/h ainsi que la vitesse en rafale rafales
- les témpératures extérieur et dans la serre bioclimatique
- le taux d'humidité et le point de rosée
- la production photovoltaïque 
- les variations de pressions atmosphériques
- etc .
{.text-lg .mb-4}
Présentement nous testons la possibilité d'exporter certaines données depuis Home Assistant vers une base de donnée, en l'occurence victoriametrics, qui se charge de les collecter et les conserver sur le (très) long terme pour réaliser un suivi de la situation. 
{.text-lg .mb-4}
De plus, d'autres outils comme Graphana permettent ensuite une mise en forme graphique pour une approche plus visuel.
{.text-lg .mb-4}

{{< image src="/images/domotique_serre_graph.png" caption="Graphique de suivie de températures et d'humidités dans la serre, ici sur une durée de 6 heures" alt="Graphique données serre" height="" width="" position="center" command="fill" option="q100" style="height: 400px; width: auto; object-fit: cover; border-radius: 8px;" class="img-fluid" title="" webp="true" >}}

