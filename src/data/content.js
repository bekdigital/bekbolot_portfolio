/**
 * ALL website content lives in this file.
 *
 * - Text that differs by language is written as { en: '...', ru: '...' }.
 * - Text that is the same in both languages (names, emails, dates) is a plain string.
 * - To add a job, course or project, copy an existing item and edit it.
 *
 * Nothing here is shown that you don't put here: date of birth and phone
 * number are intentionally NOT included.
 */

// ---------------------------------------------------------------------------
// Basic profile & links
// ---------------------------------------------------------------------------
export const profile = {
  name: { en: 'Bekbolot Tolomushov', ru: 'Бекболот Толомушов' },
  title: {
    en: 'Security, Defence & Programme Management Professional',
    ru: 'Специалист в области безопасности, обороны и управления программами',
  },
  location: { en: 'Bishkek, Kyrgyz Republic', ru: 'Бишкек, Кыргызская Республика' },
  summary: {
    en: '24 years of military service, UN field experience and security work with diplomatic missions, combining strategic planning with hands-on operations.',
    ru: '24 года военной службы, опыт работы в миссии ООН и обеспечения безопасности дипломатических представительств: стратегическое планирование и практическая работа.',
  },
  email: 'bekbolot.tolomushov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/bek-tolo1/',
  // Files in the /public folder
  cvFile: '/Bekbolot_Tolomushov_CV.pdf',
  photo: '/profile.jpg',
  photoAlt: {
    en: 'Portrait of Bekbolot Tolomushov',
    ru: 'Портрет Бекболота Толомушова',
  },
}

// ---------------------------------------------------------------------------
// Interface labels (navigation, buttons, headings)
// ---------------------------------------------------------------------------
export const ui = {
  nav: {
    about: { en: 'About', ru: 'Обо мне' },
    experience: { en: 'Experience', ru: 'Опыт' },
    education: { en: 'Education', ru: 'Образование' },
    training: { en: 'Training', ru: 'Курсы' },
    languages: { en: 'Languages', ru: 'Языки' },
    skills: { en: 'Skills', ru: 'Навыки' },
    projects: { en: 'Projects', ru: 'Проекты' },
    contact: { en: 'Contact', ru: 'Контакты' },
  },
  skipToContent: { en: 'Skip to content', ru: 'Перейти к содержанию' },
  openMenu: { en: 'Open menu', ru: 'Открыть меню' },
  closeMenu: { en: 'Close menu', ru: 'Закрыть меню' },
  switchToLight: { en: 'Switch to light mode', ru: 'Включить светлую тему' },
  switchToDark: { en: 'Switch to dark mode', ru: 'Включить тёмную тему' },
  languageLabel: { en: 'Language', ru: 'Язык' },
  downloadCv: { en: 'Download CV', ru: 'Скачать резюме' },
  contactMe: { en: 'Contact me', ru: 'Связаться' },
  present: { en: 'present', ru: 'н.в.' },
  responsibilities: { en: 'Responsibilities', ru: 'Обязанности' },
  achievements: { en: 'Key achievements', ru: 'Достижения' },
  showDetails: { en: 'Show details', ru: 'Подробнее' },
  hideDetails: { en: 'Hide details', ru: 'Скрыть' },
  thesis: { en: "Master's thesis", ru: 'Магистерская диссертация' },
  publication: { en: 'Publication', ru: 'Публикация' },
  readPublication: { en: 'Read the article', ru: 'Читать статью' },
  learnMore: { en: 'Learn more', ru: 'Официальный сайт' },
  studied: { en: 'Studied', ru: 'Период обучения' },
  graduated: { en: 'Graduated', ru: 'Выпуск' },
  place: { en: 'Location', ru: 'Место' },
  academicEducation: { en: 'Academic education', ru: 'Академическое образование' },
  coursesHeading: { en: 'Courses & training', ru: 'Курсы и подготовка' },
  details: { en: 'Details', ru: 'Подробнее' },
  hide: { en: 'Hide', ru: 'Скрыть' },
  showAllCourses: { en: 'Show all', ru: 'Показать все' },
  coursesTab: { en: 'Professional courses', ru: 'Профессиональные курсы' },
  trainingsTab: { en: 'Short trainings & certificates', ru: 'Краткосрочные тренинги и сертификаты' },
  coursesTabHint: { en: '1 month or longer', ru: '1 месяц и более' },
  trainingsTabHint: { en: 'Seminars, short trainings and online courses', ru: 'Семинары, краткие тренинги и онлайн-курсы' },
  unTag: { en: 'UN', ru: 'ООН' },
  showFewerCourses: { en: 'Show fewer', ru: 'Свернуть' },
  originalName: { en: 'Original name', ru: 'Оригинальное название' },
  comingSoon: { en: 'Details coming soon', ru: 'Подробности скоро' },
  visit: { en: 'Visit', ru: 'Открыть' },
  backToTop: { en: 'Back to top', ru: 'Наверх' },
  rights: { en: 'All rights reserved.', ru: 'Все права защищены.' },
}

