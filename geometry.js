
export const geometry = [

    // =========================================================
    // 1. FIGURES PLANES — FORMULES DE BASE
    // =========================================================

    ["Quelle est la formule de l'aire d'un carré de côté c ?",
     "c²|4c|c³|2c", 0],

    ["Quelle est la formule du périmètre d'un carré de côté c ?",
     "c²|2c|4c|c³", 2],

    ["Quelle est la formule de l'aire d'un rectangle de longueur L et de largeur l ?",
     "2(L + l)|L + l|L × l|L/l", 2],

    ["Quelle est la formule du périmètre d'un rectangle de longueur L et de largeur l ?",
     "L × l|2(L + l)|L + l|L² + l²", 1],

    ["Quelle est la formule de l'aire d'un triangle de base b et de hauteur h ?",
     "b × h|b + h|(b × h)/2|2bh", 2],

    ["Quelle est la formule du périmètre d'un triangle de côtés a, b et c ?",
     "abc|a + b + c|2(a + b + c)|a² + b² + c²", 1],

    ["Quelle est la formule de l'aire d'un parallélogramme de base b et de hauteur h ?",
     "b + h|b × h|(b × h)/2|2b + 2h", 1],

    ["Quelle est la formule de l'aire d'un trapèze dont les bases mesurent B et b et dont la hauteur est h ?",
     "(B + b)h|(B - b)h/2|(B + b)h/2|Bh + b", 2],

    ["Quelle est la formule de l'aire d'un losange dont les diagonales mesurent d₁ et d₂ ?",
     "d₁ × d₂|d₁ + d₂|(d₁ × d₂)/2|2d₁d₂", 2],

    ["Quelle est la formule de l'aire d'un polygone régulier de périmètre P et d'apothème a ?",
     "P + a|P × a|(P × a)/2|2Pa", 2],

    // =========================================================
    // 2. CERCLE ET DISQUE
    // =========================================================

    ["Quelle est la formule du périmètre d'un cercle de rayon r ?",
     "πr²|2πr|πr|r²", 1],

    ["Quelle est la formule de l'aire d'un disque de rayon r ?",
     "2πr|πr|πr²|πd", 2],

    ["Quelle relation lie le diamètre d et le rayon r d'un cercle ?",
     "d = r/2|d = 2r|r = 2d|d = r²", 1],

    ["Quelle formule donne la longueur de la circonférence d'un cercle de diamètre d ?",
     "πd|2πd|πd²|π/d", 0],

    ["Quelle formule permet de calculer le rayon d'un cercle dont l'aire est A ?",
     "r = A/π|r = √(A/π)|r = √(πA)|r = A²/π", 1],

    ["Quelle est la formule de l'aire d'un anneau circulaire de rayon extérieur R et de rayon intérieur r ?",
     "π(R² - r²)|π(R - r)²|2π(R - r)|π(R² + r²)", 0],

    ["Quelle est la formule de l'aire d'un secteur circulaire d'angle θ en degrés et de rayon r ?",
     "θπr²/360|θπr/360|2θπr|πr²/θ", 0],

    ["Quelle est la formule de la longueur d'un arc d'angle θ en degrés et de rayon r ?",
     "θπr²/360|θπr/180|θπr/360|2πrθ", 2],

    ["Un cercle a un rayon de 5 cm. Quelle formule permet de calculer son aire ?",
     "2π(5)|π(5)|π(5²)|5²/π", 2],

    ["Un cercle a un diamètre de 12 cm. Quelle formule permet de calculer sa circonférence ?",
     "π × 12|2π × 12|π × 12²|12/π", 0],

    // =========================================================
    // 3. ANGLES ET POLYGONES
    // =========================================================

    ["Quelle est la somme des angles intérieurs d'un triangle ?",
     "90°|180°|270°|360°", 1],

    ["Quelle est la somme des angles intérieurs d'un quadrilatère ?",
     "180°|270°|360°|540°", 2],

    ["Quelle est la formule de la somme des angles intérieurs d'un polygone à n côtés ?",
     "180n|90(n - 2)|180(n - 2)|360n", 2],

    ["Quelle est la mesure de chaque angle intérieur d'un polygone régulier à n côtés ?",
     "180(n - 2)/n|360/n|180/n|360(n - 2)/n", 0],

    ["Quelle est la mesure de chaque angle extérieur d'un polygone régulier à n côtés ?",
     "180/n|360/n|360(n - 2)/n|180(n - 2)/n", 1],

    ["Quelle est la somme des angles extérieurs d'un polygone convexe, en prenant un angle extérieur à chaque sommet ?",
     "90°|180°|270°|360°", 3],

    ["Quelle relation décrit deux angles complémentaires ?",
     "Leur somme vaut 90°|Leur somme vaut 180°|Ils sont toujours égaux|Leur produit vaut 90", 0],

    ["Quelle relation décrit deux angles supplémentaires ?",
     "Leur somme vaut 90°|Leur somme vaut 180°|Ils sont toujours égaux|Leur produit vaut 180", 1],

    ["Si deux droites sont perpendiculaires, l'angle qu'elles forment mesure :",
     "45°|60°|90°|180°", 2],

    ["Si deux droites parallèles sont coupées par une sécante, les angles correspondants sont :",
     "Toujours supplémentaires|Égaux|Toujours nuls|Toujours égaux à 90°", 1],

    // =========================================================
    // 4. PYTHAGORE ET TRIANGLES RECTANGLES
    // =========================================================

    ["Dans un triangle rectangle, quelle relation exprime le théorème de Pythagore ?",
     "a + b = c|a² + b² = c²|a² - b² = c²|2a + 2b = c", 1],

    ["Dans un triangle rectangle, comment calculer l'hypoténuse c à partir des deux côtés de l'angle droit a et b ?",
     "c = a + b|c = √(a² + b²)|c = a² + b²|c = √(a² - b²)", 1],

    ["Dans un triangle rectangle, comment calculer le côté a lorsque l'hypoténuse vaut c et l'autre côté vaut b ?",
     "a = √(c² + b²)|a = c² - b²|a = √(c² - b²)|a = c - b", 2],

    ["Dans un triangle rectangle, si les deux côtés de l'angle droit mesurent 6 cm et 8 cm, quelle formule permet de calculer l'hypoténuse ?",
     "c = 6 + 8|c = √(6² + 8²)|c = 6² + 8²|c = √(8² - 6²)", 1],

    ["Dans un triangle rectangle isocèle dont les deux côtés de l'angle droit valent a, quelle est la longueur de l'hypoténuse ?",
     "a|2a|a√2|a/√2", 2],

    ["Dans un triangle rectangle, si l'hypoténuse mesure 13 cm et un côté de l'angle droit mesure 5 cm, quelle formule permet de trouver l'autre côté x ?",
     "x = √(13² + 5²)|x = 13² - 5²|x = √(13² - 5²)|x = 13 - 5", 2],

    ["Dans un triangle rectangle, si les côtés de l'angle droit mesurent 9 cm et 12 cm, quelle formule permet de calculer l'hypoténuse ?",
     "√(9² + 12²)|9 + 12|9² + 12²|√(12² - 9²)", 0],

    ["Quelle condition permet de reconnaître un triangle rectangle à partir de ses côtés a, b et c, où c est le plus grand côté ?",
     "a + b = c|a² + b² = c²|a² - b² = c²|ab = c", 1],

    // =========================================================
    // 5. TRIGONOMETRIE DANS LE TRIANGLE RECTANGLE
    // =========================================================

    ["Dans un triangle rectangle, sin(θ) est égal à :",
     "côté adjacent/hypoténuse|côté opposé/hypoténuse|côté opposé/côté adjacent|hypoténuse/côté opposé", 1],

    ["Dans un triangle rectangle, cos(θ) est égal à :",
     "côté opposé/hypoténuse|côté adjacent/hypoténuse|côté opposé/côté adjacent|hypoténuse/côté adjacent", 1],

    ["Dans un triangle rectangle, tan(θ) est égal à :",
     "côté opposé/côté adjacent|côté adjacent/côté opposé|côté opposé/hypoténuse|côté adjacent/hypoténuse", 0],

    ["Quelle formule permet de calculer le côté opposé à θ lorsque l'hypoténuse vaut c ?",
     "opposé = c cos(θ)|opposé = c sin(θ)|opposé = c tan(θ)|opposé = c/sin(θ)", 1],

    ["Quelle formule permet de calculer le côté adjacent à θ lorsque l'hypoténuse vaut c ?",
     "adjacent = c sin(θ)|adjacent = c tan(θ)|adjacent = c cos(θ)|adjacent = c/cos(θ)", 2],

    ["Quelle formule permet de calculer le côté opposé à θ lorsque le côté adjacent vaut a ?",
     "opposé = a cos(θ)|opposé = a sin(θ)|opposé = a tan(θ)|opposé = a/tan(θ)", 2],

    ["Dans un triangle rectangle, si sin(θ) = 3/5 et que l'hypoténuse mesure 20, quelle est la longueur du côté opposé ?",
     "8|10|12|15", 2],

    ["Dans un triangle rectangle, si cos(θ) = 4/5 et que l'hypoténuse mesure 15, quelle est la longueur du côté adjacent ?",
     "9|12|15|20", 1],

    ["Dans un triangle rectangle, si tan(θ) = 3/4 et que le côté adjacent mesure 8, quelle est la longueur du côté opposé ?",
     "4|6|8|10", 1],

    ["Quelle relation trigonométrique est souvent mémorisée sous l'acronyme SOH-CAH-TOA ?",
     "sin = opposé/hypoténuse, cos = adjacent/hypoténuse, tan = opposé/adjacent|sin = adjacent/hypoténuse, cos = opposé/hypoténuse, tan = adjacent/opposé|sin = opposé/adjacent, cos = adjacent/hypoténuse, tan = opposé/hypoténuse|sin = hypoténuse/opposé, cos = hypoténuse/adjacent, tan = adjacent/opposé", 0],

    // =========================================================
    // 6. TRIANGLES PARTICULIERS
    // =========================================================

    ["Quelle est la formule de l'aire d'un triangle équilatéral de côté a ?",
     "a²√3/4|a²/2|a√3|3a²", 0],

    ["Quelle est la hauteur d'un triangle équilatéral de côté a ?",
     "a/2|a√3/2|a√3|2a", 1],

    ["Dans un triangle équilatéral, chaque angle intérieur mesure :",
     "30°|45°|60°|90°", 2],

    ["Dans un triangle isocèle, les deux côtés égaux sont opposés à :",
     "Deux angles nécessairement différents|Deux angles égaux|Un angle droit obligatoire|Trois angles égaux", 1],

    ["Dans un triangle 30°-60°-90°, si l'hypoténuse vaut h, le côté opposé à 30° vaut :",
     "h√3/2|h/2|h/√3|2h", 1],

    ["Dans un triangle 30°-60°-90°, si le petit côté vaut a, l'hypoténuse vaut :",
     "a/2|a√2|2a|a√3", 2],

    ["Dans un triangle 45°-45°-90°, si un côté de l'angle droit vaut a, l'hypoténuse vaut :",
     "a|2a|a√2|a/√2", 2],

    ["Dans un triangle 45°-45°-90°, si l'hypoténuse vaut h, chaque côté de l'angle droit vaut :",
     "h/2|h√2|h/√2|2h", 2],

    // =========================================================
    // 7. COORDONNEES ET GEOMETRIE ANALYTIQUE
    // =========================================================

    ["Quelle formule donne la pente m d'une droite passant par (x₁, y₁) et (x₂, y₂) ?",
     "m = (x₂ - x₁)/(y₂ - y₁)|m = (y₂ - y₁)/(x₂ - x₁)|m = x₁ + y₁|m = y₂/x₂", 1],

    ["Quelle est l'équation d'une droite sous la forme pente-ordonnée à l'origine ?",
     "y = mx + b|x = my + b|y = m/x + b|y = x + m + b", 0],

    ["Quelle formule donne la distance entre les points (x₁, y₁) et (x₂, y₂) ?",
     "√((x₂ - x₁)² + (y₂ - y₁)²)|√((x₂ + x₁)² + (y₂ + y₁)²)|x₂ - x₁ + y₂ - y₁|((x₂ - x₁) + (y₂ - y₁))²", 0],

    ["Quelle formule donne les coordonnées du milieu du segment reliant (x₁, y₁) et (x₂, y₂) ?",
     "((x₁ + x₂)/2, (y₁ + y₂)/2)|((x₁ - x₂)/2, (y₁ - y₂)/2)|(x₁ + x₂, y₁ + y₂)|(x₁x₂/2, y₁y₂/2)", 0],

    ["Quelle est la distance entre les points (0, 0) et (3, 4) ?",
     "5|7|12|25", 0],

    ["Quelle est la pente de la droite passant par (2, 5) et (6, 13) ?",
     "1|2|3|4", 1],

    ["Quel est le milieu du segment reliant les points (2, 4) et (8, 10) ?",
     "(5, 7)|(6, 8)|(10, 14)|(3, 3)", 0],

    ["Quelle est l'équation d'une droite de pente 3 et d'ordonnée à l'origine 2 ?",
     "y = 2x + 3|y = 3x + 2|y = 3x - 2|y = x + 5", 1],

    // =========================================================
    // 8. SOLIDES — VOLUMES
    // =========================================================

    ["Quelle est la formule du volume d'un cube de côté c ?",
     "6c²|c³|4c²|3c", 1],

    ["Quelle est la formule de l'aire totale d'un cube de côté c ?",
     "c³|4c²|6c²|12c", 2],

    ["Quelle est la formule du volume d'un pavé droit de dimensions L, l et h ?",
     "2(Ll + Lh + lh)|L + l + h|Llh|Llh/2", 2],

    ["Quelle est la formule de l'aire totale d'un pavé droit de dimensions L, l et h ?",
     "Llh|2(Ll + Lh + lh)|Ll + Lh + lh|4Llh", 1],

    ["Quelle est la formule du volume d'un prisme droit d'aire de base A et de hauteur h ?",
     "A × h|A + h|A/h|2Ah", 0],

    ["Quelle est la formule du volume d'un cylindre de rayon r et de hauteur h ?",
     "2πrh|πr²h|πrh²|πr²", 1],

    ["Quelle est la formule de l'aire latérale d'un cylindre de rayon r et de hauteur h ?",
     "πr²h|2πrh|2πr²|πrh", 1],

    ["Quelle est la formule de l'aire totale d'un cylindre fermé de rayon r et de hauteur h ?",
     "2πrh + 2πr²|πr²h|2πrh|πr² + 2πrh", 0],

    ["Quelle est la formule du volume d'un cône de rayon r et de hauteur h ?",
     "πr²h|πr²h/3|2πrh|πrh²/3", 1],

    ["Quelle est la formule de l'aire latérale d'un cône de rayon r et de génératrice g ?",
     "πrg|2πrg|πr²g|πr²", 0],

    ["Quelle est la formule de l'aire totale d'un cône de rayon r et de génératrice g ?",
     "πrg + πr²|πr²g|2πrg|πr²g/3", 0],

    ["Quelle est la formule du volume d'une sphère de rayon r ?",
     "4πr²|4πr³/3|πr³|2πr³", 1],

    ["Quelle est la formule de l'aire d'une sphère de rayon r ?",
     "4πr²|4πr³/3|2πr|πr²/3", 0],

    ["Quelle est la formule du volume d'une pyramide dont l'aire de base est A et la hauteur h ?",
     "Ah|Ah/2|Ah/3|3Ah", 2],

    ["Quelle est la formule du volume d'un tétraèdre lorsqu'il est considéré comme une pyramide d'aire de base A et de hauteur h ?",
     "Ah|Ah/2|Ah/3|3Ah", 2],

    // =========================================================
    // 9. FORMULES INVERSES ET APPLICATIONS
    // =========================================================

    ["Quelle formule donne la hauteur h d'un triangle dont l'aire est A et la base b ?",
     "h = A/b|h = 2A/b|h = b/(2A)|h = 2Ab", 1],

    ["Quelle formule donne la base b d'un triangle dont l'aire est A et la hauteur h ?",
     "b = A/h|b = 2A/h|b = Ah/2|b = 2Ah", 1],

    ["Quelle formule donne la largeur l d'un rectangle dont l'aire est A et la longueur L ?",
     "l = A + L|l = A/L|l = L/A|l = 2A/L", 1],

    ["Quelle formule donne le côté c d'un carré dont le périmètre est P ?",
     "c = P/2|c = P/4|c = 4P|c = √P", 1],

    ["Quelle formule donne le côté c d'un carré dont l'aire est A ?",
     "c = A/2|c = √A|c = A²|c = 4A", 1],

    ["Quelle formule donne le rayon r d'un cylindre de volume V et de hauteur h ?",
     "r = V/(πh)|r = √(V/(πh))|r = Vπh|r = V/(2πh)", 1],

    ["Quelle formule donne la hauteur h d'un cylindre de volume V et de rayon r ?",
     "h = Vπr²|h = V/(πr²)|h = πr²/V|h = V/(2πr)", 1],

    ["Quelle formule donne le côté c d'un cube de volume V ?",
     "c = V²|c = √V|c = ∛V|c = 3V", 2],

    ["Quelle formule donne le rayon r d'une sphère dont le volume est V ?",
     "r = √(V/π)|r = ∛(3V/(4π))|r = 3V/(4π)|r = ∛(4πV/3)", 1],

    ["Quelle formule donne l'apothème a d'un polygone régulier d'aire A et de périmètre P ?",
     "a = 2A/P|a = A/P|a = P/(2A)|a = 2P/A", 0],

    // =========================================================
    // 10. FORMULES AVANCEES DES TRIANGLES
    // =========================================================

    ["Dans un triangle, quelle formule correspond à la loi des cosinus pour le côté c opposé à l'angle C ?",
     "c² = a² + b² + 2ab cos(C)|c² = a² + b² - 2ab cos(C)|c = a + b - C|c² = a² - b² - 2ab cos(C)", 1],

    ["Quelle formule correspond à la loi des sinus dans un triangle ?",
     "a/sin(A) = b/sin(B) = c/sin(C)|a cos(A) = b cos(B) = c cos(C)|a/A = b/B = c/C|a sin(A) = b sin(B) = c sin(C)", 0],

    ["Quelle formule donne l'aire d'un triangle connaissant deux côtés a et b et l'angle compris C ?",
     "A = ab cos(C)|A = ab sin(C)|A = (ab sin(C))/2|A = 2ab sin(C)", 2],

    ["Dans un triangle rectangle, quel est le rapport entre le sinus et le cosinus d'un même angle θ ?",
     "sin(θ)/cos(θ) = tan(θ)|sin(θ) + cos(θ) = tan(θ)|sin(θ) × cos(θ) = tan(θ)|sin(θ) - cos(θ) = tan(θ)", 0],

    ["Quelle identité trigonométrique fondamentale est correcte ?",
     "sin²(θ) + cos²(θ) = 1|sin(θ) + cos(θ) = 1|sin²(θ) - cos²(θ) = 1|tan²(θ) + cos²(θ) = 1", 0],

    ["Si sin(θ) = 3/5 pour un angle aigu, quelle est la valeur de cos(θ) ?",
     "3/4|4/5|5/4|1/5", 1],

    ["Si cos(θ) = 5/13 pour un angle aigu, quelle est la valeur de sin(θ) ?",
     "5/12|12/13|13/12|8/13", 1],

    ["Si tan(θ) = 3/4 pour un angle aigu, quelle relation entre les côtés opposé et adjacent est correcte ?",
     "opposé = 3/4 de l'adjacent|adjacent = 3/4 de l'opposé|opposé = 4/3 de l'adjacent|opposé = adjacent + 3", 0],

];