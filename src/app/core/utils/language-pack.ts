import { computed, effect, signal } from '@angular/core';

export const languages = [
    {
        name: 'EN',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Bear Trap',
                crazyJoe: 'Crazy Joe',
                svs: 'SvS'
            },
            footer: {
                questions: 'If you have any questions, ideas or complaints, ask',
                copyright: '© 2026 TFF Alliance • State 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Welcome to our Great Alliance!',
                discord: 'Join our Discord',
                events: {
                    bearTrap: 'Bear Trap',
                    crazyJoe: 'Crazy Joe',
                    svs: 'State vs State',
                    mercenaryBoss: 'Mercenary Boss',
                    foundry: 'Foundry',
                    canyonClash: 'Canyon Clash'
                },
                labels: {
                    legion1: 'Legion 1',
                    legion2: 'Legion 2',
                    biWeekly: 'Bi-weekly',
                    tba: 'TBA'
                }
            },
            bearTrap: {
                tag: 'Event Guide',
                title: 'Bear Trap',
                sessions: {
                    s1Title: 'Session 1',
                    s1Time: '01:00',
                    s2Title: 'Session 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mechanics',
                    p1_1: 'Each hero possesses special skills that provide buffs to the entire rally. However, ',
                    p1_bold: 'only the skill of the first hero (Captain)',
                    p1_2: ' applies to the Rally.',
                    p2: 'The other two heroes do not contribute their rally skills, so choose them based solely on troop capacity or passive stats.'
                },
                join: {
                    titlePart1: 'Captain if you ',
                    titleHighlight: 'JOIN',
                    desc: 'Best damage and lethality buffs for joining existing rallies. Order is prioritized left to right.',
                    noHeroes1: 'If you do not have any of these heroes available, send your troops ',
                    noHeroesBold: 'without any heroes',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Captain if you ',
                    titleHighlight: 'START',
                    desc: 'Use these heroes as your captain if you are initiating a rally against the Bear.'
                },
                tips: {
                    title: 'Strategy & Tips',
                    desc: 'Maximize your points and rewards efficiently.',
                    list: [
                        { title: 'Troop Ratio', desc: "The Bear doesn't kill troops. Send a damage-heavy formation: 10% Infantry, 10% Lancers, 80% Marksmen." },
                        { title: 'Rally Time', desc: 'Always set your rallies to 5 minutes to maximize the number of hits your team can make.' },
                        { title: 'Auto-Join', desc: 'Turn off Auto-Join if you can be online. Manual joining ensures you send the correct captain hero.' },
                        { title: 'Territory Buff', desc: 'Ensure your city is located on Alliance Territory to benefit from our alliance tech buffs.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Defense Event',
                title: 'Crazy Joe',
                startsAt: 'Starts At',
                tba: 'TBA',
                generalRules: {
                    title: 'General Rules',
                    rules: [
                        "Send ALL your Infantry troops FIRST to reinforce alliance members who are online.",
                        "Once you run out of Infantry, send your other troop types (Lancers & Marksmen) to reinforce.",
                        "Spread the defense: Do not send reinforcements to cities that already have more than 250k reinforced troops.",
                        "Never use a Peace Shield! Crazy Joe ignores shields.",
                        "Set your best defensive heroes on your own city's Garrison wall."
                    ]
                },
                hqDefense: {
                    title: 'HQ Defense specific rules',
                    labels: {
                        maxTroops: 'Max Troops',
                        ratio: 'Ratio',
                        captains: 'Required Captains'
                    },
                    waves: [
                        {
                            wave: 'Wave 10 (HQ Defense)',
                            description: 'After wave 9, recall your troops and send your strongest march to the HQ. Focus on high-HP Infantry to absorb and eliminate the wave.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Wave 20 (HQ Final Defense)',
                            description: 'After wave 19, recall troops again and rush to HQ. Same defensive priority — Infantry first. Your strongest member should lead the garrison.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Pro Strategies',
                    desc: 'Advanced tips to climb the leaderboard.',
                    list: [
                        { title: 'No Permanent Deaths', desc: 'Troops defeated by Crazy Joe only go to the hospital. There are no permanent losses.' },
                        { title: 'Maximize Points', desc: 'You earn points for defending your own city AND for defending allies. Reinforcing others is the secret to top ranks.' },
                        { title: 'City Burning', desc: 'If you fail a defense twice, your city will burn and Joe will ignore you for the rest of the event. If this happens, send ALL your troops to reinforce others!' },
                        { title: 'Empty City Bait', desc: 'High-level players often empty their cities entirely to maximize reinforcement points elsewhere.' }
                    ]
                }
            },
            svs: {
                tag: 'Cross-Server Event',
                title: 'State vs State',
                durationLabel: 'Duration',
                durationValue: '6 Days',
                prepRules: {
                    title: 'Prep Phase Rules',
                    rules: [
                        "Hoarding is the golden rule. Save Fire Crystals, speedups, and widgets exclusively for their specific designated days.",
                        "Timing is everything. Check the server reset time carefully. Using items even a minute early means zero points.",
                        "Always aim for the final daily milestone for personal rewards, but stop spending once you hit it to save for the next SvS.",
                        "Optional Tasks (🆗) give points, but are less efficient. Only push these if you are aiming for a Top 100 overall ranking."
                    ]
                },
                battleRules: {
                    title: 'Battle Phase Rules',
                    rules: [
                        "Maintain a 24h Peace Shield at all times unless you are actively participating in rallies for the Sunfire Castle or Turrets.",
                        "Do not gather resources in the enemy state. Enemy players will hunt gatherers for easy kill points.",
                        "Follow R5/R4 targeting calls. Do not start random solo attacks. Join coordinated rallies to secure the objectives.",
                        "Heal in batches. During heavy fighting, heal your troops in small batches (30-60 mins) to use alliance helps and save speedups."
                    ]
                },
                matrix: {
                    title: 'Upgrade Matrix',
                    desc: 'Daily points distribution for maximum efficiency.',
                    focus: 'Focus',
                    optional: 'Optional',
                    headers: {
                        category: 'Category',
                        d1: 'Day 1',
                        d2: 'Day 2',
                        d3: 'Day 3',
                        d4: 'Day 4',
                        d5: 'Day 5'
                    },
                    tasks: {
                        fc: 'Fire Crystals (FCs)',
                        construction: 'Construction',
                        research: 'Research / Dawn',
                        sigils: 'Sigils',
                        fcShards: 'FC Shards',
                        gather: 'Gather Resources',
                        wheel: 'Lucky Wheel',
                        heroShards: 'Hero Shards',
                        beasts: 'Terror / Beasts',
                        troops: 'Train Troops',
                        charms: 'Charms',
                        widgets: 'Widgets / Essence',
                        heroGears: 'Hero Gears',
                        chiefGear: 'Chief Gear',
                        pets: 'Pet Adv / Refine'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Wait... Unicorns in the Tundra?',
                desc: "You've wandered too far into the blizzard, Chief. The coordinates are wrong, there are no resources here, and hypothermia might be making you hallucinate.",
                button: 'Return to Headquarters'
            }
        }
    },
    {
        name: 'ES',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Trampa de Osos',
                crazyJoe: 'Joe el Loco',
                svs: 'SvS'
            },
            footer: {
                questions: 'Si tienes alguna pregunta, idea o queja, pregúntale a',
                copyright: '© 2026 TFF Alliance • Estado 2327 • Whiteout Survival'
            },
            landing: {
                title: '¡Bienvenido a nuestra Gran Alianza!',
                discord: 'Únete a nuestro Discord',
                events: {
                    bearTrap: 'Trampa de Osos',
                    crazyJoe: 'Joe el Loco',
                    svs: 'Estado vs Estado',
                    mercenaryBoss: 'Jefe Mercenario',
                    foundry: 'Fundición',
                    canyonClash: 'Choque de Cañones'
                },
                labels: {
                    legion1: 'Legión 1',
                    legion2: 'Legión 2',
                    biWeekly: 'Quincenal',
                    tba: 'Por anunciar'
                }
            },
            bearTrap: {
                tag: 'Guía del Evento',
                title: 'Trampa de Osos',
                sessions: {
                    s1Title: 'Sesión 1',
                    s1Time: '01:00',
                    s2Title: 'Sesión 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mecánicas',
                    p1_1: 'Cada héroe posee habilidades especiales que proporcionan mejoras a todo el rally. Sin embargo, ',
                    p1_bold: 'solo la habilidad del primer héroe (Capitán)',
                    p1_2: ' se aplica al Rally.',
                    p2: 'Los otros dos héroes no aportan sus habilidades de rally, así que elígelos basándote únicamente en su capacidad de tropas o estadísticas pasivas.'
                },
                join: {
                    titlePart1: 'Capitán si te ',
                    titleHighlight: 'UNES',
                    desc: 'Las mejores mejoras de daño y letalidad para unirse a rallies existentes. El orden se prioriza de izquierda a derecha.',
                    noHeroes1: 'Si no tienes ninguno de estos héroes disponibles, envía tus tropas ',
                    noHeroesBold: 'sin ningún héroe',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Capitán si ',
                    titleHighlight: 'INICIAS',
                    desc: 'Usa estos héroes como capitán si vas a iniciar un rally contra el Oso.'
                },
                tips: {
                    title: 'Estrategia y Consejos',
                    desc: 'Maximiza tus puntos y recompensas de manera eficiente.',
                    list: [
                        { title: 'Proporción de Tropas', desc: "El Oso no mata tropas. Envía una formación centrada en el daño: 10% Infantería, 10% Lanceros, 80% Tiradores." },
                        { title: 'Tiempo del Rally', desc: 'Configura siempre tus rallies a 5 minutos para maximizar el número de ataques que tu equipo puede realizar.' },
                        { title: 'Unión Automática', desc: 'Desactiva la Unión Automática si puedes estar conectado. Unirte manualmente asegura que envíes al héroe capitán correcto.' },
                        { title: 'Mejora de Territorio', desc: 'Asegúrate de que tu ciudad esté ubicada en el Territorio de la Alianza para beneficiarte de nuestras mejoras tecnológicas.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Evento de Defensa',
                title: 'Joe el Loco',
                startsAt: 'Comienza a las',
                tba: 'TBA',
                generalRules: {
                    title: 'Reglas Generales',
                    rules: [
                        "Envía TODAS tus tropas de Infantería PRIMERO para reforzar a los miembros de la alianza que estén conectados.",
                        "Una vez que te quedes sin Infantería, envía tus otros tipos de tropas (Lanceros y Tiradores) para reforzar.",
                        "Distribuye la defensa: No envíes refuerzos a ciudades que ya tengan más de 250k tropas de refuerzo.",
                        "¡Nunca uses un Escudo de Paz! Joe el Loco ignora los escudos.",
                        "Coloca a tus mejores héroes defensivos en la guarnición de la muralla de tu propia ciudad."
                    ]
                },
                hqDefense: {
                    title: 'Reglas específicas para la Defensa del CG',
                    labels: {
                        maxTroops: 'Tropas Máx',
                        ratio: 'Proporción',
                        captains: 'Capitanes Requeridos'
                    },
                    waves: [
                        {
                            wave: 'Oleada 10 (Defensa del CG)',
                            description: 'Después de la oleada 9, retira tus tropas y envía tu marcha más fuerte al CG (Cuartel General). Concéntrate en Infantería con altos PV para absorber y eliminar la oleada.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Oleada 20 (Defensa Final del CG)',
                            description: 'Después de la oleada 19, retira tus tropas de nuevo y corre al CG. Misma prioridad defensiva — Infantería primero. Tu miembro más fuerte debe liderar la guarnición.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Estrategias Pro',
                    desc: 'Consejos avanzados para subir en la clasificación.',
                    list: [
                        { title: 'Sin Muertes Permanentes', desc: 'Las tropas derrotadas por Joe el Loco solo van al hospital. No hay pérdidas permanentes.' },
                        { title: 'Maximizar Puntos', desc: 'Ganas puntos por defender tu propia ciudad Y por defender a tus aliados. Reforzar a otros es el secreto para alcanzar los primeros puestos.' },
                        { title: 'Ciudad en Llamas', desc: 'Si fallas en la defensa dos veces, tu ciudad arderá y Joe te ignorará por el resto del evento. Si esto sucede, ¡envía TODAS tus tropas para reforzar a otros!' },
                        { title: 'Cebo de Ciudad Vacía', desc: 'Los jugadores de alto nivel suelen vaciar sus ciudades por completo para maximizar los puntos de refuerzo en otros lugares.' }
                    ]
                }
            },
            svs: {
                tag: 'Evento Inter-Servidor',
                title: 'Estado vs Estado',
                durationLabel: 'Duración',
                durationValue: '6 Días',
                prepRules: {
                    title: 'Reglas de la Fase de Preparación',
                    rules: [
                        "Acumular es la regla de oro. Guarda Cristales de Fuego, aceleradores y artilugios exclusivamente para sus días designados.",
                        "El tiempo lo es todo. Revisa la hora de reinicio del servidor cuidadosamente. Usar objetos aunque sea un minuto antes significa cero puntos.",
                        "Apunta siempre al último hito diario para obtener las recompensas personales, pero deja de gastar una vez lo alcances para ahorrar para el próximo SvS.",
                        "Las Tareas Opcionales (🆗) dan puntos, pero son menos eficientes. Solo hazlas si apuntas al Top 100 en la clasificación general."
                    ]
                },
                battleRules: {
                    title: 'Reglas de la Fase de Batalla',
                    rules: [
                        "Mantén un Escudo de Paz de 24h en todo momento a menos que estés participando activamente en rallies por el Castillo del Fuego Solar o las Torretas.",
                        "No recolectes recursos en el estado enemigo. Los jugadores enemigos cazarán a los recolectores para obtener puntos de muerte fáciles.",
                        "Sigue las llamadas de objetivos de los R5/R4. No inicies ataques en solitario al azar. Únete a rallies coordinados para asegurar los objetivos.",
                        "Cura por lotes. Durante los combates intensos, cura a tus tropas en pequeños lotes (30-60 mins) para usar las ayudas de la alianza y ahorrar aceleradores."
                    ]
                },
                matrix: {
                    title: 'Matriz de Mejoras',
                    desc: 'Distribución diaria de puntos para máxima eficiencia.',
                    focus: 'Enfoque',
                    optional: 'Opcional',
                    headers: {
                        category: 'Categoría',
                        d1: 'Día 1',
                        d2: 'Día 2',
                        d3: 'Día 3',
                        d4: 'Día 4',
                        d5: 'Día 5'
                    },
                    tasks: {
                        fc: 'Cristales de Fuego (FC)',
                        construction: 'Construcción',
                        research: 'Investigación / Alba',
                        sigils: 'Sellos',
                        fcShards: 'Fragmentos de FC',
                        gather: 'Recolectar Recursos',
                        wheel: 'Ruleta de la Suerte',
                        heroShards: 'Fragmentos de Héroe',
                        beasts: 'Terror / Bestias',
                        troops: 'Entrenar Tropas',
                        charms: 'Amuletos',
                        widgets: 'Artilugios / Esencia',
                        heroGears: 'Equipamiento de Héroe',
                        chiefGear: 'Equipamiento de Jefe',
                        pets: 'Mascotas (Avanzar/Refinar)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Espera... ¿Unicornios en la Tundra?',
                desc: "Has vagado demasiado lejos en la tormenta de nieve, Jefe. Las coordenadas están equivocadas, no hay recursos aquí, y la hipotermia podría estar haciéndote alucinar.",
                button: 'Volver al Cuartel General'
            }
        }
    },
    {
        name: 'RU',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Медвежья Ловушка',
                crazyJoe: 'Безумный Джо',
                svs: 'SvS'
            },
            footer: {
                questions: 'Если у вас есть вопросы, идеи или жалобы, спросите',
                copyright: '© 2026 TFF Alliance • Штат 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Добро пожаловать в наш Великий Альянс!',
                discord: 'Присоединиться к Discord',
                events: {
                    bearTrap: 'Медвежья Ловушка',
                    crazyJoe: 'Безумный Джо',
                    svs: 'Штат против Штата',
                    mercenaryBoss: 'Босс Наёмников',
                    foundry: 'Кузница',
                    canyonClash: 'Столкновение в Каньоне'
                },
                labels: {
                    legion1: 'Легион 1',
                    legion2: 'Легион 2',
                    biWeekly: 'Раз в две недели',
                    tba: 'Будет объявлено'
                }
            },
            bearTrap: {
                tag: 'Гид по Событию',
                title: 'Медвежья Ловушка',
                sessions: {
                    s1Title: 'Сессия 1',
                    s1Time: '01:00',
                    s2Title: 'Сессия 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Механики',
                    p1_1: 'Каждый герой обладает особыми навыками, дающими бонусы всему рейду. Однако ',
                    p1_bold: 'только навык первого героя (Капитана)',
                    p1_2: ' применяется к Рейду.',
                    p2: 'Другие два героя не вносят свои рейдовые навыки, поэтому выбирайте их только исходя из вместимости войск или пассивных характеристик.'
                },
                join: {
                    titlePart1: 'Капитан при ',
                    titleHighlight: 'ВСТУПЛЕНИИ',
                    desc: 'Лучшие бонусы урона и летальности для вступления в существующие рейды. Порядок приоритета — слева направо.',
                    noHeroes1: 'Если у вас нет ни одного из этих героев, отправьте войска ',
                    noHeroesBold: 'без каких-либо героев',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Капитан при ',
                    titleHighlight: 'НАЧАЛЕ РЕЙДА',
                    desc: 'Используйте этих героев в качестве капитана, если вы начинаете рейд против Медведя.'
                },
                tips: {
                    title: 'Стратегия и Советы',
                    desc: 'Максимизируйте очки и награды с максимальной эффективностью.',
                    list: [
                        { title: 'Соотношение Войск', desc: 'Медведь не убивает войска. Отправьте формацию с упором на урон: 10% Пехота, 10% Копейщики, 80% Стрелки.' },
                        { title: 'Время Рейда', desc: 'Всегда устанавливайте рейды на 5 минут, чтобы максимизировать количество атак вашей команды.' },
                        { title: 'Автоприсоединение', desc: 'Отключите автоприсоединение, если вы онлайн. Ручное присоединение гарантирует отправку правильного капитана.' },
                        { title: 'Бонус Территории', desc: 'Убедитесь, что ваш город находится на Территории Альянса, чтобы пользоваться нашими технологическими бонусами.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Событие Обороны',
                title: 'Безумный Джо',
                startsAt: 'Начало',
                tba: 'Будет объявлено',
                generalRules: {
                    title: 'Общие Правила',
                    rules: [
                        "Сначала отправьте ВСЮ Пехоту для подкрепления онлайн-участников альянса.",
                        "Когда Пехота закончится, отправляйте другие типы войск (Копейщиков и Стрелков) для подкрепления.",
                        "Распределяйте оборону: не отправляйте подкрепление в города, где уже более 250к подкреплённых войск.",
                        "Никогда не используйте Щит Мира! Безумный Джо игнорирует щиты.",
                        "Поставьте лучших оборонных героев на Гарнизон стены вашего города."
                    ]
                },
                hqDefense: {
                    title: 'Особые правила Обороны Штаба',
                    labels: {
                        maxTroops: 'Макс. Войск',
                        ratio: 'Соотношение',
                        captains: 'Требуемые Капитаны'
                    },
                    waves: [
                        {
                            wave: 'Волна 10 (Оборона Штаба)',
                            description: 'После волны 9 отзовите войска и отправьте свой сильнейший марш в Штаб. Сделайте упор на Пехоту с высоким HP для поглощения и устранения волны.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Пех <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Коп',
                        },
                        {
                            wave: 'Волна 20 (Финальная Оборона Штаба)',
                            description: 'После волны 19 снова отзовите войска и спешите в Штаб. Тот же оборонный приоритет — сначала Пехота. Сильнейший участник должен возглавить Гарнизон.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Пех <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Коп',
                        }
                    ]
                },
                tips: {
                    title: 'Профессиональные Стратегии',
                    desc: 'Продвинутые советы для подъёма в рейтинге.',
                    list: [
                        { title: 'Нет Постоянных Смертей', desc: 'Войска, побеждённые Безумным Джо, попадают только в госпиталь. Постоянных потерь нет.' },
                        { title: 'Максимизация Очков', desc: 'Вы получаете очки за защиту своего города И за защиту союзников. Подкрепление других — секрет попадания в топ.' },
                        { title: 'Горящий Город', desc: 'Если вы дважды проигрываете оборону, ваш город сгорит, и Джо будет игнорировать вас до конца события. В этом случае отправьте ВСЕ войска на подкрепление других!' },
                        { title: 'Приманка Пустого Города', desc: 'Игроки высокого уровня часто полностью опустошают свои города, чтобы максимизировать очки за подкрепление в других местах.' }
                    ]
                }
            },
            svs: {
                tag: 'Межсерверное Событие',
                title: 'Штат против Штата',
                durationLabel: 'Длительность',
                durationValue: '6 Дней',
                prepRules: {
                    title: 'Правила Фазы Подготовки',
                    rules: [
                        "Накопление — золотое правило. Сохраняйте Огненные Кристаллы, ускорители и виджеты исключительно для их назначенных дней.",
                        "Время решает всё. Тщательно проверяйте время сброса сервера. Использование предметов даже на минуту раньше означает ноль очков.",
                        "Всегда стремитесь к финальной ежедневной вехе для личных наград, но прекращайте трату, как только достигнете её, чтобы сберечь ресурсы для следующего SvS.",
                        "Необязательные Задания (🆗) дают очки, но менее эффективны. Берите их только если стремитесь в Топ-100 общего рейтинга."
                    ]
                },
                battleRules: {
                    title: 'Правила Боевой Фазы',
                    rules: [
                        "Всегда поддерживайте Щит Мира на 24 ч., если не участвуете активно в рейдах на Замок Солнечного Огня или Турели.",
                        "Не собирайте ресурсы во вражеском штате. Вражеские игроки будут охотиться на собирателей ради лёгких очков за убийства.",
                        "Следуйте целям, которые указывают R5/R4. Не начинайте случайных одиночных атак. Присоединяйтесь к скоординированным рейдам для захвата целей.",
                        "Лечите партиями. В разгар боёв лечите войска небольшими партиями (30-60 мин.), чтобы использовать помощь альянса и экономить ускорители."
                    ]
                },
                matrix: {
                    title: 'Матрица Улучшений',
                    desc: 'Ежедневное распределение очков для максимальной эффективности.',
                    focus: 'Приоритет',
                    optional: 'Опционально',
                    headers: {
                        category: 'Категория',
                        d1: 'День 1',
                        d2: 'День 2',
                        d3: 'День 3',
                        d4: 'День 4',
                        d5: 'День 5'
                    },
                    tasks: {
                        fc: 'Огненные Кристаллы (ОК)',
                        construction: 'Строительство',
                        research: 'Исследование / Рассвет',
                        sigils: 'Сигилы',
                        fcShards: 'Осколки ОК',
                        gather: 'Сбор Ресурсов',
                        wheel: 'Колесо Удачи',
                        heroShards: 'Осколки Героя',
                        beasts: 'Ужас / Звери',
                        troops: 'Тренировка Войск',
                        charms: 'Чары',
                        widgets: 'Виджеты / Эссенция',
                        heroGears: 'Снаряжение Героя',
                        chiefGear: 'Снаряжение Вождя',
                        pets: 'Питомцы (Прокачка/Улучшение)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Подождите... Единороги в Тундре?',
                desc: "Вы зашли слишком далеко в метель, Вождь. Координаты неверны, ресурсов здесь нет, и, возможно, гипотермия заставляет вас галлюцинировать.",
                button: 'Вернуться в Штаб'
            }
        }
    },
    {
        name: 'DE',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Bärenfalle',
                crazyJoe: 'Verrückter Joe',
                svs: 'SvS'
            },
            footer: {
                questions: 'Wenn du Fragen, Ideen oder Beschwerden hast, frage',
                copyright: '© 2026 TFF Alliance • Staat 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Willkommen in unserer großen Allianz!',
                discord: 'Tritt unserem Discord bei',
                events: {
                    bearTrap: 'Bärenfalle',
                    crazyJoe: 'Verrückter Joe',
                    svs: 'Staat gegen Staat',
                    mercenaryBoss: 'Söldnerboss',
                    foundry: 'Schmiede',
                    canyonClash: 'Canyonkampf'
                },
                labels: {
                    legion1: 'Legion 1',
                    legion2: 'Legion 2',
                    biWeekly: 'Zweiwöchentlich',
                    tba: 'Wird angekündigt'
                }
            },
            bearTrap: {
                tag: 'Event-Leitfaden',
                title: 'Bärenfalle',
                sessions: {
                    s1Title: 'Sitzung 1',
                    s1Time: '01:00',
                    s2Title: 'Sitzung 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mechaniken',
                    p1_1: 'Jeder Held besitzt besondere Fähigkeiten, die dem gesamten Angriff Boni verleihen. Jedoch ',
                    p1_bold: 'gilt nur die Fähigkeit des ersten Helden (Hauptmann)',
                    p1_2: ' für den Angriff.',
                    p2: 'Die anderen beiden Helden tragen ihre Angriffsfähigkeiten nicht bei, also wähle sie nur nach Truppenkapazität oder passiven Werten aus.'
                },
                join: {
                    titlePart1: 'Hauptmann beim ',
                    titleHighlight: 'BEITRETEN',
                    desc: 'Beste Schadens- und Letalitätsboni für das Beitreten bestehender Angriffe. Reihenfolge wird von links nach rechts priorisiert.',
                    noHeroes1: 'Wenn keiner dieser Helden verfügbar ist, sende deine Truppen ',
                    noHeroesBold: 'ohne Helden',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Hauptmann beim ',
                    titleHighlight: 'STARTEN',
                    desc: 'Verwende diese Helden als Hauptmann, wenn du einen Angriff gegen den Bären initiierst.'
                },
                tips: {
                    title: 'Strategie & Tipps',
                    desc: 'Maximiere deine Punkte und Belohnungen effizient.',
                    list: [
                        { title: 'Truppenverhältnis', desc: 'Der Bär tötet keine Truppen. Sende eine schadensintensive Formation: 10% Infanterie, 10% Lanzenträger, 80% Schützen.' },
                        { title: 'Angriffszeit', desc: 'Stelle deine Angriffe immer auf 5 Minuten, um die Anzahl der Angriffe deines Teams zu maximieren.' },
                        { title: 'Auto-Beitreten', desc: 'Deaktiviere Auto-Beitreten, wenn du online sein kannst. Manuelles Beitreten stellt sicher, dass du den richtigen Hauptmannshelden sendest.' },
                        { title: 'Gebietsbonus', desc: 'Stelle sicher, dass deine Stadt auf Allianzgebiet liegt, um von unseren Allianz-Technologieboni zu profitieren.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Verteidigungs-Event',
                title: 'Verrückter Joe',
                startsAt: 'Beginnt um',
                tba: 'Wird angekündigt',
                generalRules: {
                    title: 'Allgemeine Regeln',
                    rules: [
                        "Sende ZUERST ALLE deine Infanterietruppen, um online befindliche Allianzangehörige zu verstärken.",
                        "Wenn die Infanterie erschöpft ist, sende andere Truppentypen (Lanzenträger & Schützen) zur Verstärkung.",
                        "Verteile die Verteidigung: Sende keine Verstärkungen in Städte, die bereits mehr als 250k verstärkte Truppen haben.",
                        "Benutze niemals einen Friedensschild! Verrückter Joe ignoriert Schilde.",
                        "Stelle deine besten Verteidigungshelden an der Garnisionsmauer deiner eigenen Stadt auf."
                    ]
                },
                hqDefense: {
                    title: 'Spezifische Regeln für die Hauptquartierverteidigung',
                    labels: {
                        maxTroops: 'Max. Truppen',
                        ratio: 'Verhältnis',
                        captains: 'Erforderliche Hauptleute'
                    },
                    waves: [
                        {
                            wave: 'Welle 10 (HQ-Verteidigung)',
                            description: 'Nach Welle 9 rufe deine Truppen zurück und sende deinen stärksten Marsch ins HQ. Konzentriere dich auf Infanterie mit hohem HP, um die Welle aufzunehmen und zu eliminieren.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Welle 20 (HQ-Finalverteidigung)',
                            description: 'Nach Welle 19 rufe erneut Truppen zurück und eile ins HQ. Gleiche Verteidigungspriorität — zuerst Infanterie. Dein stärkstes Mitglied sollte die Garnison anführen.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Profi-Strategien',
                    desc: 'Fortgeschrittene Tipps zum Aufstieg in der Rangliste.',
                    list: [
                        { title: 'Keine Dauerverluste', desc: 'Von Verrücktem Joe besiegte Truppen kommen nur ins Krankenhaus. Es gibt keine permanenten Verluste.' },
                        { title: 'Punkte maximieren', desc: 'Du erhältst Punkte für die Verteidigung deiner eigenen Stadt UND für die Verteidigung von Verbündeten. Das Verstärken anderer ist das Geheimnis der Spitzenplätze.' },
                        { title: 'Stadt brennt', desc: 'Wenn du zweimal eine Verteidigung verlierst, brennt deine Stadt und Joe ignoriert dich für den Rest des Events. Sende dann ALLE Truppen zur Verstärkung anderer!' },
                        { title: 'Leere-Stadt-Köder', desc: 'Hochrangige Spieler leeren oft ihre Städte komplett, um Verstärkungspunkte anderswo zu maximieren.' }
                    ]
                }
            },
            svs: {
                tag: 'Serverübergreifendes Event',
                title: 'Staat gegen Staat',
                durationLabel: 'Dauer',
                durationValue: '6 Tage',
                prepRules: {
                    title: 'Regeln der Vorbereitungsphase',
                    rules: [
                        "Horten ist die goldene Regel. Spare Feuerkristalle, Beschleuniger und Widgets ausschließlich für ihre jeweiligen Tage.",
                        "Timing ist alles. Überprüfe die Server-Reset-Zeit sorgfältig. Items auch nur eine Minute zu früh einzusetzen bedeutet null Punkte.",
                        "Strebe immer nach dem letzten täglichen Meilenstein für persönliche Belohnungen, aber höre auf zu investieren, sobald du ihn erreicht hast, um für das nächste SvS zu sparen.",
                        "Optionale Aufgaben (🆗) geben Punkte, sind aber weniger effizient. Gehe sie nur an, wenn du ein Top-100-Ranking anstrebst."
                    ]
                },
                battleRules: {
                    title: 'Regeln der Kampfphase',
                    rules: [
                        "Halte jederzeit einen 24-Stunden-Friedensschild aufrecht, es sei denn, du nimmst aktiv an Angriffen auf das Sonnenfestung oder Türme teil.",
                        "Sammle keine Ressourcen im feindlichen Staat. Feindliche Spieler werden Sammler für einfache Killpunkte jagen.",
                        "Folge den Zielangaben von R5/R4. Starte keine zufälligen Einzelangriffe. Schließe dich koordinierten Angriffen zur Sicherung der Ziele an.",
                        "Heile in Chargen. Heile deine Truppen während schwerer Kämpfe in kleinen Chargen (30-60 Min.), um Allianz-Hilfen zu nutzen und Beschleuniger zu sparen."
                    ]
                },
                matrix: {
                    title: 'Upgrade-Matrix',
                    desc: 'Tägliche Punkteverteilung für maximale Effizienz.',
                    focus: 'Fokus',
                    optional: 'Optional',
                    headers: {
                        category: 'Kategorie',
                        d1: 'Tag 1',
                        d2: 'Tag 2',
                        d3: 'Tag 3',
                        d4: 'Tag 4',
                        d5: 'Tag 5'
                    },
                    tasks: {
                        fc: 'Feuerkristalle (FK)',
                        construction: 'Konstruktion',
                        research: 'Forschung / Morgenröte',
                        sigils: 'Siegel',
                        fcShards: 'FK-Splitter',
                        gather: 'Ressourcen sammeln',
                        wheel: 'Glücksrad',
                        heroShards: 'Heldensplitter',
                        beasts: 'Terror / Bestien',
                        troops: 'Truppen ausbilden',
                        charms: 'Amulette',
                        widgets: 'Widgets / Essenz',
                        heroGears: 'Heldenausrüstung',
                        chiefGear: 'Häuptlingsausrüstung',
                        pets: 'Haustiere (Aufstieg/Verfeinerung)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Warte... Einhörner in der Tundra?',
                desc: "Du bist zu weit in den Blizzard gewandert, Anführer. Die Koordinaten stimmen nicht, es gibt hier keine Ressourcen, und Unterkühlung könnte dich halluzinieren lassen.",
                button: 'Zum Hauptquartier zurückkehren'
            }
        }
    },
    {
        name: 'ID',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Jebakan Beruang',
                crazyJoe: 'Joe Gila',
                svs: 'SvS'
            },
            footer: {
                questions: 'Jika kamu memiliki pertanyaan, ide, atau keluhan, tanyakan kepada',
                copyright: '© 2026 TFF Alliance • Negara 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Selamat Datang di Aliansi Agung kami!',
                discord: 'Bergabung dengan Discord kami',
                events: {
                    bearTrap: 'Jebakan Beruang',
                    crazyJoe: 'Joe Gila',
                    svs: 'Negara vs Negara',
                    mercenaryBoss: 'Bos Tentara Bayaran',
                    foundry: 'Peleburan',
                    canyonClash: 'Pertempuran Jurang'
                },
                labels: {
                    legion1: 'Legiun 1',
                    legion2: 'Legiun 2',
                    biWeekly: 'Dua Mingguan',
                    tba: 'Akan Diumumkan'
                }
            },
            bearTrap: {
                tag: 'Panduan Event',
                title: 'Jebakan Beruang',
                sessions: {
                    s1Title: 'Sesi 1',
                    s1Time: '01:00',
                    s2Title: 'Sesi 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mekanisme',
                    p1_1: 'Setiap pahlawan memiliki keahlian khusus yang memberikan buff ke seluruh serbu. Namun, ',
                    p1_bold: 'hanya keahlian pahlawan pertama (Kapten)',
                    p1_2: ' yang berlaku untuk Serbu.',
                    p2: 'Dua pahlawan lainnya tidak berkontribusi keahlian serbu mereka, jadi pilihlah mereka hanya berdasarkan kapasitas pasukan atau statistik pasif.'
                },
                join: {
                    titlePart1: 'Kapten saat ',
                    titleHighlight: 'BERGABUNG',
                    desc: 'Buff kerusakan dan mematikan terbaik untuk bergabung dengan serbu yang ada. Urutan diprioritaskan dari kiri ke kanan.',
                    noHeroes1: 'Jika tidak ada pahlawan yang tersedia, kirimkan pasukan ',
                    noHeroesBold: 'tanpa pahlawan apapun',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Kapten saat ',
                    titleHighlight: 'MEMULAI',
                    desc: 'Gunakan pahlawan ini sebagai kapten jika kamu memulai serbu melawan Beruang.'
                },
                tips: {
                    title: 'Strategi & Tips',
                    desc: 'Maksimalkan poin dan hadiah secara efisien.',
                    list: [
                        { title: 'Rasio Pasukan', desc: 'Beruang tidak membunuh pasukan. Kirim formasi berbasis kerusakan: 10% Infanteri, 10% Tombak, 80% Pemanah.' },
                        { title: 'Waktu Serbu', desc: 'Selalu atur serbu ke 5 menit untuk memaksimalkan jumlah serangan yang bisa dilakukan tim.' },
                        { title: 'Auto-Gabung', desc: 'Matikan Auto-Gabung jika kamu bisa online. Bergabung manual memastikan kamu mengirim kapten yang benar.' },
                        { title: 'Bonus Wilayah', desc: 'Pastikan kotamu berada di Wilayah Aliansi untuk mendapatkan bonus teknologi aliansi kami.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Event Pertahanan',
                title: 'Joe Gila',
                startsAt: 'Dimulai Pada',
                tba: 'Akan Diumumkan',
                generalRules: {
                    title: 'Aturan Umum',
                    rules: [
                        "Kirim SEMUA pasukan Infanteri TERLEBIH DAHULU untuk memperkuat anggota aliansi yang online.",
                        "Setelah Infanteri habis, kirim jenis pasukan lain (Tombak & Pemanah) untuk memperkuat.",
                        "Sebarkan pertahanan: Jangan kirim bala bantuan ke kota yang sudah memiliki lebih dari 250k pasukan bala bantuan.",
                        "Jangan pernah gunakan Perisai Damai! Joe Gila mengabaikan perisai.",
                        "Tempatkan pahlawan pertahanan terbaikmu di dinding Garnisun kotamu sendiri."
                    ]
                },
                hqDefense: {
                    title: 'Aturan khusus Pertahanan Markas',
                    labels: {
                        maxTroops: 'Maks. Pasukan',
                        ratio: 'Rasio',
                        captains: 'Kapten yang Dibutuhkan'
                    },
                    waves: [
                        {
                            wave: 'Gelombang 10 (Pertahanan Markas)',
                            description: 'Setelah gelombang 9, tarik kembali pasukan dan kirim pawai terkuatmu ke Markas. Fokus pada Infanteri ber-HP tinggi untuk menyerap dan mengeliminasi gelombang.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Tom',
                        },
                        {
                            wave: 'Gelombang 20 (Pertahanan Akhir Markas)',
                            description: 'Setelah gelombang 19, tarik kembali pasukan dan segera ke Markas. Prioritas pertahanan sama — Infanteri dulu. Anggota terkuat harus memimpin garnisun.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Tom',
                        }
                    ]
                },
                tips: {
                    title: 'Strategi Pro',
                    desc: 'Tips lanjutan untuk naik peringkat.',
                    list: [
                        { title: 'Tidak Ada Kematian Permanen', desc: 'Pasukan yang dikalahkan Joe Gila hanya masuk rumah sakit. Tidak ada kerugian permanen.' },
                        { title: 'Maksimalkan Poin', desc: 'Kamu mendapatkan poin untuk mempertahankan kotamu SENDIRI DAN untuk mempertahankan sekutu. Memperkuat orang lain adalah rahasia peringkat teratas.' },
                        { title: 'Kota Terbakar', desc: 'Jika kamu gagal bertahan dua kali, kotamu akan terbakar dan Joe akan mengabaikanmu sisa event. Jika ini terjadi, kirim SEMUA pasukan untuk memperkuat orang lain!' },
                        { title: 'Umpan Kota Kosong', desc: 'Pemain tingkat tinggi sering mengosongkan kota mereka sepenuhnya untuk memaksimalkan poin bala bantuan di tempat lain.' }
                    ]
                }
            },
            svs: {
                tag: 'Event Antar-Server',
                title: 'Negara vs Negara',
                durationLabel: 'Durasi',
                durationValue: '6 Hari',
                prepRules: {
                    title: 'Aturan Fase Persiapan',
                    rules: [
                        "Menimbun adalah aturan emas. Simpan Kristal Api, speedup, dan widget khusus untuk hari yang telah ditentukan.",
                        "Waktu adalah segalanya. Periksa waktu reset server dengan cermat. Menggunakan item bahkan satu menit lebih awal berarti nol poin.",
                        "Selalu bidik tonggak harian terakhir untuk hadiah pribadi, tapi berhenti menghabiskan setelah mencapainya untuk ditabung untuk SvS berikutnya.",
                        "Tugas Opsional (🆗) memberikan poin, tapi kurang efisien. Lakukan hanya jika kamu membidik peringkat Top 100 keseluruhan."
                    ]
                },
                battleRules: {
                    title: 'Aturan Fase Pertempuran',
                    rules: [
                        "Pertahankan Perisai Damai 24 jam setiap saat kecuali kamu aktif berpartisipasi dalam serbu untuk Kastil Matahari atau Menara.",
                        "Jangan kumpulkan sumber daya di negara musuh. Pemain musuh akan memburu pengumpul untuk poin pembunuhan mudah.",
                        "Ikuti arahan target R5/R4. Jangan memulai serangan solo acak. Bergabunglah dalam serbu terkoordinasi untuk mengamankan tujuan.",
                        "Sembuhkan secara bertahap. Selama pertempuran sengit, sembuhkan pasukanmu dalam kelompok kecil (30-60 mnt) untuk menggunakan bantuan aliansi dan menghemat speedup."
                    ]
                },
                matrix: {
                    title: 'Matriks Peningkatan',
                    desc: 'Distribusi poin harian untuk efisiensi maksimum.',
                    focus: 'Fokus',
                    optional: 'Opsional',
                    headers: {
                        category: 'Kategori',
                        d1: 'Hari 1',
                        d2: 'Hari 2',
                        d3: 'Hari 3',
                        d4: 'Hari 4',
                        d5: 'Hari 5'
                    },
                    tasks: {
                        fc: 'Kristal Api (KA)',
                        construction: 'Konstruksi',
                        research: 'Riset / Fajar',
                        sigils: 'Sigil',
                        fcShards: 'Pecahan KA',
                        gather: 'Kumpulkan Sumber Daya',
                        wheel: 'Roda Keberuntungan',
                        heroShards: 'Pecahan Pahlawan',
                        beasts: 'Teror / Binatang',
                        troops: 'Latih Pasukan',
                        charms: 'Jimat',
                        widgets: 'Widget / Esensi',
                        heroGears: 'Perlengkapan Pahlawan',
                        chiefGear: 'Perlengkapan Kepala',
                        pets: 'Hewan Peliharaan (Kemajuan/Penyempurnaan)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Tunggu... Unicorn di Tundra?',
                desc: "Kamu telah mengembara terlalu jauh ke dalam badai salju, Kepala. Koordinatnya salah, tidak ada sumber daya di sini, dan hipotermia mungkin membuatmu berhalusinasi.",
                button: 'Kembali ke Markas'
            }
        }
    },
    {
        name: 'FR',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Piège à Ours',
                crazyJoe: 'Joe le Fou',
                svs: 'SvS'
            },
            footer: {
                questions: 'Si vous avez des questions, des idées ou des plaintes, demandez à',
                copyright: '© 2026 TFF Alliance • État 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Bienvenue dans notre Grande Alliance !',
                discord: 'Rejoindre notre Discord',
                events: {
                    bearTrap: 'Piège à Ours',
                    crazyJoe: 'Joe le Fou',
                    svs: 'État contre État',
                    mercenaryBoss: 'Boss Mercenaire',
                    foundry: 'Fonderie',
                    canyonClash: 'Clash du Canyon'
                },
                labels: {
                    legion1: 'Légion 1',
                    legion2: 'Légion 2',
                    biWeekly: 'Bihebdomadaire',
                    tba: 'À annoncer'
                }
            },
            bearTrap: {
                tag: 'Guide de l\'Événement',
                title: 'Piège à Ours',
                sessions: {
                    s1Title: 'Session 1',
                    s1Time: '01:00',
                    s2Title: 'Session 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mécaniques',
                    p1_1: 'Chaque héros possède des compétences spéciales qui confèrent des bonus à toute la charge. Cependant, ',
                    p1_bold: 'seule la compétence du premier héros (Capitaine)',
                    p1_2: ' s\'applique à la Charge.',
                    p2: 'Les deux autres héros ne contribuent pas à leurs compétences de charge, choisissez-les donc uniquement en fonction de la capacité de troupes ou des statistiques passives.'
                },
                join: {
                    titlePart1: 'Capitaine si vous ',
                    titleHighlight: 'REJOIGNEZ',
                    desc: 'Meilleurs bonus de dégâts et de létalité pour rejoindre des charges existantes. L\'ordre est priorisé de gauche à droite.',
                    noHeroes1: 'Si aucun de ces héros n\'est disponible, envoyez vos troupes ',
                    noHeroesBold: 'sans aucun héros',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Capitaine si vous ',
                    titleHighlight: 'DÉMARREZ',
                    desc: 'Utilisez ces héros comme capitaine si vous initiez une charge contre l\'Ours.'
                },
                tips: {
                    title: 'Stratégie & Conseils',
                    desc: 'Maximisez vos points et récompenses efficacement.',
                    list: [
                        { title: 'Ratio de Troupes', desc: 'L\'Ours ne tue pas les troupes. Envoyez une formation axée sur les dégâts : 10% Infanterie, 10% Lanciers, 80% Tireurs.' },
                        { title: 'Durée de la Charge', desc: 'Réglez toujours vos charges à 5 minutes pour maximiser le nombre de frappes que votre équipe peut effectuer.' },
                        { title: 'Auto-Rejoindre', desc: 'Désactivez Auto-Rejoindre si vous pouvez être en ligne. Rejoindre manuellement garantit l\'envoi du bon héros capitaine.' },
                        { title: 'Bonus de Territoire', desc: 'Assurez-vous que votre ville est située sur le Territoire de l\'Alliance pour bénéficier de nos bonus technologiques d\'alliance.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Événement de Défense',
                title: 'Joe le Fou',
                startsAt: 'Commence à',
                tba: 'À annoncer',
                generalRules: {
                    title: 'Règles Générales',
                    rules: [
                        "Envoyez EN PREMIER TOUTES vos troupes d'Infanterie pour renforcer les membres de l'alliance en ligne.",
                        "Une fois l'Infanterie épuisée, envoyez vos autres types de troupes (Lanciers & Tireurs) pour renforcer.",
                        "Répartissez la défense : n'envoyez pas de renforts dans les villes qui ont déjà plus de 250k troupes renforcées.",
                        "N'utilisez jamais un Bouclier de Paix ! Joe le Fou ignore les boucliers.",
                        "Placez vos meilleurs héros défensifs sur le mur de Garnison de votre propre ville."
                    ]
                },
                hqDefense: {
                    title: 'Règles spécifiques à la Défense du QG',
                    labels: {
                        maxTroops: 'Troupes Max',
                        ratio: 'Ratio',
                        captains: 'Capitaines Requis'
                    },
                    waves: [
                        {
                            wave: 'Vague 10 (Défense QG)',
                            description: 'Après la vague 9, rappelez vos troupes et envoyez votre marche la plus forte au QG. Concentrez-vous sur l\'Infanterie à HP élevé pour absorber et éliminer la vague.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Vague 20 (Défense Finale QG)',
                            description: 'Après la vague 19, rappelez à nouveau les troupes et foncez au QG. Même priorité défensive — Infanterie en premier. Votre membre le plus fort doit diriger la garnison.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Stratégies Pro',
                    desc: 'Conseils avancés pour grimper dans le classement.',
                    list: [
                        { title: 'Pas de Morts Permanentes', desc: 'Les troupes vaincues par Joe le Fou vont seulement à l\'hôpital. Il n\'y a pas de pertes permanentes.' },
                        { title: 'Maximiser les Points', desc: 'Vous gagnez des points pour défendre votre propre ville ET pour défendre vos alliés. Renforcer les autres est le secret des meilleures places.' },
                        { title: 'Ville en Feu', desc: 'Si vous échouez deux fois à une défense, votre ville brûlera et Joe vous ignorera pour le reste de l\'événement. Dans ce cas, envoyez TOUTES vos troupes renforcer les autres !' },
                        { title: 'Leurre de Ville Vide', desc: 'Les joueurs de haut niveau vident souvent entièrement leur ville pour maximiser les points de renforcement ailleurs.' }
                    ]
                }
            },
            svs: {
                tag: 'Événement Inter-Serveur',
                title: 'État contre État',
                durationLabel: 'Durée',
                durationValue: '6 Jours',
                prepRules: {
                    title: 'Règles de la Phase de Préparation',
                    rules: [
                        "Thésauriser est la règle d'or. Conservez les Cristaux de Feu, les accélérations et les widgets exclusivement pour leurs jours désignés.",
                        "Le timing est crucial. Vérifiez attentivement l'heure de réinitialisation du serveur. Utiliser des objets ne serait-ce qu'une minute trop tôt signifie zéro point.",
                        "Visez toujours le dernier jalon quotidien pour les récompenses personnelles, mais arrêtez de dépenser une fois atteint pour économiser pour le prochain SvS.",
                        "Les Tâches Optionnelles (🆗) rapportent des points, mais sont moins efficaces. Ne les faites que si vous visez un classement Top 100 général."
                    ]
                },
                battleRules: {
                    title: 'Règles de la Phase de Bataille',
                    rules: [
                        "Maintenez un Bouclier de Paix de 24h en permanence sauf si vous participez activement aux charges pour le Château du Soleil ou les Tourelles.",
                        "Ne récoltez pas de ressources dans l'état ennemi. Les joueurs ennemis chasseront les récolteurs pour des points de meurtre faciles.",
                        "Suivez les appels de ciblage des R5/R4. Ne lancez pas d'attaques solo aléatoires. Rejoignez des charges coordonnées pour sécuriser les objectifs.",
                        "Soignez par lots. Pendant les combats intenses, soignez vos troupes en petits lots (30-60 min) pour utiliser les aides de l'alliance et économiser les accélérations."
                    ]
                },
                matrix: {
                    title: 'Matrice d\'Améliorations',
                    desc: 'Distribution quotidienne des points pour une efficacité maximale.',
                    focus: 'Priorité',
                    optional: 'Optionnel',
                    headers: {
                        category: 'Catégorie',
                        d1: 'Jour 1',
                        d2: 'Jour 2',
                        d3: 'Jour 3',
                        d4: 'Jour 4',
                        d5: 'Jour 5'
                    },
                    tasks: {
                        fc: 'Cristaux de Feu (CF)',
                        construction: 'Construction',
                        research: 'Recherche / Aube',
                        sigils: 'Sceaux',
                        fcShards: 'Éclats de CF',
                        gather: 'Collecter des Ressources',
                        wheel: 'Roue de la Fortune',
                        heroShards: 'Éclats de Héros',
                        beasts: 'Terreur / Bêtes',
                        troops: 'Entraîner des Troupes',
                        charms: 'Charmes',
                        widgets: 'Widgets / Essence',
                        heroGears: 'Équipement de Héros',
                        chiefGear: 'Équipement de Chef',
                        pets: 'Animaux (Progression/Raffinement)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Attends... Des Licornes dans la Toundra ?',
                desc: "Tu t'es aventuré trop loin dans le blizzard, Chef. Les coordonnées sont fausses, il n'y a pas de ressources ici, et l'hypothermie te fait peut-être halluciner.",
                button: 'Retourner au Quartier Général'
            }
        }
    },
    {
        name: 'IT',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Trappola per Orsi',
                crazyJoe: 'Joe il Pazzo',
                svs: 'SvS'
            },
            footer: {
                questions: 'Se hai domande, idee o reclami, chiedi a',
                copyright: '© 2026 TFF Alliance • Stato 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Benvenuto nella nostra Grande Alleanza!',
                discord: 'Unisciti al nostro Discord',
                events: {
                    bearTrap: 'Trappola per Orsi',
                    crazyJoe: 'Joe il Pazzo',
                    svs: 'Stato contro Stato',
                    mercenaryBoss: 'Boss Mercenario',
                    foundry: 'Fonderia',
                    canyonClash: 'Scontro nel Canyon'
                },
                labels: {
                    legion1: 'Legione 1',
                    legion2: 'Legione 2',
                    biWeekly: 'Bisettimanale',
                    tba: 'Da annunciare'
                }
            },
            bearTrap: {
                tag: 'Guida all\'Evento',
                title: 'Trappola per Orsi',
                sessions: {
                    s1Title: 'Sessione 1',
                    s1Time: '01:00',
                    s2Title: 'Sessione 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Meccaniche',
                    p1_1: 'Ogni eroe possiede abilità speciali che forniscono potenziamenti all\'intera carica. Tuttavia, ',
                    p1_bold: 'solo l\'abilità del primo eroe (Capitano)',
                    p1_2: ' si applica alla Carica.',
                    p2: 'Gli altri due eroi non contribuiscono con le loro abilità di carica, quindi sceglili basandoti esclusivamente sulla capacità delle truppe o sulle statistiche passive.'
                },
                join: {
                    titlePart1: 'Capitano se ti ',
                    titleHighlight: 'UNISCI',
                    desc: 'I migliori potenziamenti di danno e letalità per unirsi a cariche esistenti. L\'ordine è prioritario da sinistra a destra.',
                    noHeroes1: 'Se non hai nessuno di questi eroi disponibili, invia le tue truppe ',
                    noHeroesBold: 'senza alcun eroe',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Capitano se ',
                    titleHighlight: 'INIZI',
                    desc: 'Usa questi eroi come capitano se stai avviando una carica contro l\'Orso.'
                },
                tips: {
                    title: 'Strategia e Consigli',
                    desc: 'Massimizza i tuoi punti e le ricompense in modo efficiente.',
                    list: [
                        { title: 'Rapporto Truppe', desc: 'L\'Orso non uccide le truppe. Invia una formazione orientata al danno: 10% Fanteria, 10% Lancieri, 80% Arcieri.' },
                        { title: 'Tempo della Carica', desc: 'Imposta sempre le cariche a 5 minuti per massimizzare il numero di attacchi che il tuo team può effettuare.' },
                        { title: 'Auto-Unisciti', desc: 'Disattiva Auto-Unisciti se puoi essere online. L\'unione manuale garantisce l\'invio del corretto eroe capitano.' },
                        { title: 'Bonus Territorio', desc: 'Assicurati che la tua città sia situata sul Territorio dell\'Alleanza per beneficiare dei nostri bonus tecnologici dell\'alleanza.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Evento di Difesa',
                title: 'Joe il Pazzo',
                startsAt: 'Inizia alle',
                tba: 'Da annunciare',
                generalRules: {
                    title: 'Regole Generali',
                    rules: [
                        "Invia PRIMA TUTTE le tue truppe di Fanteria per rinforzare i membri dell'alleanza online.",
                        "Una volta esaurita la Fanteria, invia gli altri tipi di truppe (Lancieri & Arcieri) per rinforzare.",
                        "Distribuisci la difesa: non inviare rinforzi a città che hanno già più di 250k truppe rinforzate.",
                        "Non usare mai uno Scudo di Pace! Joe il Pazzo ignora gli scudi.",
                        "Posiziona i tuoi migliori eroi difensivi sulla parete della Guarnigione della tua città."
                    ]
                },
                hqDefense: {
                    title: 'Regole specifiche per la Difesa del QG',
                    labels: {
                        maxTroops: 'Truppe Max',
                        ratio: 'Rapporto',
                        captains: 'Capitani Richiesti'
                    },
                    waves: [
                        {
                            wave: 'Ondata 10 (Difesa QG)',
                            description: 'Dopo l\'ondata 9, richiama le truppe e invia la tua marcia più forte al QG. Concentrati sulla Fanteria ad alto HP per assorbire ed eliminare l\'ondata.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Fan <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Ondata 20 (Difesa Finale QG)',
                            description: 'Dopo l\'ondata 19, richiama nuovamente le truppe e corri al QG. Stessa priorità difensiva — prima la Fanteria. Il tuo membro più forte dovrebbe guidare la guarnigione.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Fan <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Strategie Pro',
                    desc: 'Consigli avanzati per scalare la classifica.',
                    list: [
                        { title: 'Nessuna Morte Permanente', desc: 'Le truppe sconfitte da Joe il Pazzo vanno solo all\'ospedale. Non ci sono perdite permanenti.' },
                        { title: 'Massimizzare i Punti', desc: 'Guadagni punti difendendo la tua città E difendendo gli alleati. Rinforzare gli altri è il segreto dei primi posti.' },
                        { title: 'Città in Fiamme', desc: 'Se fallisci una difesa due volte, la tua città brucerà e Joe ti ignorerà per il resto dell\'evento. In questo caso, invia TUTTE le truppe a rinforzare gli altri!' },
                        { title: 'Esca Città Vuota', desc: 'I giocatori di alto livello spesso svuotano completamente le loro città per massimizzare i punti di rinforzo altrove.' }
                    ]
                }
            },
            svs: {
                tag: 'Evento Inter-Server',
                title: 'Stato contro Stato',
                durationLabel: 'Durata',
                durationValue: '6 Giorni',
                prepRules: {
                    title: 'Regole della Fase di Preparazione',
                    rules: [
                        "Accumulare è la regola d'oro. Conserva Cristalli di Fuoco, acceleratori e widget esclusivamente per i loro giorni designati.",
                        "Il tempismo è tutto. Controlla attentamente l'ora di reset del server. Usare oggetti anche solo un minuto prima significa zero punti.",
                        "Punta sempre all'ultimo traguardo giornaliero per le ricompense personali, ma smetti di spendere una volta raggiunto per risparmiare per il prossimo SvS.",
                        "I Compiti Opzionali (🆗) danno punti, ma sono meno efficienti. Eseguili solo se miri a un posizionamento Top 100 generale."
                    ]
                },
                battleRules: {
                    title: 'Regole della Fase di Battaglia',
                    rules: [
                        "Mantieni uno Scudo di Pace di 24h in ogni momento a meno che tu non stia partecipando attivamente alle cariche per il Castello del Fuoco Solare o le Torrette.",
                        "Non raccogliere risorse nello stato nemico. I giocatori nemici daranno la caccia ai raccoglitori per facili punti uccisione.",
                        "Segui le indicazioni di targeting di R5/R4. Non avviare attacchi solitari casuali. Unisciti a cariche coordinate per assicurare gli obiettivi.",
                        "Cura a lotti. Durante i combattimenti intensi, cura le tue truppe in piccoli lotti (30-60 min) per usare gli aiuti dell'alleanza e risparmiare acceleratori."
                    ]
                },
                matrix: {
                    title: 'Matrice degli Aggiornamenti',
                    desc: 'Distribuzione giornaliera dei punti per la massima efficienza.',
                    focus: 'Priorità',
                    optional: 'Opzionale',
                    headers: {
                        category: 'Categoria',
                        d1: 'Giorno 1',
                        d2: 'Giorno 2',
                        d3: 'Giorno 3',
                        d4: 'Giorno 4',
                        d5: 'Giorno 5'
                    },
                    tasks: {
                        fc: 'Cristalli di Fuoco (CF)',
                        construction: 'Costruzione',
                        research: 'Ricerca / Alba',
                        sigils: 'Sigilli',
                        fcShards: 'Frammenti CF',
                        gather: 'Raccogliere Risorse',
                        wheel: 'Ruota della Fortuna',
                        heroShards: 'Frammenti Eroe',
                        beasts: 'Terrore / Bestie',
                        troops: 'Addestrare Truppe',
                        charms: 'Talismani',
                        widgets: 'Widget / Essenza',
                        heroGears: 'Equipaggiamento Eroe',
                        chiefGear: 'Equipaggiamento Capo',
                        pets: 'Animali (Avanzamento/Raffinamento)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Aspetta... Unicorni nella Tundra?',
                desc: "Ti sei spinto troppo lontano nella bufera, Capo. Le coordinate sono sbagliate, non ci sono risorse qui, e l'ipotermia potrebbe farti avere allucinazioni.",
                button: 'Torna al Quartier Generale'
            }
        }
    },
    {
        name: 'PT',
        imageUrl: '',
        pack: {
            header: {
                bearTrap: 'Armadilha do Urso',
                crazyJoe: 'Joe Maluco',
                svs: 'SvS'
            },
            footer: {
                questions: 'Se tiver perguntas, ideias ou reclamações, pergunte a',
                copyright: '© 2026 TFF Alliance • Estado 2327 • Whiteout Survival'
            },
            landing: {
                title: 'Bem-vindo à nossa Grande Aliança!',
                discord: 'Junte-se ao nosso Discord',
                events: {
                    bearTrap: 'Armadilha do Urso',
                    crazyJoe: 'Joe Maluco',
                    svs: 'Estado vs Estado',
                    mercenaryBoss: 'Chefe Mercenário',
                    foundry: 'Fundição',
                    canyonClash: 'Confronto do Canyon'
                },
                labels: {
                    legion1: 'Legião 1',
                    legion2: 'Legião 2',
                    biWeekly: 'Quinzenal',
                    tba: 'A anunciar'
                }
            },
            bearTrap: {
                tag: 'Guia do Evento',
                title: 'Armadilha do Urso',
                sessions: {
                    s1Title: 'Sessão 1',
                    s1Time: '01:00',
                    s2Title: 'Sessão 2',
                    s2Time: '18:00',
                    utc: 'UTC'
                },
                mechanics: {
                    title: 'Mecânicas',
                    p1_1: 'Cada herói possui habilidades especiais que concedem bônus a todo o ataque. No entanto, ',
                    p1_bold: 'apenas a habilidade do primeiro herói (Capitão)',
                    p1_2: ' se aplica ao Ataque.',
                    p2: 'Os outros dois heróis não contribuem com suas habilidades de ataque, portanto escolha-os com base apenas na capacidade de tropas ou estatísticas passivas.'
                },
                join: {
                    titlePart1: 'Capitão ao ',
                    titleHighlight: 'PARTICIPAR',
                    desc: 'Melhores bônus de dano e letalidade para participar de ataques existentes. A ordem é priorizada da esquerda para a direita.',
                    noHeroes1: 'Se não tiver nenhum desses heróis disponível, envie suas tropas ',
                    noHeroesBold: 'sem nenhum herói',
                    noHeroes2: '.'
                },
                start: {
                    titlePart1: 'Capitão ao ',
                    titleHighlight: 'INICIAR',
                    desc: 'Use esses heróis como capitão se estiver iniciando um ataque contra o Urso.'
                },
                tips: {
                    title: 'Estratégia e Dicas',
                    desc: 'Maximize seus pontos e recompensas com eficiência.',
                    list: [
                        { title: 'Proporção de Tropas', desc: 'O Urso não mata tropas. Envie uma formação focada em dano: 10% Infantaria, 10% Lanceiros, 80% Atiradores.' },
                        { title: 'Tempo do Ataque', desc: 'Defina sempre seus ataques para 5 minutos para maximizar o número de golpes que sua equipe pode dar.' },
                        { title: 'Auto-Participar', desc: 'Desative o Auto-Participar se puder ficar online. A participação manual garante o envio do herói capitão correto.' },
                        { title: 'Bônus de Território', desc: 'Certifique-se de que sua cidade esteja no Território da Aliança para se beneficiar dos nossos bônus tecnológicos de aliança.' }
                    ]
                }
            },
            crazyJoe: {
                tag: 'Evento de Defesa',
                title: 'Joe Maluco',
                startsAt: 'Começa às',
                tba: 'A anunciar',
                generalRules: {
                    title: 'Regras Gerais',
                    rules: [
                        "Envie PRIMEIRO TODAS as suas tropas de Infantaria para reforçar os membros da aliança que estão online.",
                        "Quando a Infantaria acabar, envie outros tipos de tropas (Lanceiros & Atiradores) para reforçar.",
                        "Distribua a defesa: não envie reforços para cidades que já têm mais de 250k tropas reforçadas.",
                        "Nunca use um Escudo de Paz! Joe Maluco ignora escudos.",
                        "Coloque seus melhores heróis defensivos na parede da Guarnição da sua própria cidade."
                    ]
                },
                hqDefense: {
                    title: 'Regras específicas da Defesa do QG',
                    labels: {
                        maxTroops: 'Tropas Máx.',
                        ratio: 'Proporção',
                        captains: 'Capitães Necessários'
                    },
                    waves: [
                        {
                            wave: 'Onda 10 (Defesa do QG)',
                            description: 'Após a onda 9, recall suas tropas e envie sua marcha mais forte ao QG. Foque em Infantaria de alto HP para absorver e eliminar a onda.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        },
                        {
                            wave: 'Onda 20 (Defesa Final do QG)',
                            description: 'Após a onda 19, recall novamente as tropas e corra ao QG. Mesma prioridade defensiva — Infantaria primeiro. Seu membro mais forte deve liderar a guarnição.',
                            maxTroops: '100k',
                            ratioHtml: '<span class="text-emerald-500">90%</span> Inf <span class="text-slate-400 mx-1">/</span> <span class="text-blue-500">10%</span> Lan',
                        }
                    ]
                },
                tips: {
                    title: 'Estratégias Pro',
                    desc: 'Dicas avançadas para subir no ranking.',
                    list: [
                        { title: 'Sem Mortes Permanentes', desc: 'Tropas derrotadas pelo Joe Maluco vão apenas para o hospital. Não há perdas permanentes.' },
                        { title: 'Maximizar Pontos', desc: 'Você ganha pontos por defender sua própria cidade E por defender aliados. Reforçar outros é o segredo dos primeiros lugares.' },
                        { title: 'Cidade em Chamas', desc: 'Se você falhar na defesa duas vezes, sua cidade vai queimar e Joe vai ignorá-lo pelo resto do evento. Nesse caso, envie TODAS as tropas para reforçar outros!' },
                        { title: 'Isca de Cidade Vazia', desc: 'Jogadores de alto nível frequentemente esvaziam completamente suas cidades para maximizar os pontos de reforço em outros lugares.' }
                    ]
                }
            },
            svs: {
                tag: 'Evento Inter-Servidor',
                title: 'Estado vs Estado',
                durationLabel: 'Duração',
                durationValue: '6 Dias',
                prepRules: {
                    title: 'Regras da Fase de Preparação',
                    rules: [
                        "Acumular é a regra de ouro. Guarde Cristais de Fogo, aceleradores e widgets exclusivamente para seus dias designados.",
                        "O timing é tudo. Verifique cuidadosamente o horário de reset do servidor. Usar itens mesmo um minuto antes significa zero pontos.",
                        "Sempre mire no último marco diário para recompensas pessoais, mas pare de gastar ao atingi-lo para poupar para o próximo SvS.",
                        "Tarefas Opcionais (🆗) dão pontos, mas são menos eficientes. Faça-as apenas se estiver mirando um ranking Top 100 geral."
                    ]
                },
                battleRules: {
                    title: 'Regras da Fase de Batalha',
                    rules: [
                        "Mantenha um Escudo de Paz de 24h a todo momento, a menos que esteja participando ativamente de ataques ao Castelo do Fogo Solar ou Torretas.",
                        "Não colete recursos no estado inimigo. Jogadores inimigos caçarão coletores por pontos de abate fáceis.",
                        "Siga as chamadas de alvo dos R5/R4. Não inicie ataques solo aleatórios. Junte-se a ataques coordenados para garantir os objetivos.",
                        "Cure em lotes. Durante combates intensos, cure suas tropas em pequenos lotes (30-60 min) para usar ajudas da aliança e economizar aceleradores."
                    ]
                },
                matrix: {
                    title: 'Matriz de Melhorias',
                    desc: 'Distribuição diária de pontos para máxima eficiência.',
                    focus: 'Foco',
                    optional: 'Opcional',
                    headers: {
                        category: 'Categoria',
                        d1: 'Dia 1',
                        d2: 'Dia 2',
                        d3: 'Dia 3',
                        d4: 'Dia 4',
                        d5: 'Dia 5'
                    },
                    tasks: {
                        fc: 'Cristais de Fogo (CF)',
                        construction: 'Construção',
                        research: 'Pesquisa / Amanhecer',
                        sigils: 'Sigilos',
                        fcShards: 'Fragmentos de CF',
                        gather: 'Coletar Recursos',
                        wheel: 'Roda da Sorte',
                        heroShards: 'Fragmentos de Herói',
                        beasts: 'Terror / Bestas',
                        troops: 'Treinar Tropas',
                        charms: 'Amuletos',
                        widgets: 'Widgets / Essência',
                        heroGears: 'Equipamento de Herói',
                        chiefGear: 'Equipamento de Chefe',
                        pets: 'Animais (Avanço/Refinamento)'
                    }
                }
            },
            notFound: {
                title: '404',
                subtitle: 'Espera... Unicórnios na Tundra?',
                desc: "Você se aventurou longe demais na nevasca, Chefe. As coordenadas estão erradas, não há recursos aqui, e a hipotermia pode estar fazendo você alucinar.",
                button: 'Voltar ao Quartel General'
            }
        }
    }
];

export const selectedLanguageIndex = signal(0);
export const selectedLanguage = computed(() => languages[selectedLanguageIndex()]);
export const selectedLanguagePack = computed(() => selectedLanguage().pack);