// ---------------------------------------------------------------------------
// Section headings & intros
// ---------------------------------------------------------------------------
export const sections = {
  about: { title: { en: 'About', ru: 'Обо мне' }, eyebrow: { en: 'Profile', ru: 'Профиль' } },
  experience: {
    title: { en: 'Professional Experience', ru: 'Профессиональный опыт' },
    eyebrow: { en: 'Career', ru: 'Карьера' },
  },
  education: { title: { en: 'Education', ru: 'Образование' }, eyebrow: { en: 'Academic', ru: 'Академическое' } },
  training: {
    title: { en: 'Training & Certificates', ru: 'Курсы и сертификаты' },
    eyebrow: { en: 'Professional development', ru: 'Профессиональное развитие' },
  },
  languages: { title: { en: 'Languages', ru: 'Языки' }, eyebrow: { en: 'Communication', ru: 'Коммуникация' } },
  skills: { title: { en: 'Skills', ru: 'Навыки' }, eyebrow: { en: 'Competencies', ru: 'Компетенции' } },
  projects: {
    title: { en: 'Projects', ru: 'Проекты' },
    eyebrow: { en: 'Personal & digital', ru: 'Личные и цифровые' },
  },
  contact: {
    title: { en: 'Contact', ru: 'Контакты' },
    eyebrow: { en: 'Get in touch', ru: 'Связаться' },
    intro: {
      en: 'Open to roles in security, programme management and international cooperation. I am happy to hear from UN agencies, international organisations, embassies and NGOs. References are available on request.',
      ru: 'Открыт к предложениям в сфере безопасности, управления программами и международного сотрудничества: агентства ООН, международные организации, посольства и НКО. Рекомендации предоставляются по запросу.',
    },
  },
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  paragraphs: [
    {
      en: 'Senior security and defence professional with 24 years of service in the Armed Forces of the Kyrgyz Republic, including the post of Deputy Chief of the Operational Planning Directorate of the General Staff, followed by security work with diplomatic missions and the United Nations.',
      ru: 'Специалист в области безопасности и обороны с 24-летним стажем службы в Вооружённых силах Кыргызской Республики, включая должность заместителя начальника Оперативно-планового управления Генерального штаба. Затем работал в сфере безопасности дипломатических представительств и Организации Объединённых Наций.',
    },
    {
      en: 'Experienced in strategic and operational planning, full-cycle project management, multinational coordination within CSTO, SCO and UN frameworks, arms control inspections, and security analysis and reporting. UN Military Observer with UNAMID in Darfur, Sudan.',
      ru: 'Опыт в стратегическом и оперативном планировании, управлении проектами полного цикла, многосторонней координации в рамках ОДКБ, ШОС и ООН, инспекциях по контролю над вооружениями, анализе обстановки и отчётности. Военный наблюдатель ООН в миссии ЮНАМИД (Дарфур, Судан).',
    },
    {
      en: "Holds a Master's degree in Management and graduated as a General Staff Officer from the German Armed Forces Command and Staff College. Fluent in Kyrgyz, Russian, English and Turkish, and continuously developing skills in artificial intelligence and digital tools.",
      ru: 'Магистр менеджмента, выпускник Командно-штабной академии Бундесвера (Германия) по программе офицеров Генерального штаба. Свободно владеет кыргызским, русским, английским и турецким языками; постоянно развивает навыки работы с искусственным интеллектом и цифровыми инструментами.',
    },
  ],
  highlights: [
    { en: 'Strategic & operational planning', ru: 'Стратегическое и оперативное планирование' },
    { en: 'Full-cycle project management', ru: 'Управление проектами полного цикла' },
    { en: 'Multinational coordination (CSTO, SCO, UN)', ru: 'Многосторонняя координация (ОДКБ, ШОС, ООН)' },
    { en: 'Arms control inspections & verification', ru: 'Инспекции и верификация в области контроля над вооружениями' },
    { en: 'Security analysis & reporting', ru: 'Анализ безопасности и отчётность' },
    { en: 'UN Military Observer, UNAMID', ru: 'Военный наблюдатель ООН, ЮНАМИД' },
    { en: 'General Staff Officer, Führungsakademie der Bundeswehr', ru: 'Офицер Генштаба, Командно-штабная академия Бундесвера' },
  ],
}

// ---------------------------------------------------------------------------
// Key numbers
// ---------------------------------------------------------------------------
export const stats = [
  { value: '24+', label: { en: 'Years of service', ru: 'Лет службы' } },
  { value: '6', label: { en: 'Languages', ru: 'Языков' } },
  {
    value: { en: 'UNAMID & UNDP', ru: 'ЮНАМИД и ПРООН' },
    label: { en: 'UN missions & agencies', ru: 'Миссии и агентства ООН' },
  },
  {
    value: '3',
    label: {
      en: 'Countries of education: Kyrgyzstan, Germany, Türkiye',
      ru: 'Страны обучения: Кыргызстан, Германия, Турция',
    },
  },
]

