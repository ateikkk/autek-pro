/* ══════════════════════════════════════════════════════════════════════════════
   AUTEK PRO — JAVASCRIPT (script.js)
   ══════════════════════════════════════════════════════════════════════════════
   👋 Ce fichier gère 3 choses :

     1. L'effet "barre du haut qui devient noire" quand on défile.
     2. Le menu hamburger sur mobile (ouverture/fermeture).
     3. La BASCULE FR / AR — change toute la langue du site en un clic.

   📚 Pour modifier une traduction :
     • Trouve la clé (ex: "hero-title") dans l'objet "translations" ci-dessous.
     • Modifie le texte en français (translations.fr) ou en arabe (translations.ar).
     • Sauvegarde, recharge la page → c'est mis à jour.

   📚 Pour AJOUTER un nouveau texte traduit :
     • Dans index.html, ajoute l'attribut data-i18n="ma-cle" sur l'élément.
     • Dans cet objet, ajoute "ma-cle" dans translations.fr ET dans .ar.
   ══════════════════════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════════════════════════════
   📖 DICTIONNAIRE DES TRADUCTIONS
   ════════════════════════════════════════════════════════════════════════════
   Chaque entrée a une "clé" (ex: 'nav-about') et deux versions (fr / ar).
   Les balises HTML (<strong>, <br>, <span>) sont autorisées dans les valeurs.
   ════════════════════════════════════════════════════════════════════════════ */

