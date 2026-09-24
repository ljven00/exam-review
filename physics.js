export const physics = [

    // ============================================================
    // 1. GRANDEURS, UNITÉS ET MESURES
    // ============================================================

    ["Quelle est l'unité SI de la longueur ?", "Le mètre|Le kilomètre|Le centimètre|Le millimètre", 0],

    ["Quelle est l'unité SI de la masse ?", "Le gramme|Le kilogramme|La tonne|La livre", 1],

    ["Quelle est l'unité SI du temps ?", "La minute|L'heure|La seconde|Le jour", 2],

    ["Quelle est l'unité SI de la température thermodynamique ?", "Le degré Celsius|Le kelvin|Le degré Fahrenheit|Le joule", 1],

    ["Quelle est l'unité SI de la quantité de matière ?", "Le kilogramme|Le mole|Le litre|Le gramme", 1],

    ["Quelle est l'unité SI de l'intensité électrique ?", "Le volt|Le watt|L'ampère|L'ohm", 2],

    ["Quelle est l'unité SI de la force ?", "Le joule|Le newton|Le pascal|Le watt", 1],

    ["Quelle est l'unité SI de l'énergie ?", "Le newton|Le watt|Le joule|Le pascal", 2],

    ["Quelle est l'unité SI de la puissance ?", "Le joule|Le watt|Le volt|Le newton", 1],

    ["Quelle est l'unité SI de la pression ?", "Le pascal|Le joule|Le newton|Le watt", 0],

    ["Quelle est l'unité SI de la fréquence ?", "Le hertz|Le watt|Le volt|Le tesla", 0],

    ["Quelle est l'unité SI de la charge électrique ?", "L'ampère|Le coulomb|Le volt|L'ohm", 1],

    ["Quelle est l'unité SI de la tension électrique ?", "Le volt|L'ampère|Le coulomb|Le watt", 0],

    ["Quelle est l'unité SI de la résistance électrique ?", "Le volt|L'ampère|L'ohm|Le watt", 2],

    ["Quelle est l'unité SI de la capacité électrique ?", "Le farad|Le tesla|Le weber|Le henry", 0],

    ["Quelle est l'unité SI de l'inductance ?", "Le farad|Le henry|Le tesla|Le volt", 1],

    ["Quelle est l'unité SI du champ magnétique ?", "Le tesla|Le weber|Le joule|Le pascal", 0],

    ["Quelle est l'unité SI de la quantité de mouvement ?", "kg·m/s|kg·m²/s|N/s|J/s", 0],

    ["Quelle est la dimension physique d'une vitesse ?", "L|L/T|L/T²|T/L", 1],

    ["Quelle est la dimension physique d'une accélération ?", "L/T|L/T²|T/L|L²/T", 1],

    ["Quelle est la dimension physique d'une force ?", "ML/T|ML/T²|ML²/T²|M/T²", 1],

    ["Quelle est la dimension physique d'une énergie ?", "ML/T²|ML²/T²|ML²/T|M/L", 1],

    ["Combien de mètres y a-t-il dans 1 km ?", "10|100|1000|10000", 2],

    ["Combien de secondes y a-t-il dans 1 heure ?", "60|600|3600|6000", 2],

    ["Combien de centimètres y a-t-il dans 2,5 m ?", "25|250|2500|0,25", 1],

    // ============================================================
    // 2. VECTEURS
    // ============================================================

    ["Quelle grandeur physique possède une direction et un sens ?", "Une grandeur scalaire|Une grandeur vectorielle|Une constante|Une unité", 1],

    ["La masse est-elle une grandeur scalaire ou vectorielle ?", "Scalaire|Vectorielle|Les deux toujours|Aucune", 0],

    ["La vitesse est-elle une grandeur scalaire ou vectorielle ?", "Scalaire|Vectorielle|Sans dimension|Toujours constante", 1],

    ["La température est-elle une grandeur vectorielle ?", "Oui|Non|Seulement en thermodynamique|Seulement dans les gaz", 1],

    ["Comment additionne-t-on graphiquement deux vecteurs ?", "En plaçant l'origine du second à l'extrémité du premier|En multipliant leurs normes|En divisant leurs directions|En supprimant leurs sens", 0],

    ["Si deux vecteurs ont la même direction et le même sens, leurs normes s'additionnent pour obtenir la norme de leur somme.", "Vrai|Faux|Seulement pour les forces nulles|Seulement dans trois dimensions", 0],

    ["Deux vecteurs de même norme et de directions opposées ont quelle somme ?", "Une norme maximale|Une somme nulle|Le double de leur norme|Une somme indéfinie", 1],

    ["Quelle composante d'un vecteur de norme F faisant un angle θ avec l'axe x vaut F cos θ ?", "La composante x|La composante y|La composante z|La norme", 0],

    ["Quelle composante d'un vecteur de norme F faisant un angle θ avec l'axe x vaut F sin θ ?", "La composante x|La composante y|La composante z|La norme", 1],

    // ============================================================
    // 3. CINÉMATIQUE
    // ============================================================

    ["Qu'étudie la cinématique ?", "Les causes du mouvement|La description du mouvement|La composition chimique|La température", 1],

    ["Quelle est la formule de la vitesse moyenne ?", "v = Δt/Δx|v = Δx/Δt|v = Δx×Δt|v = Δx+Δt", 1],

    ["Un véhicule parcourt 120 km en 2 h. Quelle est sa vitesse moyenne ?", "30 km/h|60 km/h|120 km/h|240 km/h", 1],

    ["Un coureur parcourt 400 m en 50 s. Quelle est sa vitesse moyenne ?", "4 m/s|8 m/s|20 m/s|450 m/s", 1],

    ["Un objet se déplace à 10 m/s pendant 5 s. Quelle distance parcourt-il ?", "2 m|15 m|50 m|100 m", 2],

    ["Un objet parcourt 100 m à vitesse constante de 20 m/s. Combien de temps met-il ?", "2 s|5 s|20 s|2000 s", 1],

    ["Qu'est-ce qu'un mouvement rectiligne uniforme ?", "Un mouvement à vitesse constante sur une trajectoire droite|Un mouvement avec accélération constante|Un mouvement circulaire|Un mouvement toujours arrêté", 0],

    ["Dans un mouvement rectiligne uniforme, l'accélération est :", "Nulle|Constante et non nulle|Toujours négative|Toujours positive", 0],

    ["Quelle est la formule de l'accélération moyenne ?", "a = Δv/Δt|a = Δt/Δv|a = v×t|a = d/t", 0],

    ["Un véhicule passe de 10 m/s à 30 m/s en 5 s. Quelle est son accélération moyenne ?", "2 m/s²|4 m/s²|6 m/s²|8 m/s²", 1],

    ["Un objet passe de 20 m/s à 5 m/s en 3 s. Quelle est son accélération moyenne ?", "-5 m/s²|-15 m/s²|5 m/s²|15 m/s²", 0],

    ["Si l'accélération est positive dans le sens du mouvement, la vitesse :", "Augmente|Diminue toujours|Reste toujours nulle|Change forcément de direction", 0],

    ["Si la vitesse d'un objet est constante, son accélération est :", "Toujours nulle|Toujours positive|Toujours négative|Impossible à déterminer", 0],

    ["Quelle équation décrit un mouvement uniformément accéléré sans utiliser explicitement le temps ?", "v² = v₀² + 2aΔx|v = Δx/t|P = W/t|F = ma", 0],

    ["Quelle équation donne la position dans un mouvement à accélération constante ?", "x = x₀ + v₀t + 1/2 at²|x = vt²|x = at|x = v/a", 0],

    ["Un objet part du repos avec une accélération de 2 m/s² pendant 5 s. Quelle est sa vitesse finale ?", "2 m/s|5 m/s|10 m/s|25 m/s", 2],

    ["Un objet part du repos avec a = 4 m/s² pendant 3 s. Quelle distance parcourt-il ?", "6 m|12 m|18 m|36 m", 2],

    ["Un objet tombe librement sans résistance de l'air. Quelle est approximativement son accélération près de la surface terrestre ?", "0 m/s²|4,9 m/s²|9,8 m/s²|98 m/s²", 2],

    ["Lors d'une chute libre idéale, quelle quantité reste constante ?", "La vitesse|L'accélération gravitationnelle|La position|La distance parcourue", 1],

    ["Si on néglige la résistance de l'air, deux objets de masses différentes lâchés simultanément d'une même hauteur ont-ils la même accélération ?", "Oui|Non|Seulement si leur masse est égale|Seulement dans l'espace", 0],

    // ============================================================
    // 4. MOUVEMENT CIRCULAIRE
    // ============================================================

    ["Quelle est la trajectoire d'un mouvement circulaire uniforme ?", "Une droite|Une ellipse obligatoire|Un cercle|Une parabole", 2],

    ["Dans un mouvement circulaire uniforme, la norme de la vitesse est :", "Constante|Toujours nulle|Toujours croissante|Toujours décroissante", 0],

    ["Dans un mouvement circulaire uniforme, la direction de la vitesse :", "Reste constante|Change continuellement|Est toujours verticale|Est toujours horizontale", 1],

    ["Vers où est dirigée l'accélération centripète ?", "Vers l'extérieur du cercle|Vers le centre du cercle|Dans la direction de la vitesse|Vers le haut", 1],

    ["Quelle est la formule de l'accélération centripète ?", "a = v²/r|a = vr|a = r/v²|a = v/r²", 0],

    ["Un objet tourne avec v = 10 m/s sur un cercle de rayon 5 m. Quelle est son accélération centripète ?", "2 m/s²|10 m/s²|20 m/s²|50 m/s²", 2],

    ["Quelle relation relie la vitesse linéaire v, le rayon r et la vitesse angulaire ω ?", "v = rω|v = r/ω|v = ω/r|v = r+ω", 0],

    ["Quelle est l'unité SI de la vitesse angulaire ?", "m/s|rad/s|Hz/s|N/m", 1],

    ["Quelle relation existe entre fréquence f et période T ?", "T = f|T = 1/f|T = f²|T = 2f", 1],

    ["Un mouvement a une fréquence de 5 Hz. Quelle est sa période ?", "5 s|0,5 s|0,2 s|25 s", 2],

    // ============================================================
    // 5. DYNAMIQUE ET LOIS DE NEWTON
    // ============================================================

    ["Qu'étudie la dynamique ?", "Les causes du mouvement|Uniquement la position|La température|La lumière", 0],

    ["Quelle est la première loi de Newton ?", "Principe d'inertie|Principe fondamental de la dynamique|Principe d'action-réaction|Loi de gravitation", 0],

    ["Selon le principe d'inertie, un corps soumis à une résultante des forces nulle :", "Est nécessairement immobile|Conserve son état de mouvement rectiligne uniforme|Accélère toujours|Change toujours de direction", 1],

    ["Quelle est la deuxième loi de Newton ?", "F = ma|E = mc²|P = UI|V = RI", 0],

    ["Un objet de masse 5 kg subit une force résultante de 20 N. Quelle est son accélération ?", "2 m/s²|4 m/s²|5 m/s²|100 m/s²", 1],

    ["Une force de 50 N agit sur une masse de 10 kg. Quelle est l'accélération ?", "0,2 m/s²|5 m/s²|10 m/s²|500 m/s²", 1],

    ["Si la force résultante sur un objet double tandis que sa masse reste constante, son accélération :", "Double|Est divisée par deux|Reste identique|Devient nulle", 0],

    ["Si la masse double tandis que la force reste constante, l'accélération :", "Double|Est divisée par deux|Reste identique|Devient quatre fois plus grande", 1],

    ["Quelle est la troisième loi de Newton ?", "Action-réaction|Inertie|Conservation de l'énergie|Gravitation universelle", 0],

    ["Les forces d'action et de réaction agissent-elles sur le même objet ?", "Oui|Non|Toujours dans certains cas|Seulement dans le vide", 1],

    ["Quel est le poids d'un objet ?", "La force gravitationnelle exercée sur lui|Sa masse|Son volume|Sa densité", 0],

    ["Quelle est la formule du poids près de la surface terrestre ?", "P = mg|P = m/g|P = g/m|P = mv", 0],

    ["Quel est approximativement le poids d'une masse de 10 kg sur Terre ?", "9,8 N|49 N|98 N|980 N", 2],

    ["La masse d'un objet dépend-elle de sa localisation ?", "Non, dans le cadre classique|Oui, elle double sur la Lune|Oui, elle dépend directement de g|Toujours", 0],

    ["Le poids d'un objet est-il le même sur la Terre et sur la Lune ?", "Oui|Non|Seulement pour les objets lourds|Seulement pour les objets légers", 1],

    ["Qu'est-ce que la force normale ?", "La force exercée par une surface perpendiculairement à celle-ci|Une force toujours horizontale|Une force gravitationnelle|Une force magnétique uniquement", 0],

    ["Qu'est-ce que la force de frottement ?", "Une force qui s'oppose généralement au mouvement relatif entre surfaces en contact|Une force qui augmente toujours la vitesse|Une force gravitationnelle|Une force nucléaire", 0],

    ["Le frottement statique peut-il empêcher un objet de commencer à glisser ?", "Oui|Non|Jamais|Seulement dans le vide", 0],

    ["Quelle relation donne le frottement cinétique dans un modèle simple ?", "f = μN|f = μ/N|f = N/μ|f = μ+N", 0],

    ["Que représente μ dans la relation f = μN ?", "Le coefficient de frottement|La masse|La vitesse|La puissance", 0],

    // ============================================================
    // 6. TRAVAIL, ÉNERGIE ET PUISSANCE
    // ============================================================

    ["Qu'est-ce que le travail d'une force ?", "Une quantité liée à l'action d'une force sur un déplacement|Une masse|Une vitesse|Une pression", 0],

    ["Quelle est la formule du travail d'une force constante parallèle au déplacement ?", "W = Fd|W = F/d|W = d/F|W = F+d", 0],

    ["Quelle est l'unité du travail mécanique ?", "Newton|Joule|Watt|Pascal", 1],

    ["Une force de 20 N déplace un objet de 5 m dans la même direction. Quel travail fournit-elle ?", "4 J|25 J|100 J|200 J", 2],

    ["Si une force est perpendiculaire au déplacement, son travail est :", "Maximum|Nul|Toujours négatif|Infini", 1],

    ["Quel est le travail du poids lors d'une montée verticale ?", "Positif|Négatif|Toujours nul|Infini", 1],

    ["Quel est le travail du poids lors d'une descente verticale ?", "Positif|Négatif|Toujours nul|Impossible à calculer", 0],

    ["Quelle est l'énergie cinétique d'un objet ?", "E_c = 1/2 mv²|E_c = mv|E_c = mg|E_c = m/v", 0],

    ["Quelle est l'énergie cinétique d'une masse de 2 kg se déplaçant à 3 m/s ?", "3 J|6 J|9 J|18 J", 2],

    ["Si la vitesse d'un objet double, son énergie cinétique est :", "Doublée|Multipliée par 4|Divisée par 2|Inchangée", 1],

    ["Quelle est l'énergie potentielle gravitationnelle près de la surface terrestre ?", "E_p = mgh|E_p = mg/h|E_p = mv²|E_p = F/t", 0],

    ["Une masse de 2 kg est à 5 m de hauteur. Avec g = 10 m/s², quelle est son énergie potentielle ?", "10 J|50 J|100 J|200 J", 2],

    ["Quel principe affirme que l'énergie totale d'un système isolé se conserve ?", "Principe de conservation de l'énergie|Principe d'inertie|Principe d'action-réaction|Loi d'Ohm", 0],

    ["Qu'est-ce que la puissance ?", "La vitesse à laquelle un travail ou un transfert d'énergie est effectué|Une force|Une énergie totale|Une masse", 0],

    ["Quelle est la formule de la puissance moyenne ?", "P = W/t|P = Wt|P = t/W|P = F/t", 0],

    ["Un moteur réalise un travail de 6000 J en 30 s. Quelle est sa puissance moyenne ?", "20 W|100 W|200 W|180000 W", 2],

    ["Quelle est la relation entre puissance, force et vitesse lorsque la force est parallèle à la vitesse ?", "P = Fv|P = F/v|P = F+v|P = v/F", 0],

    ["Qu'est-ce que le rendement d'une machine ?", "Le rapport entre l'énergie utile et l'énergie fournie|La masse divisée par la vitesse|La force multipliée par le temps|La puissance totale uniquement", 0],

    ["Un moteur reçoit 1000 J et fournit 800 J d'énergie utile. Quel est son rendement ?", "20 %|50 %|80 %|125 %", 2],

    // ============================================================
    // 7. QUANTITÉ DE MOUVEMENT ET COLLISIONS
    // ============================================================

    ["Quelle est la formule de la quantité de mouvement ?", "p = mv|p = m/v|p = ma|p = F/t", 0],

    ["Quelle est l'unité SI de la quantité de mouvement ?", "kg·m/s|N·m|J/s|kg/s²", 0],

    ["Une masse de 4 kg se déplace à 5 m/s. Quelle est sa quantité de mouvement ?", "9 kg·m/s|20 kg·m/s|25 kg·m/s|40 kg·m/s", 1],

    ["Si la vitesse d'un objet double, sa quantité de mouvement :", "Double|Quadruple|Est divisée par deux|Reste identique", 0],

    ["Dans un système isolé, la quantité de mouvement totale :", "Se conserve|Disparaît|Double toujours|Devient nulle", 0],

    ["Lors d'une collision parfaitement inélastique, les deux objets :", "Restent séparés avec des vitesses différentes|Restent ensemble après la collision|Ne subissent aucune force|Perdent nécessairement toute leur masse", 1],

    ["Lors d'une collision élastique idéale, quelle quantité est conservée en plus de la quantité de mouvement ?", "L'énergie cinétique|La température uniquement|Le volume|La pression", 0],

    ["Quelle relation relie l'impulsion à la variation de quantité de mouvement ?", "J = Δp|J = p/t|J = p²|J = m/p", 0],

    ["L'impulsion d'une force constante est égale à :", "FΔt|F/Δt|Δt/F|F+Δt", 0],

    ["Pourquoi les airbags réduisent-ils généralement les blessures lors d'une collision ?", "Ils augmentent le temps de collision et réduisent la force moyenne pour une même variation de quantité de mouvement|Ils augmentent la masse du passager|Ils suppriment la gravité|Ils rendent la voiture immobile avant l'impact", 0],

    // ============================================================
    // 8. GRAVITATION
    // ============================================================

    ["Quelle loi décrit l'attraction gravitationnelle entre deux masses ?", "Loi de gravitation universelle|Loi d'Ohm|Loi de Hooke|Loi de Snell", 0],

    ["Quelle est la formule de la force gravitationnelle entre deux masses ?", "F = Gm₁m₂/r²|F = Gm₁m₂r²|F = G(r²/m₁m₂)|F = m₁m₂/Gr", 0],

    ["Si la distance entre deux masses double, la force gravitationnelle devient :", "Deux fois plus grande|Quatre fois plus grande|Quatre fois plus petite|Deux fois plus petite", 2],

    ["Si une des deux masses double, la force gravitationnelle :", "Double|Est divisée par deux|Quadruple|Reste constante", 0],

    ["Que représente G dans la loi de gravitation ?", "La constante gravitationnelle universelle|L'accélération terrestre|La masse de la Terre|La vitesse de la lumière", 0],

    ["Pourquoi les astronautes en orbite semblent-ils être en apesanteur ?", "Parce qu'ils sont en chute libre permanente autour de la Terre|Parce que la gravité terrestre est exactement nulle|Parce qu'ils n'ont plus de masse|Parce que l'air les pousse", 0],

    ["La Lune reste en orbite autour de la Terre principalement grâce à :", "La gravitation|La pression atmosphérique|Le vent solaire uniquement|La force électrique", 0],

    ["Qu'est-ce que la vitesse de libération ?", "La vitesse minimale idéale nécessaire pour échapper à l'attraction gravitationnelle sans propulsion supplémentaire|La vitesse d'un satellite géostationnaire|La vitesse du son|La vitesse de rotation de la Terre", 0],

    // ============================================================
    // 9. FLUIDES ET PRESSION
    // ============================================================

    ["Quelle est la définition de la pression ?", "Force par unité de surface|Masse par unité de volume|Énergie par unité de temps|Distance par unité de temps", 0],

    ["Quelle est la formule de la pression ?", "P = F/S|P = FS|P = S/F|P = F+S", 0],

    ["Une force de 100 N agit sur une surface de 2 m². Quelle pression produit-elle ?", "20 Pa|50 Pa|100 Pa|200 Pa", 1],

    ["Si la même force agit sur une surface deux fois plus petite, la pression :", "Double|Est divisée par deux|Reste constante|Devient nulle", 0],

    ["Quelle est la pression exercée par un liquide au repos qui augmente avec la profondeur ?", "P = P₀ + ρgh|P = ρ/hg|P = ρg/h|P = h/ρg", 0],

    ["Pourquoi la pression dans l'eau augmente-t-elle avec la profondeur ?", "Parce que la colonne de liquide au-dessus devient plus importante|Parce que l'eau devient plus légère|Parce que la gravité disparaît|Parce que la température devient toujours nulle", 0],

    ["Qu'est-ce que la masse volumique ?", "La masse par unité de volume|Le volume par unité de masse|La force par unité de surface|La masse multipliée par le volume", 0],

    ["Quelle est la formule de la masse volumique ?", "ρ = m/V|ρ = V/m|ρ = mv|ρ = m+V", 0],

    ["Une masse de 2 kg occupe un volume de 0,5 m³. Quelle est sa masse volumique ?", "1 kg/m³|2 kg/m³|4 kg/m³|8 kg/m³", 2],

    ["Quel principe explique pourquoi un objet reçoit une poussée vers le haut lorsqu'il est immergé dans un fluide ?", "Principe d'Archimède|Principe de Pascal|Loi d'Ohm|Principe d'inertie", 0],

    ["La poussée d'Archimède est égale :", "Au poids du fluide déplacé|Au poids de l'objet dans tous les cas|À la masse de l'objet|À la pression atmosphérique", 0],

    ["Un objet flotte lorsque, dans l'équilibre idéal, sa masse volumique moyenne est :", "Supérieure à celle du fluide|Inférieure à celle du fluide|Toujours égale à zéro|Indépendante du fluide", 1],

    ["Quel principe affirme qu'une variation de pression appliquée à un fluide incompressible confiné se transmet dans toutes les directions ?", "Principe de Pascal|Principe d'Archimède|Principe de Bernoulli|Principe de Newton", 0],

    ["Quel dispositif utilise le principe de Pascal ?", "Presse hydraulique|Thermomètre|Moteur électrique uniquement|Baromètre", 0],

    ["Quelle équation exprime la conservation du débit volumique pour un fluide incompressible ?", "A₁v₁ = A₂v₂|A₁/v₁ = A₂/v₂|A₁+A₂=v₁+v₂|A₁v₁²=A₂v₂²", 0],

    ["Dans un tuyau horizontal, si la section diminue pour un fluide incompressible, la vitesse du fluide :", "Augmente|Diminue|Reste toujours nulle|Devient négative", 0],

    ["Selon le principe de Bernoulli, dans certaines conditions, une augmentation de la vitesse d'un fluide s'accompagne d'une diminution de :", "Sa pression statique|Sa masse|Sa température absolue nécessairement|Son volume total", 0],

    // ============================================================
    // 10. THERMODYNAMIQUE
    // ============================================================

    ["Qu'étudie la thermodynamique ?", "Les relations entre chaleur, travail, énergie et température|Uniquement la lumière|Uniquement les forces électriques|Uniquement les mouvements circulaires", 0],

    ["Quelle est l'unité SI de l'énergie thermique ?", "Joule|Watt|Kelvin|Pascal", 0],

    ["Qu'est-ce que la température mesure principalement ?", "L'état thermique lié notamment à l'agitation microscopique des particules|La masse d'un corps|Son volume uniquement|Sa pression uniquement", 0],

    ["Quelle température correspond approximativement à 0 °C en kelvins ?", "0 K|100 K|273 K|373 K", 2],

    ["Quelle température correspond approximativement à 100 °C en kelvins ?", "173 K|273 K|373 K|473 K", 2],

    ["Quelle est la relation approximative entre kelvins et degrés Celsius ?", "K = °C + 273,15|K = °C - 273,15|K = 2°C|K = °C/273,15", 0],

    ["Qu'est-ce que la chaleur ?", "Un transfert d'énergie dû à une différence de température|Une température|Une masse|Une pression", 0],

    ["Dans quel sens la chaleur se transfère-t-elle spontanément ?", "Du corps chaud vers le corps froid|Du corps froid vers le corps chaud|Toujours vers le vide|Toujours vers le plus lourd", 0],

    ["Quels sont les trois principaux modes de transfert thermique ?", "Conduction, convection et rayonnement|Fusion, vaporisation et sublimation|Compression, expansion et rotation|Réflexion, réfraction et diffraction", 0],

    ["Quel mode de transfert thermique peut se produire dans le vide ?", "Rayonnement|Conduction uniquement|Convection uniquement|Aucun", 0],

    ["Quel mode de transfert implique généralement le déplacement macroscopique d'un fluide ?", "Convection|Conduction|Rayonnement|Diffraction", 0],

    ["Quel mode de transfert thermique est dominant dans un métal solide ?", "Conduction|Convection|Rayonnement uniquement|Évaporation", 0],

    ["Quelle quantité mesure la capacité d'un matériau à conduire la chaleur ?", "Conductivité thermique|Masse volumique uniquement|Pression|Résistance électrique", 0],

    ["Que se passe-t-il généralement lorsqu'un gaz est chauffé à pression constante ?", "Son volume augmente|Son volume devient nécessairement nul|Sa masse double|Sa pression devient nulle", 0],

    ["Que se passe-t-il généralement lorsqu'un gaz est comprimé à température constante ?", "Sa pression augmente|Sa pression diminue toujours|Sa masse disparaît|Sa température devient nulle", 0],

    ["Quelle loi relie pression et volume d'un gaz à température constante ?", "Loi de Boyle-Mariotte|Loi de Hooke|Loi de Snell|Loi d'Ohm", 0],

    ["Selon la loi de Boyle-Mariotte, à température constante :", "PV = constante|P/V = constante|P+V=constante|P-V=constante", 0],

    ["Quelle loi relie volume et température absolue à pression constante ?", "Loi de Charles|Loi de Boyle|Loi de Coulomb|Loi de Faraday", 0],

    ["Quelle équation représente le gaz parfait ?", "PV = nRT|PV = n/R/T|P = nVT|PV = RT/n", 0],

    ["Que représente R dans l'équation des gaz parfaits ?", "La constante des gaz parfaits|Le rayon du gaz|La résistance électrique|Le rendement", 0],

    ["Quelle loi thermodynamique est liée à la conservation de l'énergie ?", "Première loi de la thermodynamique|Deuxième loi uniquement|Loi de Boyle|Loi de Hooke", 0],

    ["Quelle grandeur thermodynamique est associée à l'irréversibilité et au désordre microscopique ?", "Entropie|Pression|Masse|Charge", 0],

    ["Selon la deuxième loi de la thermodynamique, l'entropie totale d'un système isolé :", "Ne diminue pas spontanément|Diminue toujours|Est toujours nulle|Double toujours", 0],

    // ============================================================
    // 11. CHANGEMENTS D'ÉTAT
    // ============================================================

    ["Comment appelle-t-on le passage de l'état solide à l'état liquide ?", "Fusion|Vaporisation|Condensation|Sublimation", 0],

    ["Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?", "Vaporisation|Fusion|Solidification|Condensation", 0],

    ["Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?", "Condensation|Fusion|Sublimation|Solidification", 0],

    ["Comment appelle-t-on le passage de l'état liquide à l'état solide ?", "Solidification|Fusion|Vaporisation|Sublimation", 0],

    ["Comment appelle-t-on le passage direct du solide au gaz ?", "Sublimation|Fusion|Condensation|Solidification", 0],

    ["Comment appelle-t-on le passage direct du gaz au solide ?", "Condensation solide ou déposition|Fusion|Vaporisation|Ionisation", 0],

    ["Pendant la fusion d'un corps pur à pression constante, sa température :", "Reste généralement constante pendant le changement d'état|Augmente toujours|Diminue toujours|Devient nulle", 0],

    ["Quelle quantité de chaleur est nécessaire pour changer l'état d'une masse m sans variation de température ?", "Q = mL|Q = mcΔT|Q = m/L|Q = L/m", 0],

    ["Que représente L dans Q = mL ?", "La chaleur latente massique|La longueur|La puissance|La luminosité", 0],

    ["Quelle relation donne la chaleur nécessaire pour modifier la température d'une masse sans changement d'état ?", "Q = mcΔT|Q = mL|Q = c/mΔT|Q = m/cΔT", 0],

    ["Que représente c dans Q = mcΔT ?", "La capacité thermique massique|La vitesse|La concentration|La charge", 0],

    // ============================================================
    // 12. OSCILLATIONS ET ONDES
    // ============================================================

    ["Qu'est-ce qu'une onde ?", "Une perturbation qui se propage et transporte de l'énergie|Un objet matériel obligatoire|Une force statique|Une température", 0],

    ["Une onde mécanique nécessite-t-elle généralement un milieu matériel ?", "Oui|Non|Seulement dans le vide|Seulement pour la lumière", 0],

    ["La lumière peut-elle se propager dans le vide ?", "Oui|Non|Seulement à haute pression|Seulement dans l'eau", 0],

    ["Quelle grandeur représente le nombre d'oscillations par seconde ?", "Fréquence|Période|Amplitude|Longueur d'onde", 0],

    ["Quelle est l'unité de la fréquence ?", "Hertz|Seconde|Mètre|Joule", 0],

    ["Quelle relation existe entre fréquence et période ?", "f = 1/T|f = T|f = T²|f = 2T", 0],

    ["Qu'est-ce que l'amplitude d'une onde ?", "L'écart maximal par rapport à la position d'équilibre|Le nombre d'oscillations|La vitesse de propagation|La période", 0],

    ["Qu'est-ce que la longueur d'onde ?", "La distance entre deux points successifs en phase|Le temps d'une oscillation|La hauteur de l'onde uniquement|La fréquence", 0],

    ["Quelle relation lie vitesse de propagation, fréquence et longueur d'onde ?", "v = λf|v = λ/f|v = f/λ|v = λ+f", 0],

    ["Une onde a une fréquence de 10 Hz et une longueur d'onde de 2 m. Quelle est sa vitesse ?", "5 m/s|10 m/s|20 m/s|40 m/s", 2],

    ["Si la fréquence d'une onde augmente dans un même milieu, sa longueur d'onde :", "Diminue|Augmente toujours|Reste nécessairement identique|Devient nulle", 0],

    ["Quelle différence existe entre une onde transversale et une onde longitudinale ?", "La direction de la perturbation par rapport à la propagation|La vitesse uniquement|La fréquence uniquement|L'énergie uniquement", 0],

    ["Les ondes sonores dans l'air sont principalement :", "Longitudinales|Transversales|Électromagnétiques|Stationnaires uniquement", 0],

    ["Les ondes électromagnétiques sont-elles longitudinales ou transversales dans le vide ?", "Transversales|Longitudinales|Les deux simultanément|Aucune", 0],

    ["Qu'est-ce qu'une onde stationnaire ?", "Une onde résultant notamment de la superposition de deux ondes opposées de même fréquence dans certaines conditions|Une onde qui ne transporte jamais d'énergie|Une onde toujours lumineuse|Une onde sans amplitude", 0],

    ["Qu'est-ce qu'un nœud dans une onde stationnaire ?", "Un point d'amplitude nulle|Un point d'amplitude maximale|La source de l'onde|La fréquence", 0],

    ["Qu'est-ce qu'un ventre dans une onde stationnaire ?", "Un point d'amplitude maximale|Un point d'amplitude nulle|La longueur d'onde|La source", 0],

    // ============================================================
    // 13. ACOUSTIQUE
    // ============================================================

    ["Le son est-il une onde électromagnétique ?", "Oui|Non|Seulement dans le vide|Seulement à haute fréquence", 1],

    ["Le son peut-il se propager dans le vide ?", "Oui|Non|Seulement très lentement|Seulement à température élevée", 1],

    ["Dans quel milieu le son se propage-t-il généralement le plus rapidement ?", "Les solides|Les liquides|Les gaz|Le vide", 0],

    ["Quelle grandeur physique est principalement associée à la hauteur d'un son ?", "Fréquence|Amplitude|Énergie|Pression atmosphérique", 0],

    ["Quelle grandeur est principalement liée à l'intensité sonore perçue ?", "Amplitude de l'onde|Fréquence uniquement|Longueur d'onde uniquement|Période uniquement", 0],

    ["Un son de fréquence plus élevée est perçu comme :", "Plus aigu|Plus grave|Plus silencieux|Plus lent", 0],

    ["Un son de fréquence plus faible est perçu comme :", "Plus grave|Plus aigu|Plus lumineux|Plus intense obligatoirement", 0],

    ["Quel phénomène se produit lorsqu'une onde sonore rencontre une surface et revient ?", "Réflexion|Réfraction|Diffraction uniquement|Polarisation", 0],

    ["Comment appelle-t-on la répétition d'un son due à sa réflexion ?", "Écho|Résonance uniquement|Interférence|Dispersion", 0],

    ["Qu'est-ce que la résonance ?", "Une forte réponse d'un système lorsqu'il est excité près d'une fréquence naturelle|Une perte totale d'énergie|Une réflexion lumineuse|Une baisse obligatoire de fréquence", 0],

    ["Quelle plage de fréquences est approximativement audible pour un humain jeune ?", "20 Hz à 20 kHz|2 Hz à 200 Hz|200 Hz à 2000 Hz|200 kHz à 2 MHz", 0],

    ["Les ultrasons ont une fréquence :", "Inférieure à 20 Hz|Supérieure à environ 20 kHz|Égale à zéro|Toujours égale à 100 Hz", 1],

    ["Les infrasons ont une fréquence :", "Inférieure à environ 20 Hz|Supérieure à 20 kHz|Égale à 20 kHz|Toujours égale à 1 MHz", 0],

    // ============================================================
    // 14. OPTIQUE GÉOMÉTRIQUE
    // ============================================================

    ["Dans un milieu homogène et transparent, la lumière se propage généralement :", "En ligne droite|En cercle|En spirale|Sans direction", 0],

    ["Quel phénomène décrit le changement de direction de la lumière lorsqu'elle passe d'un milieu à un autre ?", "Réfraction|Réflexion|Diffraction|Interférence", 0],

    ["Quel phénomène correspond au retour de la lumière sur une surface ?", "Réflexion|Réfraction|Dispersion|Polarisation", 0],

    ["Quelle loi relie les angles d'incidence et de réflexion ?", "L'angle d'incidence est égal à l'angle de réflexion|Ils sont toujours complémentaires|L'angle de réflexion est toujours double|Ils sont toujours nuls", 0],

    ["Quel instrument utilise un système de lentilles pour grossir les objets très éloignés ?", "Télescope|Microscope|Thermomètre|Baromètre", 0],

    ["Quel instrument utilise des lentilles pour observer des objets très petits ?", "Microscope|Télescope|Radar|Baromètre", 0],

    ["Une lentille convergente est généralement plus épaisse :", "Au centre qu'aux bords|Aux bords qu'au centre|Partout identique|Uniquement à gauche", 0],

    ["Une lentille divergente est généralement :", "Plus épaisse aux bords qu'au centre|Plus épaisse au centre|Plate obligatoirement|Sphérique uniquement", 0],

    ["Quel type de lentille peut former une image réelle d'un objet réel selon sa position ?", "Lentille convergente|Lentille divergente uniquement|Miroir plan uniquement|Aucune lentille", 0],

    ["Quelle relation est connue sous le nom de relation de conjugaison des lentilles minces ?", "1/f = 1/p + 1/p'|f = p+p'|f = pp'|1/f = p-p'", 0],

    ["Que représente la distance focale d'une lentille ?", "La distance entre le centre optique et le foyer|La distance entre l'objet et l'image|Le diamètre de la lentille|La hauteur de l'objet", 0],

    ["Quelle est l'unité de la puissance optique d'une lentille ?", "Dioptrie|Pascal|Tesla|Lux", 0],

    ["Quelle est la relation entre puissance optique C et distance focale f en mètres ?", "C = 1/f|C = f|C = f²|C = 1/f²", 0],

    ["Une lentille de distance focale 0,5 m possède une puissance de :", "0,5 dioptrie|1 dioptrie|2 dioptries|5 dioptries", 2],

    ["Quel phénomène explique notamment la séparation de la lumière blanche en plusieurs couleurs par un prisme ?", "Dispersion|Réflexion totale|Diffraction uniquement|Polarisation", 0],

    ["Quelle couleur possède la plus grande longueur d'onde dans le spectre visible ?", "Rouge|Vert|Bleu|Violet", 0],

    ["Quelle couleur possède la plus petite longueur d'onde dans le spectre visible ?", "Rouge|Jaune|Bleu|Violet", 3],

    ["Qu'est-ce que la réflexion totale interne ?", "Un phénomène où la lumière est entièrement réfléchie dans un milieu lorsqu'elle passe vers un milieu moins réfringent au-delà de l'angle critique|Une absorption totale|Une émission de lumière|Une diffraction", 0],

    ["Quelle technologie repose largement sur la réflexion totale interne ?", "Fibre optique|Moteur thermique|Batterie|Thermomètre", 0],

    // ============================================================
    // 15. ÉLECTRICITÉ
    // ============================================================

    ["Qu'est-ce que le courant électrique ?", "Un déplacement ordonné de charges électriques|Une quantité de chaleur|Une masse|Une onde sonore", 0],

    ["Quelle est l'unité de l'intensité du courant ?", "Ampère|Volt|Ohm|Watt", 0],

    ["Quelle est l'unité de la tension électrique ?", "Volt|Ampère|Ohm|Coulomb", 0],

    ["Quelle est l'unité de la résistance électrique ?", "Ohm|Volt|Watt|Ampère", 0],

    ["Quelle est la loi d'Ohm ?", "U = RI|U = R/I|U = I/R|U = R+I", 0],

    ["Une résistance de 10 Ω est traversée par un courant de 2 A. Quelle est la tension ?", "5 V|10 V|20 V|40 V", 2],

    ["Une tension de 12 V est appliquée à une résistance de 4 Ω. Quel courant circule ?", "2 A|3 A|4 A|48 A", 1],

    ["Un courant de 5 A traverse une résistance de 6 Ω. Quelle est la tension ?", "11 V|20 V|30 V|36 V", 2],

    ["Quelle relation donne la puissance électrique ?", "P = UI|P = U/I|P = I/U|P = U+I", 0],

    ["Un appareil fonctionne sous 220 V et consomme 2 A. Quelle est sa puissance ?", "110 W|220 W|440 W|880 W", 2],

    ["Quelle autre formule peut donner la puissance dissipée dans une résistance ?", "P = RI²|P = R/I²|P = I/R²|P = R+I²", 0],

    ["Quelle formule donne également la puissance d'une résistance en fonction de U et R ?", "P = U²/R|P = UR²|P = R/U²|P = U/R²", 0],

    ["Dans un circuit en série, le courant est :", "Le même dans tous les composants|Différent dans chaque composant|Toujours nul|Toujours égal à zéro", 0],

    ["Dans un circuit en parallèle, la tension aux bornes de branches idéales est :", "La même|Toujours différente|Nulle|Proportionnelle à la masse", 0],

    ["Deux résistances de 10 Ω montées en série ont une résistance équivalente de :", "5 Ω|10 Ω|20 Ω|100 Ω", 2],

    ["Deux résistances de 10 Ω montées en parallèle ont une résistance équivalente de :", "5 Ω|10 Ω|20 Ω|100 Ω", 0],

    ["Quelle relation donne la résistance équivalente de résistances en série ?", "R_eq = R₁ + R₂ + ...|1/R_eq = R₁+R₂|R_eq = R₁R₂|R_eq = R₁/R₂", 0],

    ["Pour deux résistances en parallèle, quelle relation est correcte ?", "1/R_eq = 1/R₁ + 1/R₂|R_eq = R₁+R₂|R_eq = R₁R₂ toujours|R_eq = R₁/R₂", 0],

    ["Quel composant s'oppose au passage du courant et dissipe généralement de l'énergie sous forme de chaleur ?", "Résistance|Condensateur idéal|Interrupteur ouvert|Diode idéale uniquement", 0],

    ["Quel composant peut stocker de l'énergie dans un champ électrique ?", "Condensateur|Résistance|Fusible|Interrupteur", 0],

    ["Quelle relation définit la capacité électrique ?", "C = Q/U|C = U/Q|C = QU|C = Q+U", 0],

    ["Quelle est l'unité de la capacité ?", "Farad|Coulomb|Volt|Ampère", 0],

    ["Quel composant laisse idéalement passer le courant principalement dans un seul sens ?", "Diode|Résistance|Condensateur|Transformateur", 0],

    ["Quel composant électronique peut être utilisé comme interrupteur commandé et amplificateur ?", "Transistor|Résistance|Fusible|Bobine", 0],

    ["Quel dispositif protège un circuit en fondant lorsque le courant devient trop important ?", "Fusible|Condensateur|Voltmètre|Transformateur", 0],

    // ============================================================
    // 16. CIRCUITS ET MESURES ÉLECTRIQUES
    // ============================================================

    ["Comment branche-t-on un ampèremètre pour mesurer un courant dans une branche ?", "En série|En parallèle|À distance|Sans connexion", 0],

    ["Comment branche-t-on idéalement un voltmètre pour mesurer une tension aux bornes d'un composant ?", "En parallèle|En série|Sans circuit|À la place de la pile uniquement", 0],

    ["Pourquoi un ampèremètre idéal possède-t-il une résistance interne très faible ?", "Pour perturber le moins possible le courant du circuit|Pour augmenter la tension|Pour bloquer le courant|Pour stocker l'énergie", 0],

    ["Pourquoi un voltmètre idéal possède-t-il une très grande résistance interne ?", "Pour tirer un courant presque nul du circuit|Pour augmenter le courant|Pour court-circuiter le circuit|Pour chauffer le circuit", 0],

    ["Qu'est-ce qu'un court-circuit ?", "Une connexion de très faible résistance qui peut provoquer un courant très important|Une interruption du circuit|Une tension nulle partout|Une batterie vide", 0],

    ["Que se passe-t-il dans un circuit ouvert idéal ?", "Le courant est nul|Le courant est maximal|La tension est nécessairement nulle partout|La résistance devient négative", 0],

    ["Dans une pile idéale, quelle grandeur fournit une différence de potentiel ?", "La tension électromotrice|La résistance mécanique|La masse|La fréquence sonore", 0],

    ["Quel dispositif transforme une tension alternative en une autre tension alternative grâce à l'induction électromagnétique ?", "Transformateur|Condensateur|Diode|Résistance", 0],

    ["Un transformateur idéal peut-il augmenter ou diminuer une tension alternative ?", "Oui|Non|Seulement une tension continue|Seulement un courant continu", 0],

    ["Dans un transformateur idéal, si la tension secondaire augmente, le courant secondaire tend à :", "Diminuer pour une même puissance|Augmenter toujours|Rester identique|Devenir nul", 0],

    // ============================================================
    // 17. MAGNÉTISME
    // ============================================================

    ["Qu'est-ce qu'un champ magnétique ?", "Une région de l'espace où des charges en mouvement, courants ou aimants peuvent subir une interaction magnétique|Une région de température élevée|Un champ électrique uniquement|Une région sans force", 0],

    ["Quelle est l'unité du champ magnétique ?", "Tesla|Weber|Volt|Ampère", 0],

    ["Quels sont les deux pôles d'un aimant ?", "Nord et Sud|Est et Ouest|Positif et négatif|Haut et bas", 0],

    ["Deux pôles nord de deux aimants placés face à face :", "Se repoussent|S'attirent|S'annulent toujours|Deviennent neutres", 0],

    ["Un pôle nord et un pôle sud de deux aimants :", "S'attirent|Se repoussent|N'exercent aucune force|S'annulent", 0],

    ["Quel scientifique est associé à la relation entre courant électrique et champ magnétique autour d'un conducteur ?", "Ampère|Newton|Pascal|Archimède", 0],

    ["Quel phénomène produit une force magnétique sur une charge électrique en mouvement ?", "Interaction avec un champ magnétique|Gravitation uniquement|Pression atmosphérique|Conduction thermique", 0],

    ["Une charge électrique immobile dans un champ magnétique uniforme subit-elle une force magnétique ?", "Non, dans le modèle classique|Oui toujours|Oui seulement si elle est positive|Oui seulement si elle est négative", 0],

    ["Quelle loi décrit la force exercée sur une charge en mouvement dans des champs électrique et magnétique ?", "Force de Lorentz|Loi de Hooke|Loi de Snell|Loi de Boyle", 0],

    ["Quel phénomène est à la base du fonctionnement d'un générateur électrique ?", "Induction électromagnétique|Fusion nucléaire|Réfraction|Conduction thermique", 0],

    ["Quel scientifique est associé à la loi de l'induction électromagnétique ?", "Michael Faraday|Newton|Einstein|Boyle", 0],

    ["Que se produit-il lorsqu'un flux magnétique à travers un circuit varie ?", "Une force électromotrice induite peut apparaître|La masse du circuit disparaît|La température devient nulle|Le courant devient nécessairement infini", 0],

    ["Quelle loi détermine le sens du courant induit en s'opposant à la variation du flux qui le produit ?", "Loi de Lenz|Loi d'Ohm|Loi de Boyle|Loi de Hooke", 0],

    // ============================================================
    // 18. ÉLECTROSTATIQUE
    // ============================================================

    ["Quelles sont les deux catégories de charge électrique ?", "Positive et négative|Nord et sud|Chaude et froide|Grande et petite", 0],

    ["Deux charges électriques de même signe :", "Se repoussent|S'attirent|S'annulent toujours|N'interagissent jamais", 0],

    ["Deux charges de signes opposés :", "S'attirent|Se repoussent|N'exercent aucune force|Deviennent neutres automatiquement", 0],

    ["Quelle loi donne la force électrostatique entre deux charges ponctuelles ?", "Loi de Coulomb|Loi d'Ohm|Loi de Newton uniquement|Loi de Hooke", 0],

    ["Selon la loi de Coulomb, si la distance entre deux charges double, la force électrique devient :", "Deux fois plus grande|Quatre fois plus petite|Deux fois plus petite|Inchangée", 1],

    ["Selon la loi de Coulomb, si une charge double, la force électrique :", "Double|Est divisée par deux|Quadruple toujours|Reste identique", 0],

    ["Qu'est-ce qu'un champ électrique ?", "Une région de l'espace où une charge test subirait une force électrique|Une région où il n'existe aucune charge|Une région magnétique uniquement|Une température", 0],

    ["Quelle est l'unité du champ électrique ?", "N/C|C/N|J/C²|W/A", 0],

    ["Quelle relation relie champ électrique, force et charge test ?", "E = F/q|E = Fq|E = q/F|E = F+q", 0],

    ["Dans un champ électrique uniforme, une charge positive libre est accélérée :", "Dans le sens du champ électrique|Dans le sens opposé obligatoirement|Perpendiculairement toujours|Sans accélération", 0],

    // ============================================================
    // 19. PHYSIQUE MODERNE
    // ============================================================

    ["Quelle théorie explique les effets liés aux vitesses proches de celle de la lumière ?", "Relativité|Thermodynamique classique uniquement|Mécanique des fluides|Optique géométrique", 0],

    ["Quelle équation célèbre relie masse et énergie au repos ?", "E = mc²|E = mv²|E = ma|E = m/c²", 0],

    ["Que représente c dans E = mc² ?", "La vitesse de la lumière dans le vide|La vitesse du son|La capacité électrique|La chaleur spécifique", 0],

    ["Selon la relativité restreinte, la vitesse de la lumière dans le vide est :", "La même pour tous les observateurs inertiels|Variable selon la couleur|Toujours inférieure à celle du son|Nulle", 0],

    ["Qu'est-ce que la dilatation du temps ?", "Le temps propre d'un objet en mouvement relatif peut être mesuré différemment par un autre observateur|Le temps disparaît|Les horloges deviennent toujours plus rapides|La gravité devient nulle", 0],

    ["Qu'est-ce que la contraction des longueurs ?", "Une longueur mesurée dans la direction du mouvement peut apparaître plus courte pour un observateur relatif|Un objet perd réellement de la matière|Un objet devient plus lourd|La température diminue", 0],

    ["Quel domaine étudie les phénomènes à l'échelle atomique et subatomique ?", "Mécanique quantique|Mécanique classique uniquement|Hydraulique|Acoustique", 0],

    ["Qu'est-ce qu'un photon ?", "Un quantum du champ électromagnétique|Un proton|Un neutron|Un électron", 0],

    ["L'énergie d'un photon est donnée par :", "E = hf|E = h/f|E = f/h|E = h+f", 0],

    ["Que représente h dans E = hf ?", "La constante de Planck|La constante gravitationnelle|La vitesse de la lumière|La charge élémentaire", 0],

    ["Si la fréquence d'un photon double, son énergie :", "Double|Est divisée par deux|Quadruple|Reste constante", 0],

    ["Quel phénomène a contribué à montrer que la lumière peut être décrite comme constituée de quanta d'énergie ?", "Effet photoélectrique|Réfraction|Conduction|Fusion", 0],

    ["Qu'est-ce que l'effet photoélectrique ?", "L'émission d'électrons par une surface lorsqu'elle reçoit une lumière suffisamment énergétique|La réflexion totale|La fusion d'un métal|La production de chaleur uniquement", 0],

    ["Pourquoi augmenter uniquement l'intensité d'une lumière sous une fréquence seuil ne suffit-il pas à produire l'effet photoélectrique ?", "Parce que l'énergie de chaque photon dépend de sa fréquence|Parce que la lumière n'a aucune énergie|Parce que les électrons n'ont aucune charge|Parce que l'intensité réduit toujours la fréquence", 0],

    ["Quel modèle décrit les électrons d'un atome comme occupant des niveaux d'énergie quantifiés ?", "Modèle quantique de l'atome|Modèle classique des fluides|Modèle de Newton|Modèle de Hooke", 0],

    ["Lorsqu'un électron passe d'un niveau d'énergie supérieur à un niveau inférieur, l'atome peut :", "Émettre un photon|Absorber toujours un neutron|Émettre un proton|Perdre toute sa masse", 0],

    ["Qu'est-ce qu'un isotope ?", "Un atome d'un même élément ayant un nombre différent de neutrons|Un atome ayant un nombre différent de protons et le même élément|Une molécule toujours radioactive|Un ion négatif", 0],

    ["Quelle particule détermine l'identité chimique d'un élément ?", "Proton|Neutron|Électron externe uniquement|Photon", 0],

    ["Quelle particule possède une charge électrique négative ?", "Électron|Proton|Neutron|Photon", 0],

    ["Quelle particule est électriquement neutre ?", "Neutron|Proton|Électron|Ion", 0],

    // ============================================================
    // 20. RADIOACTIVITÉ ET NUCLÉAIRE
    // ============================================================

    ["Qu'est-ce que la radioactivité ?", "La transformation spontanée de noyaux atomiques instables avec émission de rayonnements|La production de lumière visible uniquement|La combustion d'un matériau|La conduction électrique", 0],

    ["Quels sont les trois principaux types historiques de rayonnement nucléaire ?", "Alpha, bêta et gamma|Rouge, vert et bleu|Proton, neutron et électron|X, Y et Z", 0],

    ["Le rayonnement alpha est constitué principalement de :", "Noyaux d'hélium|Électrons|Photons|Neutrons", 0],

    ["Le rayonnement bêta peut être constitué de :", "Électrons ou positrons|Noyaux d'hélium uniquement|Photons uniquement|Neutrons uniquement", 0],

    ["Le rayonnement gamma est constitué de :", "Photons de haute énergie|Électrons|Protons|Neutrons", 0],

    ["Quel rayonnement possède généralement le plus grand pouvoir de pénétration parmi alpha, bêta et gamma ?", "Gamma|Alpha|Bêta|Tous exactement identiques", 0],

    ["Qu'est-ce que la demi-vie radioactive ?", "Le temps nécessaire pour que la moitié des noyaux radioactifs initiaux se désintègrent|Le temps pour que toute la matière disparaisse|Le temps pour doubler la masse|Le temps nécessaire pour arrêter toute radiation", 0],

    ["Après une demi-vie, quelle fraction de noyaux radioactifs initiaux reste-t-il ?", "1/4|1/2|1/3|3/4", 1],

    ["Après deux demi-vies, quelle fraction reste-t-il ?", "1/2|1/3|1/4|1/8", 2],

    ["Qu'est-ce que la fission nucléaire ?", "La division d'un noyau lourd en noyaux plus légers avec libération d'énergie|La fusion de deux atomes légers|La transformation d'un électron en photon|La combustion chimique", 0],

    ["Qu'est-ce que la fusion nucléaire ?", "L'union de noyaux légers pour former un noyau plus lourd avec libération possible d'énergie|La division d'un noyau lourd|La combustion du charbon|La séparation d'électrons", 0],

    ["Quelle réaction alimente principalement le Soleil ?", "Fusion nucléaire|Fission nucléaire|Combustion chimique|Réaction électrostatique", 0],

    // ============================================================
    // 21. PHYSIQUE ATOMIQUE ET SPECTRES
    // ============================================================

    ["Qu'est-ce qu'un spectre d'émission ?", "L'ensemble des longueurs d'onde ou fréquences émises par une source|Une mesure de masse|Une mesure de température uniquement|Une mesure de pression", 0],

    ["Pourquoi les atomes produisent-ils des raies spectrales caractéristiques ?", "Parce que leurs électrons occupent des niveaux d'énergie quantifiés|Parce que tous les atomes ont exactement la même énergie|Parce que les noyaux sont immobiles|Parce que la lumière est toujours blanche", 0],

    ["Qu'est-ce qu'un spectre d'absorption ?", "Un spectre présentant des longueurs d'onde absorbées par une substance|Une émission sonore|Une mesure de pression|Une réaction nucléaire", 0],

    ["Quel instrument permet de décomposer et analyser la lumière selon ses longueurs d'onde ?", "Spectromètre|Voltmètre|Baromètre|Ampèremètre", 0],

    ["La longueur d'onde et la fréquence d'une onde électromagnétique dans le vide sont reliées par :", "c = λf|c = λ/f|c = f/λ|c = λ+f", 0],

    ["Si la fréquence d'une onde électromagnétique augmente, sa longueur d'onde dans le vide :", "Diminue|Augmente|Reste constante|Devient infinie", 0],

    ["Parmi ces rayonnements, lequel possède la fréquence la plus élevée ?", "Rayons gamma|Ondes radio|Infrarouge|Micro-ondes", 0],

    ["Parmi ces rayonnements, lequel possède la plus grande longueur d'onde ?", "Ondes radio|Rayons X|Ultraviolet|Gamma", 0],

    ["Les micro-ondes appartiennent à :", "Au spectre électromagnétique|Aux ondes mécaniques uniquement|Aux sons|Aux particules alpha", 0],

    ["Les rayons X appartiennent-ils au spectre électromagnétique ?", "Oui|Non|Seulement dans le vide|Seulement dans l'eau", 0],

    // ============================================================
    // 22. PHYSIQUE DU QUOTIDIEN
    // ============================================================

    ["Pourquoi une ceinture de sécurité protège-t-elle un passager lors d'un freinage brusque ?", "Elle exerce une force qui ralentit le passager avec le véhicule|Elle supprime l'inertie|Elle augmente la vitesse|Elle diminue la masse", 0],

    ["Pourquoi les pneus d'une voiture ont-ils des sculptures ?", "Pour améliorer l'adhérence et favoriser l'évacuation de l'eau|Pour augmenter la masse|Pour supprimer la gravité|Pour diminuer la pression atmosphérique", 0],

    ["Pourquoi une poignée de porte est-elle généralement placée loin de l'axe de rotation ?", "Pour augmenter le moment de force pour une même force|Pour diminuer la masse de la porte|Pour supprimer les frottements|Pour augmenter la température", 0],

    ["Quelle grandeur mesure la capacité d'une force à faire tourner un objet autour d'un axe ?", "Moment de force|Puissance électrique|Énergie thermique|Quantité de chaleur", 0],

    ["Quelle est la formule du moment d'une force perpendiculaire à un bras de levier ?", "τ = Fd|τ = F/d|τ = F+d|τ = d/F", 0],

    ["Une force de 20 N est appliquée perpendiculairement à 0,5 m de l'axe. Quel est le moment ?", "10 N·m|20 N·m|40 N·m|0,025 N·m", 0],

    ["Pourquoi un objet lourd est-il plus difficile à accélérer qu'un objet léger pour une même force ?", "Parce que sa masse est plus grande|Parce qu'il n'a pas d'inertie|Parce que la gravité disparaît|Parce qu'il a toujours plus de vitesse", 0],

    ["Pourquoi un parachute ralentit-il la chute d'une personne ?", "Il augmente fortement la résistance de l'air|Il diminue la gravité|Il supprime la masse|Il augmente la vitesse initiale", 0],

    ["Pourquoi les bâtiments utilisent-ils des fondations ?", "Pour transmettre les charges au sol et assurer la stabilité|Pour augmenter leur température|Pour diminuer leur masse à zéro|Pour supprimer la gravité", 0],

    ["Pourquoi une casserole métallique chauffe-t-elle rapidement sur une cuisinière ?", "Les métaux conduisent généralement bien la chaleur|Les métaux ne conduisent pas la chaleur|La gravité augmente|La masse disparaît", 0],

    ["Pourquoi une bouteille thermos réduit-elle les échanges thermiques ?", "Elle limite la conduction, la convection et le rayonnement|Elle crée de l'énergie|Elle supprime la température|Elle augmente toujours la pression", 0],

    ["Pourquoi voit-on un éclair avant d'entendre le tonnerre ?", "La lumière se propage beaucoup plus vite que le son|Le son n'est pas une onde|L'éclair est plus proche|Le tonnerre est produit plus tard", 0],

    ["Pourquoi une cuillère semble-t-elle « cassée » lorsqu'elle est plongée dans l'eau ?", "À cause de la réfraction de la lumière|À cause de la gravité|À cause du magnétisme|À cause de la conduction", 0],

    ["Pourquoi le ciel apparaît-il généralement bleu pendant une journée claire ?", "La diffusion de la lumière solaire par l'atmosphère favorise davantage les courtes longueurs d'onde visibles|Parce que l'air est naturellement bleu|Parce que la lumière bleue est plus chaude|Parce que le Soleil émet uniquement du bleu", 0],

    ["Pourquoi un objet métallique peut-il sembler plus froid qu'un objet en bois dans la même pièce ?", "Le métal conduit généralement la chaleur de la main plus rapidement|Le métal a toujours une température plus basse|Le bois produit de la chaleur|Le métal ne possède pas d'énergie thermique", 0],

    // ============================================================
    // 23. QUESTIONS DE SYNTHÈSE ET PROBLÈMES
    // ============================================================

    ["Un véhicule passe de 0 à 20 m/s en 10 s. Quelle est son accélération moyenne ?", "1 m/s²|2 m/s²|10 m/s²|20 m/s²", 1],

    ["Un objet de 10 kg accélère à 3 m/s². Quelle force résultante agit sur lui ?", "3 N|10 N|30 N|300 N", 2],

    ["Une voiture roule à 72 km/h. Quelle est sa vitesse en m/s ?", "10 m/s|20 m/s|30 m/s|72 m/s", 1],

    ["Une voiture roule à 20 m/s pendant 15 s. Quelle distance parcourt-elle ?", "150 m|200 m|300 m|600 m", 2],

    ["Une force de 50 N déplace un objet de 4 m dans sa direction. Quel travail est effectué ?", "12,5 J|46 J|200 J|250 J", 2],

    ["Un moteur fournit 5000 J de travail en 10 s. Quelle est sa puissance ?", "50 W|500 W|5000 W|50000 W", 1],

    ["Une masse de 5 kg se déplace à 4 m/s. Quelle est son énergie cinétique ?", "10 J|20 J|40 J|80 J", 2],

    ["Un objet de 2 kg est placé à 10 m de hauteur avec g = 10 m/s². Quelle est son énergie potentielle ?", "20 J|100 J|200 J|400 J", 2],

    ["Une résistance de 20 Ω est connectée à 100 V. Quel courant circule ?", "2 A|5 A|20 A|2000 A", 1],

    ["Une résistance de 10 Ω est traversée par 3 A. Quelle puissance dissipe-t-elle ?", "30 W|60 W|90 W|300 W", 2],

    ["Une onde possède une fréquence de 50 Hz. Quelle est sa période ?", "0,02 s|0,05 s|2 s|50 s", 0],

    ["Une onde sonore se propage à 340 m/s et possède une fréquence de 170 Hz. Quelle est sa longueur d'onde ?", "0,5 m|1 m|2 m|4 m", 2],

    ["Une lentille convergente a une distance focale de 0,25 m. Quelle est sa puissance optique ?", "2 D|4 D|25 D|0,25 D", 1],

    ["Une force de 100 N agit sur une surface de 0,5 m². Quelle pression exerce-t-elle ?", "50 Pa|100 Pa|200 Pa|500 Pa", 2],

    ["Une masse de 3 kg subit une force résultante de 12 N. Quelle est son accélération ?", "3 m/s²|4 m/s²|9 m/s²|36 m/s²", 1],

    ["Un objet tombe du repos pendant 2 s avec g = 10 m/s². Quelle est approximativement sa vitesse finale ?", "5 m/s|10 m/s|20 m/s|40 m/s", 2],

    ["Un objet tombe du repos pendant 3 s avec g = 10 m/s². Quelle distance parcourt-il ?", "15 m|30 m|45 m|90 m", 2],

    ["Deux résistances de 6 Ω et 3 Ω sont montées en parallèle. Quelle est leur résistance équivalente ?", "1 Ω|2 Ω|3 Ω|9 Ω", 1],

    ["Deux résistances de 4 Ω et 6 Ω sont montées en série. Quelle est leur résistance équivalente ?", "2,4 Ω|10 Ω|24 Ω|0,4 Ω", 1],

    ["Une charge de 2 C se déplace dans un champ électrique uniforme de 5 N/C. Quelle force électrique subit-elle ?", "2,5 N|5 N|10 N|25 N", 2],

    ["Un objet de 1000 kg accélère à 2 m/s². Quelle est la force résultante ?", "500 N|1000 N|2000 N|5000 N", 2],

    ["Un objet possède une quantité de mouvement de 60 kg·m/s et une masse de 12 kg. Quelle est sa vitesse ?", "2 m/s|5 m/s|12 m/s|720 m/s", 1],

    ["Une machine reçoit 2000 J et fournit 1500 J d'énergie utile. Quel est son rendement ?", "50 %|60 %|75 %|80 %", 2],

    ["Une puissance électrique de 1000 W fonctionne pendant 60 s. Quelle énergie consomme-t-elle ?", "60 J|600 J|6000 J|60000 J", 3],

    ["Une lampe de 100 W fonctionne pendant 10 heures. Quelle énergie consomme-t-elle ?", "0,1 kWh|1 kWh|10 kWh|100 kWh", 1],

    ["Un corps de masse 2 kg possède une énergie cinétique de 100 J. Quelle est sa vitesse ?", "5 m/s|10 m/s|20 m/s|50 m/s", 1],

    ["Une force de 40 N agit sur un objet pendant 5 s. Quelle impulsion produit-elle ?", "8 N·s|45 N·s|200 N·s|400 N·s", 2],

    ["Un objet de 10 kg passe de 2 m/s à 8 m/s. Quelle est la variation de sa quantité de mouvement ?", "20 kg·m/s|40 kg·m/s|60 kg·m/s|80 kg·m/s", 2],

    ["Si une voiture double sa vitesse, par quel facteur son énergie cinétique est-elle multipliée ?", "2|3|4|8", 2],

    ["Si la distance entre deux masses est multipliée par 3, leur force gravitationnelle est divisée par :", "3|6|9|27", 2],

    ["Si la distance entre deux charges est divisée par 2, la force électrique devient :", "Deux fois plus grande|Quatre fois plus grande|Deux fois plus petite|Quatre fois plus petite", 1],

    ["Une onde électromagnétique possède une fréquence de 6 × 10^14 Hz. Si c = 3 × 10^8 m/s, sa longueur d'onde est approximativement :", "5 × 10^-7 m|2 × 10^-6 m|5 × 10^-6 m|2 × 10^-7 m", 0],

    ["Un photon possède une fréquence plus élevée qu'un autre photon. Lequel possède la plus grande énergie ?", "Celui de fréquence plus élevée|Celui de fréquence plus faible|Ils ont toujours la même énergie|Impossible à déterminer", 0],

    ["Un objet flotte dans l'eau. Que peut-on conclure sur sa masse volumique moyenne par rapport à celle de l'eau ?", "Elle est généralement inférieure|Elle est nécessairement supérieure|Elle est toujours nulle|Elle est infinie", 0],

    ["Un ascenseur monte à vitesse constante. Quelle est son accélération ?", "0 m/s²|9,8 m/s²|Variable obligatoirement|Inférieure à 0 toujours", 0],

    ["Une voiture tourne à vitesse constante sur une route circulaire. A-t-elle une accélération ?", "Oui, car la direction de la vitesse change|Non, car la vitesse est constante|Non, car aucune force n'agit|Seulement si elle accélère", 0],

    ["Un objet en équilibre statique est soumis à une résultante des forces :", "Nulle|Maximale|Toujours positive|Toujours négative", 0],

    ["Un corps peut-il être en mouvement tout en ayant une résultante des forces nulle ?", "Oui, s'il se déplace à vitesse constante en ligne droite|Non, jamais|Seulement s'il est dans le vide|Seulement s'il est immobile", 0],

    ["Un objet possède une accélération constante mais une vitesse initiale non nulle. Son mouvement est-il nécessairement uniforme ?", "Non|Oui|Toujours circulaire|Toujours immobile", 0],

    ["Si aucune force externe résultante n'agit sur un système isolé, sa quantité de mouvement totale :", "Se conserve|Augmente toujours|Diminue toujours|Devient nulle", 0],

    ["Si aucune énergie n'est échangée avec l'extérieur dans un système isolé, son énergie totale :", "Se conserve|Double|Diminue toujours|Devient nulle", 0],

    ["Quelle combinaison contient uniquement des grandeurs vectorielles ?", "Force, vitesse, accélération|Masse, température, énergie|Temps, masse, volume|Énergie, puissance, température", 0],

    ["Quelle combinaison contient uniquement des grandeurs scalaires ?", "Masse, température, énergie|Force, vitesse, accélération|Déplacement, force, vitesse|Champ électrique, force, vitesse", 0],

    ["Quelle loi explique principalement pourquoi une fusée peut accélérer en expulsant des gaz ?", "Troisième loi de Newton|Loi de Boyle|Loi de Snell|Loi d'Ohm", 0],

    ["Pourquoi une fusée peut-elle fonctionner dans le vide ?", "Elle expulse des gaz et n'a pas besoin de pousser contre l'air|Elle utilise la pression atmosphérique|Elle dépend du vent|Parce que la gravité est nulle", 0],

    ["Quelle transformation d'énergie se produit principalement dans une voiture à moteur thermique ?", "Énergie chimique vers énergie mécanique et thermique|Énergie lumineuse vers énergie chimique uniquement|Énergie électrique vers nucléaire|Énergie thermique vers masse", 0],

    ["Quelle transformation d'énergie se produit dans une cellule photovoltaïque ?", "Énergie lumineuse vers énergie électrique|Énergie électrique vers lumière uniquement|Énergie mécanique vers chimique|Énergie thermique vers nucléaire", 0],

    ["Quelle transformation d'énergie se produit dans un moteur électrique ?", "Énergie électrique vers énergie mécanique|Énergie mécanique vers nucléaire|Énergie chimique vers lumineuse uniquement|Énergie thermique vers masse", 0],

    ["Quel principe explique le fonctionnement d'une éolienne ?", "Conversion de l'énergie cinétique du vent en énergie mécanique puis électrique|Conversion de l'énergie nucléaire en chimique|Conversion de la chaleur en masse|Conversion de la lumière en son", 0],

];