// ---------------------------------------------------------------------------
// Experience (newest first). Dates are "MM/YYYY"; leave `end` empty for "present".
// ---------------------------------------------------------------------------
export const experience = [
  {
    role: { en: 'Security Operations Support', ru: 'Специалист по поддержке операций безопасности' },
    organisation: {
      en: 'United Nations Development Programme (UNDP)',
      ru: 'Программа развития ООН (ПРООН)',
    },
    location: { en: 'Bishkek, Kyrgyz Republic', ru: 'Бишкек, Кыргызская Республика' },
    start: '01/2026',
    end: '',
    responsibilities: [
      {
        en: 'Control and verify access of staff, visitors and vehicles to UNDP premises in line with UN security procedures.',
        ru: 'Контроль и проверка доступа сотрудников, посетителей и транспорта на объекты ПРООН в соответствии с процедурами безопасности ООН.',
      },
      {
        en: 'Monitor CCTV, fire alarm and intrusion detection systems; conduct patrols, report incidents and maintain security logs.',
        ru: 'Мониторинг систем видеонаблюдения, пожарной и охранной сигнализации; патрулирование, доклады об инцидентах и ведение журналов безопасности.',
      },
      {
        en: 'Support emergency response, including evacuation and coordination with the UN Security Operations Centre and emergency services.',
        ru: 'Поддержка реагирования на чрезвычайные ситуации, включая эвакуацию и координацию с Оперативным центром безопасности ООН и экстренными службами.',
      },
    ],
    achievements: [],
  },
  {
    role: { en: 'UN Security Operations Centre (UNSOC) Operator', ru: 'Оператор Оперативного центра безопасности ООН (UNSOC)' },
    organisation: {
      en: 'United Nations Development Programme (UNDP)',
      ru: 'Программа развития ООН (ПРООН)',
    },
    location: { en: 'Bishkek, Kyrgyz Republic', ru: 'Бишкек, Кыргызская Республика' },
    start: '03/2024',
    end: '12/2025',
    responsibilities: [
      {
        en: 'Collected and analysed data on security incidents in the Kyrgyz Republic; prepared analytical reports, incident records, maps and monthly summaries.',
        ru: 'Сбор и анализ данных об инцидентах безопасности в Кыргызской Республике; подготовка аналитических отчётов, учёт инцидентов, карты и ежемесячные обзоры.',
      },
      {
        en: 'Liaised with UN Security Operations Centres across Central Asia, national authorities and UN agencies on information exchange and joint planning.',
        ru: 'Взаимодействие с оперативными центрами безопасности ООН в Центральной Азии, национальными органами и агентствами ООН по обмену информацией и совместному планированию.',
      },
      {
        en: 'Monitored local media and open sources; summarised and translated security information from Kyrgyz and Russian into English.',
        ru: 'Мониторинг местных СМИ и открытых источников; обобщение и перевод информации по безопасности с кыргызского и русского языков на английский.',
      },
      {
        en: 'Managed databases of UN personnel, vehicles and emergency contacts; operated VHF/HF radio and satellite communications; supported the warden system.',
        ru: 'Ведение баз данных персонала ООН, транспорта и экстренных контактов; работа с УКВ/КВ-радиосвязью и спутниковой связью; поддержка системы старост (warden system).',
      },
      {
        en: 'Issued UN ID cards and provided administrative and technical support to the Security Operations Centre.',
        ru: 'Оформление удостоверений ООН; административная и техническая поддержка Оперативного центра безопасности.',
      },
    ],
    achievements: [
      {
        en: 'Established regular cross-border information exchange with UNSOCs in Kazakhstan, Uzbekistan and Tajikistan.',
        ru: 'Наладил регулярный трансграничный обмен информацией с UNSOC в Казахстане, Узбекистане и Таджикистане.',
      },
      {
        en: 'Produced timely security analyses used by the Security Adviser and UN agency heads for operational decision-making.',
        ru: 'Готовил своевременные аналитические материалы, которые Советник по безопасности и руководители агентств ООН использовали для принятия оперативных решений.',
      },
    ],
  },
  {
    role: {
      en: 'Mobile Patrol Member / Field Safety Expert',
      ru: 'Сотрудник мобильного патруля / эксперт по полевой безопасности',
    },
    organisation: { en: 'Security Associated', ru: 'Security Associated' },
    location: { en: 'Bishkek, Kyrgyz Republic', ru: 'Бишкек, Кыргызская Республика' },
    start: '09/2021',
    end: '02/2024',
    responsibilities: [
      {
        en: 'Ensured the security of diplomatic missions and residences of international staff, including the EU Delegation and the World Bank office.',
        ru: 'Обеспечение безопасности дипломатических представительств и резиденций международных сотрудников, включая Представительство ЕС и офис Всемирного банка.',
      },
      {
        en: 'Worked closely with EU staff and diplomats, assisting with daily issues (translation, deliveries, residence checks).',
        ru: 'Тесное взаимодействие с сотрудниками ЕС и дипломатами, помощь в повседневных вопросах (перевод, доставка, проверка резиденций).',
      },
      {
        en: 'Planned patrol routes and guard staffing schedules; supervised, trained and evaluated security guards; prepared security reports.',
        ru: 'Планирование маршрутов патрулирования и графиков охраны; руководство, обучение и оценка охранников; подготовка отчётов по безопасности.',
      },
      {
        en: 'Responded to alarms and incidents (fire, intrusion) and coordinated with emergency services.',
        ru: 'Реагирование на сигналы тревоги и инциденты (пожар, проникновение), координация с экстренными службами.',
      },
    ],
    achievements: [
      {
        en: 'Promoted from Security Guard at the Embassy of Japan to Mobile Patrol Member.',
        ru: 'Повышен с должности охранника в Посольстве Японии до сотрудника мобильного патруля.',
      },
      {
        en: 'Designed and introduced a staff performance evaluation system, a risk-based rating system for security posts and an internal promotion system.',
        ru: 'Разработал и внедрил систему оценки работы персонала, рейтинговую систему постов охраны на основе рисков и систему внутреннего продвижения.',
      },
      {
        en: 'Introduced digital tools (Google Forms, Notion) to plan, track and coordinate patrol tasks.',
        ru: 'Внедрил цифровые инструменты (Google Forms, Notion) для планирования, учёта и координации патрульных задач.',
      },
    ],
  },
  {
    role: {
      en: 'Deputy Chief, Operational Planning Directorate',
      ru: 'Заместитель начальника Оперативно-планового управления',
    },
    organisation: {
      en: 'General Staff of the Armed Forces of the Kyrgyz Republic: Main Operational Directorate',
      ru: 'Генеральный штаб Вооружённых сил Кыргызской Республики, Главное оперативное управление',
    },
    location: { en: 'Bishkek', ru: 'Бишкек' },
    start: '07/2019',
    end: '08/2021',
    responsibilities: [
      {
        en: 'Managed the drafting, approval and implementation of the Annual Military Readiness Plan; monitored execution of all activities and reported results to senior leadership.',
        ru: 'Руководство разработкой, утверждением и выполнением Годового плана боевой готовности; контроль выполнения всех мероприятий и доклад результатов руководству.',
      },
      {
        en: 'Planned and organised national and international military exercises (CSTO, SCO, bilateral), including resource planning, scheduling and coordination of units.',
        ru: 'Планирование и организация национальных и международных учений (ОДКБ, ШОС, двусторонних), включая планирование ресурсов, графиков и координацию подразделений.',
      },
      {
        en: 'Organised and conducted staff negotiations with partner countries on joint exercises.',
        ru: 'Организация и проведение штабных переговоров со странами-партнёрами по совместным учениям.',
      },
      {
        en: 'Coordinated joint planning with the Ministries of Internal Affairs, Emergency Situations, Foreign Affairs, Health and other state agencies.',
        ru: 'Координация совместного планирования с МВД, МЧС, МИД, Министерством здравоохранения и другими государственными органами.',
      },
      {
        en: 'Member of the inspection group assessing the accounting, storage and security of arms, weapons and ammunition in military units.',
        ru: 'Член инспекционной группы по проверке учёта, хранения и охраны вооружения и боеприпасов в воинских частях.',
      },
      {
        en: 'Supervised a team of officers; prepared analytical reports, briefing notes and recommendations for the General Staff leadership.',
        ru: 'Руководство группой офицеров; подготовка аналитических докладов, справок и рекомендаций для руководства Генерального штаба.',
      },
    ],
    achievements: [
      {
        en: 'Initiated and led the drafting of the first Annual Military Readiness Plan of the Armed Forces in the Kyrgyz state language.',
        ru: 'Инициировал и руководил разработкой первого Годового плана боевой готовности Вооружённых сил на государственном (кыргызском) языке.',
      },
      {
        en: 'Contributed to drafting the new Military Doctrine of the Kyrgyz Republic as a member of the working group.',
        ru: 'Участвовал в разработке новой Военной доктрины Кыргызской Республики в составе рабочей группы.',
      },
      {
        en: 'Represented the General Staff in CSTO, SCO and bilateral staff negotiations on the planning and conduct of joint exercises.',
        ru: 'Представлял Генеральный штаб на штабных переговорах ОДКБ, ШОС и в двустороннем формате по планированию и проведению совместных учений.',
      },
      {
        en: 'Accompanied international verification teams during inspections of Kyrgyz military units.',
        ru: 'Сопровождал международные верификационные группы при инспекциях воинских частей Кыргызстана.',
      },
    ],
  },
  {
    role: {
      en: 'Senior Officer, Main Operational Directorate',
      ru: 'Старший офицер Главного оперативного управления',
    },
    organisation: {
      en: 'General Staff of the Armed Forces of the Kyrgyz Republic',
      ru: 'Генеральный штаб Вооружённых сил Кыргызской Республики',
    },
    location: { en: 'Bishkek', ru: 'Бишкек' },
    start: '03/2015',
    end: '06/2019',
    responsibilities: [
      {
        en: 'Contributed to operational planning and the development of annual plans and directives of the Armed Forces.',
        ru: 'Участие в оперативном планировании и разработке годовых планов и директив Вооружённых сил.',
      },
      {
        en: 'Prepared planning documents, analytical reports and briefing materials; participated in planning national and international exercises.',
        ru: 'Подготовка плановых документов, аналитических докладов и справочных материалов; участие в планировании национальных и международных учений.',
      },
      {
        en: 'Monitored the implementation of directives and training in military units; coordinated with General Staff directorates and state agencies.',
        ru: 'Контроль выполнения директив и боевой подготовки в воинских частях; координация с управлениями Генерального штаба и государственными органами.',
      },
    ],
    achievements: [
      {
        en: 'Selected to attend the German Armed Forces Command and Staff College, Hamburg (11/2016 – 06/2018).',
        ru: 'Отобран для обучения в Командно-штабной академии Бундесвера, Гамбург (11/2016 – 06/2018).',
      },
      {
        en: 'Promoted to Deputy Chief of the Operational Planning Directorate.',
        ru: 'Назначен заместителем начальника Оперативно-планового управления.',
      },
    ],
  },
  {
    role: {
      en: 'Military Observer (UN Military Expert on Mission)',
      ru: 'Военный наблюдатель (военный эксперт ООН в миссии)',
    },
    organisation: {
      en: 'African Union – United Nations Hybrid Operation in Darfur (UNAMID)',
      ru: 'Смешанная операция Африканского союза и ООН в Дарфуре (ЮНАМИД)',
    },
    location: { en: 'Darfur, Sudan', ru: 'Дарфур, Судан' },
    start: '01/2013',
    end: '01/2015',
    responsibilities: [
      {
        en: 'Conducted patrols to monitor ceasefire conditions and the security situation; verified information and prepared daily and incident reports.',
        ru: 'Патрулирование для контроля за соблюдением режима прекращения огня и обстановкой; проверка информации, подготовка ежедневных отчётов и отчётов об инцидентах.',
      },
      {
        en: 'Engaged with local authorities, community leaders and humanitarian actors to build confidence; reported on the protection of women and children.',
        ru: 'Взаимодействие с местными властями, лидерами общин и гуманитарными организациями для укрепления доверия; отчётность по защите женщин и детей.',
      },
      {
        en: 'As Assistant to the Deputy Chief Military Observer: coordinated deployment of military observers to team sites, leave schedules, travel and supplies.',
        ru: 'В качестве помощника заместителя главного военного наблюдателя: координация размещения военных наблюдателей по опорным пунктам, графиков отпусков, поездок и снабжения.',
      },
    ],
    achievements: [
      {
        en: "Initiated quick-impact projects, including sanitation facilities at the women's prison in Mellit and a water dam for a local village.",
        ru: 'Инициировал проекты быстрой отдачи, в том числе санитарные объекты в женской тюрьме в Меллите и водохранилище для местной деревни.',
      },
    ],
  },
  {
    role: {
      en: 'Military Officer: Platoon Commander to Battalion Chief of Staff',
      ru: 'Офицер: от командира взвода до начальника штаба батальона',
    },
    organisation: {
      en: 'Ministry of Defence / Armed Forces of the Kyrgyz Republic',
      ru: 'Министерство обороны / Вооружённые силы Кыргызской Республики',
    },
    location: { en: 'Kyrgyz Republic', ru: 'Кыргызская Республика' },
    start: '08/1997',
    end: '12/2012',
    responsibilities: [
      {
        en: 'Commanded platoon and company-level units; responsible for training, discipline, welfare, readiness and the security of arms and equipment.',
        ru: 'Командование подразделениями уровня взвода и роты; ответственность за подготовку, дисциплину, быт личного состава, боеготовность и сохранность вооружения и техники.',
      },
      {
        en: 'As Chief of Training Subsection: planned, organised and evaluated training programmes for army sergeants in leadership and small-unit operations.',
        ru: 'В качестве начальника учебного отделения: планирование, организация и оценка программ подготовки сержантов по лидерству и действиям малых подразделений.',
      },
      {
        en: 'As Battalion Chief of Staff: planned daily activities, training and exercises; managed duty schedules, leave, personnel and logistics; ensured timely reporting.',
        ru: 'В качестве начальника штаба батальона: планирование повседневной деятельности, подготовки и учений; графики нарядов, отпуска, кадровое и тыловое обеспечение; своевременная отчётность.',
      },
    ],
    achievements: [],
  },
]