const translations = {

  /* ════════════════════════════ FRANÇAIS ════════════════════════════════ */
  fr: {
    /* --- Navigation --- */
    'nav-about':    'À propos',
    'nav-skills':   'Savoir-faire',
    'nav-approach': 'Approche',
    'nav-network':  'Réseau',
    'nav-vision':   'Vision',
    'nav-contact':  'Contact',
    'nav-cta':      'Me contacter',

    /* --- Hero --- */
    'hero-badge':       'Mécanicien · 20 ans · Dijon',
    'hero-title':       'Saleh<br /><span class="gradient-text">Abdulsalam.</span>',
    'hero-lead':        'La rigueur d\'un <strong>professionnel</strong>.<br />La passion <strong>d\'apprendre</strong>.',
    'hero-desc':        'Diplômé d\'un <strong>CAP Maintenance des Véhicules</strong>, je cumule <strong>3 ans d\'expérience</strong> mêlant interventions en atelier et auto-formation poussée. Équipé de mon <strong>propre matériel de diagnostic</strong>, je m\'investis à 100 % pour développer mes compétences. Je recherche aujourd\'hui une <strong>alternance pour préparer mon Bac Pro</strong> dans une concession dynamique, tout en mettant mon sérieux et mes connaissances à la disposition de mon réseau pour tout conseil technique.',
    'hero-cta1':        'Découvrir mon parcours',
    'hero-cta2':        'Un renseignement&nbsp;? Contactez-moi',
    'hero-badge-label': 'Recherche',
    'hero-badge-value': 'Alternance Bac Pro',
    'hero-scroll':      'Scroll',

    /* --- Stats --- */
    'stat1-unit':  'ans',
    'stat1-title': 'Expérience cumulée',
    'stat1-desc':  'Atelier & auto-formation',
    'stat2-unit':  '+ Bac Pro',
    'stat2-title': 'Maintenance Véhicules',
    'stat2-desc':  'Bac Pro en alternance',
    'stat3-unit':  'perso',
    'stat3-title': 'Matériel de diagnostic',
    'stat3-desc':  'Investi sur fonds propres',
    'stat4-unit':  'veille',
    'stat4-title': 'Auto-formation',
    'stat4-desc':  'Électronique embarquée',

    /* --- À propos --- */
    'about-eyebrow': '⟶ À propos',
    'about-title':   'Plus qu\'un métier.<br /><span class="muted">Une véritable passion.</span>',
    'about-p1':      'À <strong>20 ans</strong>, je suis diplômé d\'un <strong>CAP Maintenance des Véhicules</strong> et je cumule <strong>3 ans d\'expérience</strong>, réparties entre mes interventions professionnelles et une auto-formation poussée. Mais ce qui me définit vraiment, c\'est ma façon d\'aborder la mécanique.',
    'about-p2':      'Je suis d\'un naturel <strong>curieux et proactif</strong>. C\'est pour cela que j\'ai investi dans mon propre <strong>matériel de diagnostic avancé</strong>. Sur mon temps libre, je m\'entraîne à comprendre <strong>l\'électronique embarquée</strong>, j\'étudie de nouvelles méthodes de réparation avec l\'aide des outils numériques, et je cherche toujours à élargir mes connaissances.',
    'about-quote':   'Dans un secteur qui évolue aussi vite, continuer d\'apprendre est pour moi une évidence.',
    'about-p3':      'Aujourd\'hui, mon objectif est clair : <strong>intégrer une concession dynamique</strong> pour y préparer mon <strong>Bac Pro en alternance</strong> et y apporter ma motivation, tout en restant disponible pour conseiller et aider mon entourage sur l\'entretien de leurs véhicules.',

    /* --- Savoir-faire --- */
    'skills-eyebrow':    '⟶ Savoir-faire',
    'skills-title':      'De l\'entretien courant<br /><span class="muted">au diagnostic précis.</span>',
    'skills-cat1-title': 'Entretien & Maintenance',
    'skills-cat1-1':     '<strong>Vidange</strong> et révision périodique',
    'skills-cat1-2':     '<strong>Pneumatiques</strong>, freinage, suspension',
    'skills-cat1-3':     '<strong>Distribution</strong>, courroies, embrayage',
    'skills-cat1-4':     '<strong>Climatisation</strong> et refroidissement',
    'skills-cat2-title': 'Diagnostic & Électronique',
    'skills-cat2-1':     'Utilisation de <strong>valise de diagnostic</strong> (OBD multimarque)',
    'skills-cat2-2':     'Lecture, effacement et interprétation des <strong>codes défauts</strong>',
    'skills-cat2-3':     'Analyse des <strong>données en temps réel</strong> pour recherche de panne',
    'skills-cat2-4':     'Compréhension des <strong>systèmes électroniques embarqués</strong>',
    'skills-cat3-title': 'Mécanique générale',
    'skills-cat3-1':     'Démontage et remontage d\'<strong>éléments moteurs</strong>',
    'skills-cat3-2':     'Recherche et <strong>réparation de fuites</strong> (fluides et air)',
    'skills-cat3-3':     'Remplacement de <strong>pièces d\'usure complexes</strong>',
    'skills-cat3-4':     '<strong>Contrôles de sécurité</strong> et essais routiers',

    /* --- Mon approche --- */
    'approach-eyebrow':     '⟶ Mon approche',
    'approach-title':       'Comprendre<br /><span class="muted">avant de réparer.</span>',
    'approach-p1':          'La majorité des pannes <strong>mal diagnostiquées</strong> coûtent cher au client — et à l\'atelier. Ma méthode est simple : <strong>ne jamais remplacer une pièce</strong> avant d\'avoir formellement identifié la <strong>cause racine</strong> du problème.',
    'approach-p2':          'Cela demande de la patience, de la méthode, l\'utilisation des bons outils et l\'analyse des données. C\'est l\'objectif que je me fixe au quotidien : ne pas être un simple exécutant, mais devenir un <strong>technicien qui apporte de véritables solutions</strong>.',
    'approach-step1-title': 'Écoute & recueil d\'infos',
    'approach-step1-desc':  'Comprendre les symptômes avec le client',
    'approach-step2-title': 'Diagnostic précis',
    'approach-step2-desc':  'Lecture des données et tests physiques',
    'approach-step3-title': 'Intervention ciblée',
    'approach-step3-desc':  'Remplacement de la pièce et vérification',

    /* --- Pour mon réseau --- */
    'network-eyebrow': '⟶ Pour mon réseau',
    'network-title':   'Besoin d\'un avis<br /><span class="muted">avant de vous décider&nbsp;?</span>',
    'network-p1':      'Si tu fais partie de mon réseau et que tu hésites avant un <strong>achat</strong>, une <strong>réparation</strong>, ou que tu souhaites simplement mieux comprendre un <strong>devis qui te paraît complexe</strong> — n\'hésite pas. Je prends le temps d\'expliquer, en toute <strong>transparence</strong>, ce qui se passe sous le capot pour t\'aider à y voir plus clair.',
    'network-srv1':    '<strong>Avis technique</strong> avant achat d\'occasion',
    'network-srv2':    '<strong>Lecture & explication</strong> de devis d\'entretien',
    'network-srv3':    '<strong>Diagnostic préventif</strong> et conseils personnalisés',
    'network-cta':     'Me contacter sur mes réseaux',

    /* --- Différenciateur --- */
    'diff-eyebrow':      '⟶ Mon Différenciateur',
    'diff-title':        'Mon outil de diagnostic.<br /><span class="gradient-text">Mon laboratoire personnel.</span>',
    'diff-p1':           'J\'ai investi personnellement dans une <strong>tablette de diagnostic professionnelle multimarque avancée</strong>. Ma démarche est simple : pouvoir m\'entraîner en dehors des heures d\'atelier, analyser les codes défauts par moi-même, comprendre l\'<strong>architecture électronique</strong> des véhicules modernes, et arriver chaque matin avec une <strong>longueur d\'avance</strong>.',
    'diff-p2':           'Cet équipement de pointe me permet d\'explorer en profondeur :',
    'diff-feat1-strong': 'Lecture multi-systèmes détaillée',
    'diff-feat1-desc':   'Moteur, ABS, Airbag, BCM, TCM…',
    'diff-feat2-strong': 'Étude de l\'électronique embarquée',
    'diff-feat2-desc':   'Observation des codages et adaptations sur véhicules récents',
    'diff-feat3-strong': 'Analyse de l\'architecture véhicule',
    'diff-feat3-desc':   'Visualisation de la topologie réseau multiplexé',
    'diff-feat4-strong': 'Veille technologique',
    'diff-feat4-desc':   'Grâce aux mises à jour logicielles régulières de l\'outil',

    /* --- ADN --- */
    'adn-eyebrow': '⟶ Mon ADN',
    'adn-title':   'Trois piliers,<br /><span class="muted">un seul objectif&nbsp;: l\'efficacité.</span>',
    'adn-1-title': 'Investissement technique',
    'adn-1-desc':  'J\'ai investi <strong>de ma poche</strong> dans mon propre matériel de diagnostic avancé. Je m\'entraîne en autonomie pour <strong>maîtriser l\'électronique embarquée</strong> et gagner en efficacité sur les recherches de pannes.',
    'adn-2-title': 'Auto-formation & Curiosité',
    'adn-2-desc':  'J\'utilise les <strong>outils numériques et l\'IA</strong> au quotidien pour découvrir de nouvelles méthodes de réparation. Je reste toujours à l\'écoute des <strong>évolutions de l\'automobile</strong> pour proposer les meilleurs conseils à mon entourage.',
    'adn-3-title': 'Expérience & Pratique',
    'adn-3-desc':  'Fort de <strong>3 années de pratique</strong> (mêlant expériences professionnelles en atelier et mécanique personnelle), j\'ai développé une <strong>grande rigueur</strong>. De l\'entretien multimarque au diagnostic, j\'ai l\'envie du <strong>travail bien fait</strong>.',

    /* --- Vision --- */
    'vision-eyebrow': '⟶ Vision à long terme',
    'vision-title':   'L\'expertise par la<br /><span class="gradient-text">formation continue.</span>',
    'vision-p1':      'Mon objectif à <strong>court terme</strong> est de décrocher mon alternance pour <strong>exceller dans mon Bac Pro</strong>. Mais ma vision va bien au-delà.',
    'vision-p2':      'Le monde de l\'automobile évolue à toute vitesse avec <strong>l\'électronique</strong> et les <strong>nouvelles motorisations</strong>. Mon ambition est de <strong>ne jamais cesser d\'apprendre</strong>. Je souhaite enchaîner les formations spécialisées, monter constamment en compétence et maîtriser les diagnostics les plus pointus.',
    'vision-quote':   'Mon but n\'est pas de m\'arrêter à un diplôme, mais de devenir un véritable <strong>expert technique</strong>, capable d\'évoluer avec son temps et de résoudre les problèmes que les autres ne trouvent pas.',

    /* --- Contact --- */
    'contact-eyebrow':         '⟶ Contact & Réseaux',
    'contact-title':           'Restons<br /><span class="muted">en contact.</span>',
    'contact-p1':              'Que vous soyez un <strong>recruteur</strong> à la recherche d\'un futur apprenti Bac Pro motivé, ou un <strong>membre de mon réseau</strong> ayant besoin d\'un avis technique, n\'hésitez pas à m\'écrire directement. Je suis facilement joignable et je prends toujours le temps de vous répondre.',
    'contact-card-title':      'Mes coordonnées directes',
    'contact-tel-label':       'Téléphone',
    'contact-mail-label':      'Email',
    'contact-linkedin-label':  'LinkedIn',
    'contact-insta-label':     'Instagram',

    /* --- Footer --- */
    'footer-copy': '© 2026 Saleh Abdulsalam · Conçu avec rigueur à Dijon'
  },


  /* ════════════════════════════ ARABIC / العربية ════════════════════════ */
  ar: {
    /* --- Navigation --- */
    'nav-about':    'حول',
    'nav-skills':   'الخبرات',
    'nav-approach': 'المنهج',
    'nav-network':  'الشبكة',
    'nav-vision':   'الرؤية',
    'nav-contact':  'تواصل',
    'nav-cta':      'تواصل معي',

    /* --- Hero --- */
    'hero-badge':       'ميكانيكي · 20 عامًا · ديجون',
    'hero-title':       'صالح<br /><span class="gradient-text">عبد السلام.</span>',
    'hero-lead':        'صرامة <strong>المحترف</strong>.<br />شغف <strong>التعلّم</strong>.',
    'hero-desc':        'حاصلٌ على <strong>شهادة CAP في صيانة المركبات</strong>، أمتلك <strong>3 سنوات من الخبرة</strong> تجمع بين التدخّلات في الورشة والتعلّم الذاتي المتعمّق. مجهَّزٌ بـ<strong>معدات التشخيص الخاصة بي</strong>، أكرّس نفسي بالكامل لتطوير مهاراتي. أبحث اليوم عن <strong>تدريب بالتناوب لتحضير شهادة البكالوريا المهنية</strong> في وكالة سيارات ديناميكية، مع وضع جدّيتي ومعارفي في خدمة شبكتي لتقديم أي استشارة تقنية.',
    'hero-cta1':        'اكتشف مسيرتي',
    'hero-cta2':        'هل تحتاج إلى معلومة؟ تواصل معي',
    'hero-badge-label': 'أبحث عن',
    'hero-badge-value': 'تدريب البكالوريا المهنية',
    'hero-scroll':      'مرّر',

    /* --- Stats --- */
    'stat1-unit':  'سنوات',
    'stat1-title': 'خبرة متراكمة',
    'stat1-desc':  'ورشة وتعلّم ذاتي',
    'stat2-unit':  '+ بكالوريا مهنية',
    'stat2-title': 'صيانة المركبات',
    'stat2-desc':  'بكالوريا مهنية بالتناوب',
    'stat3-unit':  'شخصي',
    'stat3-title': 'معدات التشخيص',
    'stat3-desc':  'استثمار من مالي الخاص',
    'stat4-unit':  'متابعة',
    'stat4-title': 'تعلّم ذاتي',
    'stat4-desc':  'الإلكترونيات المدمجة',

    /* --- À propos --- */
    'about-eyebrow': '⟵ حول',
    'about-title':   'أكثر من مهنة.<br /><span class="muted">شغف حقيقي.</span>',
    'about-p1':      'في سن <strong>العشرين</strong>، أنا حاصلٌ على <strong>شهادة CAP في صيانة المركبات</strong> وأمتلك <strong>3 سنوات من الخبرة</strong>، موزّعة بين تدخّلاتي المهنية والتعلّم الذاتي المتعمّق. لكن ما يميّزني حقًا هو طريقتي في التعامل مع الميكانيكا.',
    'about-p2':      'أنا <strong>فضولي ومبادر</strong> بطبعي. لهذا السبب استثمرت في <strong>معدات تشخيص متقدمة</strong> خاصة بي. في أوقات فراغي، أتدرّب على فهم <strong>الإلكترونيات المدمجة</strong>، وأدرس طرق إصلاح جديدة بمساعدة الأدوات الرقمية، وأسعى دائمًا إلى توسيع معارفي.',
    'about-quote':   'في قطاعٍ يتطوّر بهذه السرعة، الاستمرار في التعلّم بالنسبة لي بديهية.',
    'about-p3':      'اليوم، هدفي واضح: <strong>الانضمام إلى وكالة سيارات ديناميكية</strong> لتحضير <strong>البكالوريا المهنية بالتناوب</strong> فيها وتقديم حماستي، مع البقاء متاحًا للنصح ومساعدة محيطي في صيانة مركباتهم.',

    /* --- Savoir-faire --- */
    'skills-eyebrow':    '⟵ الخبرات',
    'skills-title':      'من الصيانة اليومية<br /><span class="muted">إلى التشخيص الدقيق.</span>',
    'skills-cat1-title': 'الصيانة والمتابعة',
    'skills-cat1-1':     '<strong>تغيير الزيت</strong> والمراجعة الدورية',
    'skills-cat1-2':     '<strong>الإطارات</strong>، الفرامل، نظام التعليق',
    'skills-cat1-3':     '<strong>التوزيع</strong>، السيور، القابض',
    'skills-cat1-4':     '<strong>التكييف</strong> ونظام التبريد',
    'skills-cat2-title': 'التشخيص والإلكترونيات',
    'skills-cat2-1':     'استخدام <strong>حقيبة التشخيص</strong> (OBD متعدد العلامات)',
    'skills-cat2-2':     'قراءة ومسح وتفسير <strong>رموز الأعطال</strong>',
    'skills-cat2-3':     'تحليل <strong>البيانات في الوقت الفعلي</strong> للبحث عن الأعطال',
    'skills-cat2-4':     'فهم <strong>الأنظمة الإلكترونية المدمجة</strong>',
    'skills-cat3-title': 'الميكانيكا العامة',
    'skills-cat3-1':     'فك وتركيب <strong>مكوّنات المحرك</strong>',
    'skills-cat3-2':     'البحث عن <strong>التسرّبات وإصلاحها</strong> (سوائل وهواء)',
    'skills-cat3-3':     'استبدال <strong>قطع الاستهلاك المعقّدة</strong>',
    'skills-cat3-4':     '<strong>فحوصات السلامة</strong> والاختبارات الميدانية',

    /* --- Mon approche --- */
    'approach-eyebrow':     '⟵ منهجي',
    'approach-title':       'الفهم<br /><span class="muted">قبل الإصلاح.</span>',
    'approach-p1':          'الأعطال <strong>سيّئة التشخيص</strong> تكلّف العميل والورشة مبالغ كبيرة. منهجي بسيط: <strong>عدم استبدال أي قطعة</strong> قبل التأكّد رسميًا من <strong>السبب الجذري</strong> للمشكلة.',
    'approach-p2':          'هذا يتطلّب الصبر والمنهجية واستخدام الأدوات المناسبة وتحليل البيانات. هذا هو الهدف الذي أضعه لنفسي يوميًا: ألا أكون مجرد منفّذ، بل أن أصبح <strong>تقنيًا يقدّم حلولًا حقيقية</strong>.',
    'approach-step1-title': 'الاستماع وجمع المعلومات',
    'approach-step1-desc':  'فهم الأعراض مع العميل',
    'approach-step2-title': 'تشخيص دقيق',
    'approach-step2-desc':  'قراءة البيانات والاختبارات الفعلية',
    'approach-step3-title': 'تدخّل مستهدَف',
    'approach-step3-desc':  'استبدال القطعة والتحقّق من النتيجة',

    /* --- Pour mon réseau --- */
    'network-eyebrow': '⟵ لشبكتي',
    'network-title':   'هل تحتاج إلى رأي<br /><span class="muted">قبل اتخاذ قرارك؟</span>',
    'network-p1':      'إن كنتَ من ضمن شبكتي وتتردّد قبل <strong>عملية شراء</strong>، أو <strong>إصلاح</strong>، أو تريد ببساطة فهم <strong>عرض أسعار يبدو لك معقّدًا</strong> — لا تتردّد. أخصّص وقتي لأشرح لك بكلّ <strong>شفافية</strong> ما يحدث تحت غطاء المحرك لمساعدتك على رؤية الأمور بوضوح.',
    'network-srv1':    '<strong>رأي تقني</strong> قبل شراء سيارة مستعملة',
    'network-srv2':    '<strong>قراءة وشرح</strong> عروض أسعار الصيانة',
    'network-srv3':    '<strong>تشخيص وقائي</strong> ونصائح شخصية',
    'network-cta':     'تواصل معي عبر شبكاتي',

    /* --- Différenciateur --- */
    'diff-eyebrow':      '⟵ ما يميّزني',
    'diff-title':        'أداة تشخيصي.<br /><span class="gradient-text">مختبري الشخصي.</span>',
    'diff-p1':           'استثمرتُ شخصيًا في <strong>جهاز تشخيص لوحي احترافي متعدّد العلامات وعالي التقنية</strong>. منهجي بسيط: أن أتمكّن من التدرّب خارج ساعات الورشة، وتحليل رموز الأعطال بنفسي، وفهم <strong>البنية الإلكترونية</strong> للمركبات الحديثة، والوصول كلّ صباح بـ<strong>خطوة سابقة</strong>.',
    'diff-p2':           'هذه المعدات المتطوّرة تتيح لي الاستكشاف بعمق:',
    'diff-feat1-strong': 'قراءة مفصّلة لأنظمة متعدّدة',
    'diff-feat1-desc':   'المحرك، نظام ABS، الوسائد الهوائية، BCM، TCM…',
    'diff-feat2-strong': 'دراسة الإلكترونيات المدمجة',
    'diff-feat2-desc':   'مراقبة عمليات البرمجة والتكييف على المركبات الحديثة',
    'diff-feat3-strong': 'تحليل بنية المركبة',
    'diff-feat3-desc':   'استعراض طوبولوجيا الشبكة المتعدّدة الإرسال (Multiplex)',
    'diff-feat4-strong': 'متابعة تكنولوجية',
    'diff-feat4-desc':   'بفضل التحديثات البرمجية المنتظمة للأداة',

    /* --- ADN --- */
    'adn-eyebrow': '⟵ هويّتي',
    'adn-title':   'ثلاث ركائز،<br /><span class="muted">هدفٌ واحد: الفعالية.</span>',
    'adn-1-title': 'استثمار تقني',
    'adn-1-desc':  'استثمرتُ <strong>من مالي الخاص</strong> في معدات التشخيص المتقدّمة الخاصة بي. أتدرّب باستقلالية من أجل <strong>إتقان الإلكترونيات المدمجة</strong> والحصول على فعالية أكبر في البحث عن الأعطال.',
    'adn-2-title': 'التعلّم الذاتي والفضول',
    'adn-2-desc':  'أستخدم <strong>الأدوات الرقمية والذكاء الاصطناعي</strong> يوميًا لاكتشاف طرق إصلاح جديدة. أبقى دائمًا متابعًا لـ<strong>تطوّرات قطاع السيارات</strong> لتقديم أفضل النصائح لمحيطي.',
    'adn-3-title': 'الخبرة والممارسة',
    'adn-3-desc':  'بفضل <strong>3 سنوات من الممارسة</strong> (تجمع بين الخبرات المهنية في الورشة والميكانيكا الشخصية)، طوّرتُ <strong>صرامةً عالية</strong>. من صيانة العلامات المتعدّدة إلى التشخيص، لديّ شغف <strong>العمل المتقَن</strong>.',

    /* --- Vision --- */
    'vision-eyebrow': '⟵ رؤية بعيدة المدى',
    'vision-title':   'الخبرة عبر<br /><span class="gradient-text">التدريب المستمرّ.</span>',
    'vision-p1':      'هدفي على <strong>المدى القصير</strong> هو الحصول على تدريبي بالتناوب لـ<strong>التفوّق في البكالوريا المهنية</strong>. لكن رؤيتي تذهب إلى أبعد من ذلك بكثير.',
    'vision-p2':      'عالم السيارات يتطوّر بسرعة كبيرة مع <strong>الإلكترونيات</strong> و<strong>أنظمة الدفع الحديثة</strong>. طموحي هو <strong>ألا أتوقّف عن التعلّم أبدًا</strong>. أرغب في متابعة الدورات التدريبية المتخصّصة، وتطوير كفاءتي باستمرار، وإتقان أدقّ عمليات التشخيص.',
    'vision-quote':   'هدفي ليس التوقّف عند شهادة، بل أن أصبح <strong>خبيرًا تقنيًا</strong> حقيقيًا، قادرًا على التطوّر مع زمنه وحلّ المشكلات التي لا يجدها الآخرون.',

    /* --- Contact --- */
    'contact-eyebrow':         '⟵ تواصل وشبكات',
    'contact-title':           'لنبقَ<br /><span class="muted">على تواصل.</span>',
    'contact-p1':              'سواء كنتَ <strong>مسؤول توظيف</strong> تبحث عن متدرّب البكالوريا المهنية متحمّس للمستقبل، أو <strong>أحد أفراد شبكتي</strong> يحتاج إلى رأي تقني، لا تتردّد في الكتابة إليّ مباشرة. يمكن الوصول إليّ بسهولة وأخصّص دائمًا الوقت للردّ.',
    'contact-card-title':      'بياناتي المباشرة للتواصل',
    'contact-tel-label':       'الهاتف',
    'contact-mail-label':      'البريد الإلكتروني',
    'contact-linkedin-label':  'لينكد إن',
    'contact-insta-label':     'إنستغرام',

    /* --- Footer --- */
    'footer-copy': '© 2026 صالح عبد السلام · صُمِّم بإتقان في ديجون'
  }
};


