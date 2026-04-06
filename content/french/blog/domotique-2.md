---
title: "Domotique - usage avancé : la base de données"
meta_title: "Domotique avancée : gérer la base de données Home Assistant"
description: "Optimisez Home Assistant avec Victoriametrics, sélection ainsi que conservation des données à long terme et consultation avec Grafana."
date: 2026-03-29
tags: ["Domotique", "Home Assistant"]
categories: ["Domotique"]
author: "Jean-Georges"
draft : true
---   

<br>

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