// ---------------------------------------------------------------------------
// Education
//
// Part 1: academic education. Each institution has:
//   names     – name in the original language(s), in English and in Russian
//   image     – photo file in /public/education/ ('' shows a placeholder)
//   imageCredit – { text, url }: author and licence of the photo (required for
//                 Wikimedia photos; use null for your own photos)
//   about     – one short sentence about the school
//   website   – official website ("Learn more" button)
//   level     – short label shown on the compact card (e.g. "Master's degree")
//   studied   – years of study; graduated – graduation year
//   publication – optional { title, journal, url }
// ---------------------------------------------------------------------------
export const education = [
  {
    names: {
      original: 'Kırgızistan-Türkiye Manas Üniversitesi',
      originalAlt: 'Кыргыз-Түрк «Манас» университети',
      en: 'Kyrgyz-Turkish Manas University',
      ru: 'Кыргызско-Турецкий университет «Манас»',
    },
    location: { en: 'Bishkek, Kyrgyz Republic', ru: 'Бишкек, Кыргызская Республика' },
    image: '/education/manas.jpg',
    imageCredit: {
      text: 'Photo: Эрнист, Wikimedia Commons, public domain',
      url: 'https://commons.wikimedia.org/wiki/File:Manas_University.jpg',
    },
    about: {
      en: 'A state university in Bishkek founded jointly by the Kyrgyz Republic and the Republic of Türkiye in 1995.',
      ru: 'Государственный университет в Бишкеке, основанный совместно Кыргызской Республикой и Турецкой Республикой в 1995 году.',
    },
    website: 'https://manas.edu.kg/en',
    level: { en: "Master's degree", ru: 'Магистратура' },
    degree: { en: 'Master of Arts in Management', ru: 'Магистр менеджмента' },
    studied: '2021 – 2024',
    graduated: '2024',
    thesis: {
      en: 'Performance Appraisal Systems for Military Officers',
      ru: 'Системы оценки служебной деятельности военных офицеров',
    },
    publication: {
      title: 'Performance Evaluation of Officers in the Kyrgyz Republic Armed Forces: A Comparison with NATO and CSTO Countries',
      journal: 'MANAS Journal of Social Studies, Vol. 13, No. 3 (2024), pp. 1048–1065',
      url: 'https://doi.org/10.33206/mjss.1414018',
    },
  },
  {
    names: {
      original: 'Führungsakademie der Bundeswehr',
      en: 'Bundeswehr Command and Staff College',
      ru: 'Командно-штабная академия Бундесвера',
    },
    location: { en: 'Hamburg, Germany', ru: 'Гамбург, Германия' },
    image: '/education/fuehrungsakademie.jpg',
    imageCredit: {
      text: 'Photo: David Wintzer, Wikimedia Commons, CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:Kasernentor_F%C3%BChrungsakademie_der_Bundeswehr_2019.jpg',
    },
    about: {
      en: 'The highest military education institution of the German Armed Forces, training senior staff officers from Germany and partner nations.',
      ru: 'Высшее военно-учебное заведение Вооружённых сил Германии, готовящее офицеров штабов из Германии и стран-партнёров.',
    },
    website: 'https://www.bundeswehr.de/en/organization/bundeswehr-command-and-staff-college',
    level: { en: 'General Staff Officer', ru: 'Офицер Генштаба' },
    degree: {
      en: 'General Staff Officer (Military and Security Policy)',
      ru: 'Офицер Генерального штаба (военная политика и политика безопасности)',
    },
    studied: '2016 – 2018',
    graduated: '2018',
    details: {
      en: 'Operational planning at brigade and division level; planning and conduct of peacekeeping operations.',
      ru: 'Оперативное планирование на уровне бригады и дивизии; планирование и проведение миротворческих операций.',
    },
  },
  {
    names: {
      original: 'Kara Harp Okulu',
      en: 'Land Forces Academy',
      ru: 'Сухопутное училище',
    },
    location: { en: 'Ankara, Türkiye', ru: 'Анкара, Турция' },
    image: '/education/kara-harp-okulu.jpg',
    imageCredit: { text: 'Photo: Kara Harp Okulu', url: 'https://kho.msu.edu.tr/' },
    about: {
      en: "Türkiye's army officer academy, founded in 1834. It trains officers for the Turkish Land Forces and is part of the National Defence University.",
      ru: 'Военная академия Сухопутных войск Турции, основанная в 1834 году. Готовит офицеров Сухопутных войск и входит в состав Национального университета обороны.',
    },
    website: 'https://kho.msu.edu.tr/',
    level: { en: "Bachelor's degree", ru: 'Бакалавриат' },
    degree: {
      en: "Bachelor's Degree in Military Command and Management",
      ru: 'Бакалавр военного командования и управления',
    },
    studied: '1997 – 2002',
    graduated: '2002',
  },
]