/* ════════════════════════════════════════════════════════════════════════════
   🔄 FONCTION DE BASCULE — Applique une langue à toute la page
   ════════════════════════════════════════════════════════════════════════════
   Étapes :
     1. Met à jour <html lang="..." dir="..."> pour informer le navigateur
     2. Ajoute/enlève la classe "lang-ar" sur <html> (utile pour le CSS)
     3. Parcourt tous les éléments [data-i18n] et remplace leur contenu
     4. Met à jour le visuel du toggle (FR ou AR en cyan)
     5. Sauvegarde le choix dans localStorage (mémoire du navigateur)
   ════════════════════════════════════════════════════════════════════════════ */

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;          // Sécurité : si la langue n'existe pas, on stoppe

  // 1. Direction de lecture + attribut lang
  const root = document.documentElement;
  root.lang = lang;
  root.dir  = (lang === 'ar') ? 'rtl' : 'ltr';

  // 2. Classe utilitaire pour le CSS
  root.classList.toggle('lang-ar', lang === 'ar');
  root.classList.toggle('lang-fr', lang === 'fr');

  // 3. Remplacement de tous les textes traduisibles
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // 4. Mise à jour visuelle du toggle (option active = cyan)
  document.querySelectorAll('.lang-toggle__opt').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });

  // 5. Mémorisation pour les prochaines visites
  try { localStorage.setItem('autekpro-lang', lang); } catch (e) {}

  // 6. Mise à jour de l'aria-label du toggle pour l'accessibilité
  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.setAttribute('aria-label',
      lang === 'fr' ? 'Passer à l\'arabe' : 'Switch to French');
  }
}