// ---------------------------------------------------------------------------
// Education part 2: courses & training
//
// Two groups, shown as tabs on the website:
//   type: 'course'   – professional courses (full-time, 1 month or longer)
//   type: 'training' – short trainings, seminars and online certificates
// Each item:
//   name, provider, place – text in { en, ru }
//   dates     – as you want them shown, e.g. '11.06.2018 – 29.06.2018' or '2014'
//   duration  – e.g. { en: '2 weeks', ru: '2 недели' } (or null)
//   obtained  – e.g. { en: 'Diploma', ru: 'Диплом' } (or null)
//   un        – true shows a small "UN" tag
//   note      – optional short description (or leave it out)
// The first COURSES_VISIBLE items of each group are shown; the rest appear
// after "Show all". Put the most important ones first.
// ---------------------------------------------------------------------------
export const COURSES_VISIBLE = 5

const DIPLOMA = { en: 'Diploma', ru: 'Диплом' }
const CERTIFICATE = { en: 'Certificate', ru: 'Сертификат' }
const CERTIFICATES = { en: 'Certificates', ru: 'Сертификаты' }
const ATTENDANCE = { en: 'Certificate of attendance', ru: 'Свидетельство о прохождении' }

export const training = [
  // ----- Professional courses (1 month or longer) -----
  {
    type: 'course',
    name: { en: 'Staff Officer Course', ru: 'Курс штабных офицеров' },
    provider: { en: 'French Staff School', ru: 'Штабная школа' },
    place: { en: 'Compiègne, France', ru: 'Компьень, Франция' },
    dates: '20.08.2008 – 19.12.2008',
    duration: { en: '4 months', ru: '4 месяца' },
    obtained: DIPLOMA,
  },
  {
    type: 'course',
    name: { en: 'Company Commander Course', ru: 'Курс командиров рот' },
    provider: { en: 'French Infantry School', ru: 'Пехотная школа' },
    place: { en: 'Montpellier, France', ru: 'Монпелье, Франция' },
    dates: '04.09.2006 – 19.01.2007',
    duration: { en: '4.5 months', ru: '4,5 месяца' },
    obtained: { en: 'Certificate of attendance (Attestation de stage)', ru: 'Свидетельство о прохождении (Attestation de stage)' },
  },
  {
    type: 'course',
    name: { en: 'Mountaineering, Ski and Mountain Rescue', ru: 'Альпинизм, лыжная подготовка и горное спасение' },
    provider: { en: 'French High Mountain School', ru: 'Высокогорная военная школа' },
    place: { en: 'France', ru: 'Франция' },
    dates: '2005 – 2007',
    duration: { en: '6 stages × 1 month', ru: '6 этапов по 1 месяцу' },
    obtained: { en: 'Diploma and certificate', ru: 'Диплом и сертификат' },
    note: {
      en: 'Six one-month training stages, each followed by five months of practical application in my military unit. Certified to lead military or civilian groups in high-mountain areas.',
      ru: 'Шесть этапов подготовки по одному месяцу, после каждого — пять месяцев практического применения знаний в воинской части. Сертификат на право руководства военными и гражданскими группами в высокогорных районах.',
    },
  },
  {
    type: 'course',
    name: { en: 'Basic Commando and Internal Security Course', ru: 'Базовый курс коммандос и внутренней безопасности' },
    provider: { en: 'Turkish Commando School', ru: 'Школа коммандос' },
    place: { en: 'Eğirdir, Türkiye', ru: 'Эгирдир, Турция' },
    dates: '15.09.2002 – 15.11.2002',
    duration: { en: '2 months', ru: '2 месяца' },
    obtained: CERTIFICATE,
  },
  {
    type: 'course',
    name: { en: 'Frontend Developer (HTML, CSS, JavaScript, React)', ru: 'Frontend-разработчик (HTML, CSS, JavaScript, React)' },
    provider: { en: 'Jyldyz Academy', ru: 'Jyldyz Academy' },
    place: { en: 'Online', ru: 'Онлайн' },
    dates: '2021 – 2022',
    duration: null,
    obtained: CERTIFICATE,
  },
  {
    type: 'course',
    name: { en: 'German Language Course', ru: 'Курс немецкого языка' },
    provider: { en: 'Federal Office of Languages (Bundessprachenamt)', ru: 'Федеральное ведомство по языкам (Bundessprachenamt)' },
    place: { en: 'Hürth, Germany', ru: 'Хюрт, Германия' },
    dates: '11.2016 – 17.07.2017',
    duration: { en: '8 months', ru: '8 месяцев' },
    obtained: CERTIFICATE,
  },
  {
    type: 'course',
    name: { en: 'French Language Course', ru: 'Курс французского языка' },
    provider: { en: 'Gendarmerie School', ru: 'Школа жандармерии' },
    place: { en: 'Rochefort, France', ru: 'Рошфор, Франция' },
    dates: '30.06.2008 – 18.08.2008',
    duration: { en: '7 weeks', ru: '7 недель' },
    obtained: ATTENDANCE,
  },
  {
    type: 'course',
    name: { en: 'Infantry Officer Basic Course', ru: 'Базовый курс пехотных офицеров' },
    provider: { en: 'Infantry School Command', ru: 'Командование пехотной школы' },
    place: { en: 'Tuzla, Istanbul, Türkiye', ru: 'Тузла, Стамбул, Турция' },
    dates: '18.11.2002 – 02.05.2003',
    duration: { en: '5.5 months', ru: '5,5 месяца' },
    obtained: DIPLOMA,
  },

  // ----- Short trainings & certificates -----
  {
    type: 'training',
    un: true,
    name: { en: 'UN Peacekeeping Module', ru: 'Модуль миротворческой подготовки ООН' },
    provider: { en: 'Bundeswehr Command and Staff College', ru: 'Командно-штабная академия Бундесвера' },
    place: { en: 'Hamburg, Germany', ru: 'Гамбург, Германия' },
    dates: '11.06.2018 – 29.06.2018',
    duration: { en: '3 weeks', ru: '3 недели' },
    obtained: CERTIFICATE,
    note: {
      en: 'Taught in German. Covered all topics of the UN Staff Officer Course in line with the UN Standardized Training Modules for pre-deployment training, including a four-day map exercise.',
      ru: 'Проводился на немецком языке. Охватывал все темы курса штабных офицеров ООН в соответствии со стандартизированными учебными модулями ООН для преддеплойментной подготовки, включая четырёхдневное учение на картах.',
    },
  },
  {
    type: 'training',
    un: true,
    name: { en: 'Protection of Children in Conflict Areas', ru: 'Защита детей в зонах конфликтов' },
    provider: { en: 'UNAMID', ru: 'ЮНАМИД' },
    place: { en: 'Darfur, Sudan', ru: 'Дарфур, Судан' },
    dates: '07.2014',
    duration: { en: '3 days', ru: '3 дня' },
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    un: true,
    name: { en: 'Safe and Secure Approaches in Field Environments (SSAFE)', ru: 'Безопасные подходы в полевых условиях (SSAFE)' },
    provider: { en: 'UNAMID', ru: 'ЮНАМИД' },
    place: { en: 'Darfur, Sudan', ru: 'Дарфур, Судан' },
    dates: '11.08.2014 – 12.08.2014',
    duration: { en: '2 days', ru: '2 дня' },
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    name: { en: 'Law of Armed Conflict', ru: 'Право вооружённых конфликтов' },
    provider: { en: 'Partnership for Peace Training Centre', ru: 'Учебный центр «Партнёрство ради мира»' },
    place: { en: 'Ankara, Türkiye', ru: 'Анкара, Турция' },
    dates: '01.11.2010 – 12.11.2010',
    duration: { en: '2 weeks', ru: '2 недели' },
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    name: { en: 'Inclusive Leadership: The Power of Workplace Diversity', ru: 'Инклюзивное лидерство: сила разнообразия на рабочем месте' },
    provider: { en: 'University of Colorado (Coursera)', ru: 'Университет Колорадо (Coursera)' },
    place: { en: 'Online', ru: 'Онлайн' },
    dates: '2021',
    duration: null,
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    un: true,
    name: { en: 'Basic Protection of Civilians', ru: 'Основы защиты гражданского населения' },
    provider: { en: 'UNAMID', ru: 'ЮНАМИД' },
    place: { en: 'El Fasher, Sudan', ru: 'Эль-Фашир, Судан' },
    dates: '12.06.2013 – 13.06.2013',
    duration: { en: '2 days', ru: '2 дня' },
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    un: true,
    name: { en: 'Integrated Induction Training', ru: 'Комплексная вводная подготовка' },
    provider: { en: 'UNAMID', ru: 'ЮНАМИД' },
    place: { en: 'El Fasher, Sudan', ru: 'Эль-Фашир, Судан' },
    dates: '27.01.2013 – 30.01.2013',
    duration: { en: '4 days', ru: '4 дня' },
    obtained: CERTIFICATE,
  },
  {
    type: 'training',
    name: {
      en: 'Executive Seminar on Legal Aspects of Developing a Professional Military',
      ru: 'Семинар для руководящего состава по правовым аспектам развития профессиональной армии',
    },
    provider: { en: 'US Defense Institute', ru: 'Институт обороны США' },
    place: { en: 'Bishkek, Kyrgyzstan', ru: 'Бишкек, Кыргызстан' },
    dates: '16.06.2009 – 18.06.2009',
    duration: { en: '3 days', ru: '3 дня' },
    obtained: null,
  },
  {
    type: 'training',
    un: true,
    name: { en: 'UNDP Mandatory Online Courses', ru: 'Обязательные онлайн-курсы ПРООН' },
    provider: { en: 'UNDP', ru: 'ПРООН' },
    place: { en: 'Online', ru: 'Онлайн' },
    dates: '03.2024 – 04.2024',
    duration: null,
    obtained: CERTIFICATES,
    note: { en: 'Core and mandatory courses for UNDP personnel.', ru: 'Основные и обязательные курсы для сотрудников ПРООН.' },
  },
  {
    type: 'training',
    un: true,
    name: { en: 'UNDSS Online Security Courses', ru: 'Онлайн-курсы UNDSS по безопасности' },
    provider: { en: 'UN Department of Safety and Security (UNDSS)', ru: 'Департамент ООН по вопросам охраны и безопасности (UNDSS)' },
    place: { en: 'Online', ru: 'Онлайн' },
    dates: '06.2024 – 09.2024',
    duration: null,
    obtained: CERTIFICATES,
    note: {
      en: 'Courses related to the UN Security Management System (UNSMS).',
      ru: 'Курсы по системе управления безопасностью ООН (UNSMS).',
    },
  },
]

// ---------------------------------------------------------------------------
// Languages. `level` is a percentage used for the bar width.
// ---------------------------------------------------------------------------
export const languages = [
  { name: { en: 'Kyrgyz', ru: 'Кыргызский' }, level: 100, label: { en: 'Native', ru: 'Родной' } },
  { name: { en: 'Russian', ru: 'Русский' }, level: 95, label: { en: 'Fluent (C2)', ru: 'Свободно (C2)' } },
  { name: { en: 'Turkish', ru: 'Турецкий' }, level: 95, label: { en: 'Fluent (C2)', ru: 'Свободно (C2)' } },
  { name: { en: 'English', ru: 'Английский' }, level: 80, label: { en: 'Fluent (C1)', ru: 'Свободно (C1)' } },
  { name: { en: 'French', ru: 'Французский' }, level: 50, label: { en: 'Intermediate (B1)', ru: 'Средний (B1)' } },
  { name: { en: 'German', ru: 'Немецкий' }, level: 50, label: { en: 'Intermediate (B1)', ru: 'Средний (B1)' } },
]

// ---------------------------------------------------------------------------
// Skills (grouped)
// ---------------------------------------------------------------------------
export const skills = [
  {
    group: { en: 'Planning & Project Management', ru: 'Планирование и управление проектами' },
    items: [
      { en: 'Needs assessment', ru: 'Оценка потребностей' },
      { en: 'Annual planning', ru: 'Годовое планирование' },
      { en: 'Strategic & operational planning', ru: 'Стратегическое и оперативное планирование' },
      { en: 'Implementation', ru: 'Реализация' },
      { en: 'Monitoring & evaluation', ru: 'Мониторинг и оценка' },
      { en: 'Exercise planning', ru: 'Планирование учений' },
      { en: 'Reporting', ru: 'Отчётность' },
    ],
  },
  {
    group: { en: 'Security & Defence', ru: 'Безопасность и оборона' },
    items: [
      { en: 'Operational planning', ru: 'Оперативное планирование' },
      { en: 'Security analysis', ru: 'Анализ безопасности' },
      { en: 'Arms & ammunition control', ru: 'Контроль вооружения и боеприпасов' },
      { en: 'Verification', ru: 'Верификация' },
      { en: 'Crisis response', ru: 'Реагирование на кризисы' },
      { en: 'Access control', ru: 'Контроль доступа' },
      { en: 'Emergency response & evacuation', ru: 'Реагирование на ЧС и эвакуация' },
      { en: 'VHF/HF & satellite comms', ru: 'УКВ/КВ и спутниковая связь' },
    ],
  },
  {
    group: { en: 'International Cooperation', ru: 'Международное сотрудничество' },
    items: [
      { en: 'UN system', ru: 'Система ООН' },
      { en: 'CSTO', ru: 'ОДКБ' },
      { en: 'SCO', ru: 'ШОС' },
      { en: 'Bilateral negotiations', ru: 'Двусторонние переговоры' },
      { en: 'Liaison with ministries', ru: 'Взаимодействие с министерствами' },
      { en: 'Liaison with law enforcement', ru: 'Взаимодействие с правоохранительными органами' },
      { en: 'Work with diplomats', ru: 'Работа с дипломатами' },
    ],
  },
  {
    group: { en: 'Leadership & Training', ru: 'Лидерство и обучение' },
    items: [
      { en: 'Team supervision', ru: 'Руководство командой' },
      { en: 'Training programme design', ru: 'Разработка учебных программ' },
      { en: 'Staff evaluation systems', ru: 'Системы оценки персонала' },
      { en: 'Promotion systems', ru: 'Системы продвижения' },
      { en: 'Inclusive leadership', ru: 'Инклюзивное лидерство' },
    ],
  },
  {
    group: { en: 'Analysis & Reporting', ru: 'Анализ и отчётность' },
    items: [
      { en: 'Incident analysis', ru: 'Анализ инцидентов' },
      { en: 'Media & open-source monitoring', ru: 'Мониторинг СМИ и открытых источников' },
      { en: 'Briefing notes', ru: 'Справки и брифинги' },
      { en: 'Analytical reports', ru: 'Аналитические доклады' },
      { en: 'Donor-style reports', ru: 'Отчёты для доноров' },
      { en: 'Mapping', ru: 'Картографирование' },
      { en: 'Translation (KY/RU → EN)', ru: 'Перевод (KY/RU → EN)' },
    ],
  },
  {
    group: { en: 'Digital', ru: 'Цифровые навыки' },
    items: [
      { en: 'MS Office (Word, Excel, PowerPoint, Outlook)', ru: 'MS Office (Word, Excel, PowerPoint, Outlook)' },
      { en: 'Google Workspace', ru: 'Google Workspace' },
      { en: 'Notion', ru: 'Notion' },
      { en: 'Miro', ru: 'Miro' },
      { en: 'Canva', ru: 'Canva' },
      { en: 'Databases & automated systems', ru: 'Базы данных и автоматизированные системы' },
      { en: 'HTML / CSS / JavaScript / React', ru: 'HTML / CSS / JavaScript / React' },
      { en: 'AI tools', ru: 'Инструменты ИИ' },
    ],
  },
]