/* ════════════════════════════════════════════════════════════════════════════
   🚀 INITIALISATION (s'exécute au chargement de la page)
   ════════════════════════════════════════════════════════════════════════════ */

(() => {

  /* ──── Récupération des éléments ──── */
  const nav        = document.getElementById('nav');
  const menuBtn    = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const langToggle = document.getElementById('langToggle');


  /* ──── Effet "barre devient noire au défilement" ──── */
  const onScroll = () => {
    if (window.scrollY > 30) nav.classList.add('is-scrolled');
    else                     nav.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  /* ──── Menu hamburger mobile ──── */
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open');
    menuBtn.classList.toggle('is-open', isOpen);
    menuBtn.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  // Fermer le menu après avoir cliqué sur un lien
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      menuBtn.classList.remove('is-open');
      menuBtn.setAttribute('aria-label', 'Ouvrir le menu');
    });
  });


  /* ──── BASCULE DE LANGUE FR ↔ AR ──── */
  langToggle.addEventListener('click', () => {
    // On regarde la langue actuelle et on bascule sur l'autre
    const current = document.documentElement.lang || 'fr';
    const next    = (current === 'fr') ? 'ar' : 'fr';
    applyLanguage(next);
  });


  /* ──── Application de la langue mémorisée (ou français par défaut) ──── */
  let savedLang = 'fr';
  try { savedLang = localStorage.getItem('autekpro-lang') || 'fr'; } catch (e) {}
  applyLanguage(savedLang);

})();