// ---------------------------------------------------------------------------
// Projects. Replace `url` (empty string = "coming soon") and optionally `image`.
// ---------------------------------------------------------------------------
export const projects = [
  {
    title: { en: 'Tian Shan Wildlife', ru: 'Tian Shan Wildlife' },
    type: { en: 'YouTube channel', ru: 'YouTube-канал' },
    description: {
      en: 'A channel about the wildlife and nature of the Tian Shan mountains. (Placeholder: add a short description.)',
      ru: 'Канал о дикой природе гор Тянь-Шаня. (Заполнитель: добавьте краткое описание.)',
    },
    url: '', // TODO: e.g. 'https://www.youtube.com/@...'
    image: '', // optional, e.g. '/projects/tian-shan.jpg'
  },
  {
    title: { en: 'Security Associated', ru: 'Security Associated' },
    type: { en: 'Company website', ru: 'Сайт компании' },
    description: {
      en: 'Website for a Bishkek security company. (Placeholder: describe your role.)',
      ru: 'Сайт охранной компании в Бишкеке. (Заполнитель: опишите вашу роль.)',
    },
    url: 'https://securitykg.com',
    image: '',
  },
  {
    title: { en: 'Alchik', ru: 'Алчик' },
    type: { en: 'Game website', ru: 'Сайт игры' },
    description: {
      en: 'A website for the traditional Kyrgyz game of Alchik. (Placeholder: add a short description.)',
      ru: 'Сайт традиционной кыргызской игры «Алчик». (Заполнитель: добавьте описание.)',
    },
    url: '', // TODO
    image: '',
  },
  {
    title: { en: 'English Word Game', ru: 'Игра в английские слова' },
    type: { en: 'Learning game website', ru: 'Обучающая игра' },
    description: {
      en: 'A web game for learning English vocabulary. (Placeholder: add a short description.)',
      ru: 'Веб-игра для изучения английской лексики. (Заполнитель: добавьте описание.)',
    },
    url: '', // TODO
    image: '',
  },
]

// ---------------------------------------------------------------------------
// Contact form labels
// ---------------------------------------------------------------------------
export const contactForm = {
  name: { en: 'Your name', ru: 'Ваше имя' },
  organisation: { en: 'Organisation (optional)', ru: 'Организация (необязательно)' },
  subject: { en: 'Subject', ru: 'Тема' },
  message: { en: 'Message', ru: 'Сообщение' },
  send: { en: 'Send message', ru: 'Написать письмо' },
  note: {
    en: 'This form opens your email app with the message ready to send.',
    ru: 'Форма откроет вашу почтовую программу с готовым письмом.',
  },
  emailLabel: { en: 'Email', ru: 'Эл. почта' },
  linkedinLabel: { en: 'LinkedIn', ru: 'LinkedIn' },
  locationLabel: { en: 'Location', ru: 'Местоположение' },
}
