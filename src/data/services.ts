import type { Locale } from '@/lib/routes'

export type ServiceRouteKey = 'alcohol' | 'drugs' | 'gambling'

export type ServiceContent = {
  heroTitle: string
  heroSubtitle: string

  problemTitle: string
  problemItems: string[]

  symptomsTitle: string
  symptomsItems: string[]

  consequencesTitle: string
  consequencesItems: string[]

  processTitle: string
  processItems: string[]

  programTitle: string
  programItems: string[]

  familyTitle: string
  familyText: string
  familyItems: string[]

  whyUsTitle: string
  whyUsItems: string[]

  faqTitle: string
  faqItems: {
    question: string
    answer: string
  }[]

  finalCtaTitle: string
  finalCtaText: string
}

export const ALCOHOL_SERVICE_CONTENT: Record<Locale, ServiceContent> = {
  uk: {
    heroTitle: 'Лікування алкоголізму',
    heroSubtitle:
      'Системна допомога людям із алкогольною залежністю та підтримка родини на шляху до стабільних змін.',

    problemTitle: 'Коли вже потрібне лікування алкоголізму',
    problemItems: [
      'Проблема повторюється і не зникає сама собою.',
      'Людина втрачає контроль над вживанням.',
      'Страждають стосунки, робота і повсякденне життя.',
      'Сім’я живе в постійній напрузі та виснаженні.',
    ],

    symptomsTitle: 'Ознаки алкогольної залежності',
    symptomsItems: [
      'Заперечення проблеми.',
      'Регулярне вживання попри наслідки.',
      'Конфлікти в родині через алкоголь.',
      'Неможливість стабільно зупинитися самостійно.',
    ],

    consequencesTitle: 'Що буде, якщо відкладати лікування',
    consequencesItems: [
      'Проблема стає глибшою і системнішою.',
      'Зростає емоційне виснаження родини.',
      'Посилюються конфлікти і руйнуються стосунки.',
      'Стає складніше повернути стабільність у життя.',
    ],

    processTitle: 'Як проходить лікування',
    processItems: [
      'Первинне звернення і консультація.',
      'Оцінка ситуації та визначення формату допомоги.',
      'Основний етап програми.',
      'Підтримка родини та супровід змін.',
    ],

    programTitle: 'Що входить у програму',
    programItems: [
      'Індивідуальна робота.',
      'Підтримка в процесі змін.',
      'Робота з причинами залежної поведінки.',
      'Підготовка до стабільнішого життя без повернення до старих сценаріїв.',
    ],

    familyTitle: 'Для родичів',
    familyText:
      'Родина часто звертається першою. Ми допомагаємо близьким краще зрозуміти ситуацію і обрати правильну стратегію дій.',
    familyItems: [
      'Пояснюємо, як діяти без хаосу і крайнощів.',
      'Допомагаємо зменшити провину і безсилля.',
      'Даємо опору для правильного діалогу і рішень.',
    ],

    whyUsTitle: 'Чому звертаються саме до нас',
    whyUsItems: [
      'Анонімність.',
      'Структурований підхід.',
      'Підтримка родини.',
      'Людяне ставлення без осуду.',
      'Системна логіка відновлення.',
      'Супровід у процесі змін.',
    ],

    faqTitle: 'FAQ по лікуванню алкоголізму',
    faqItems: [
      {
        question: 'Чи можна звернутися анонімно?',
        answer:
          'Так, звернення може бути конфіденційним. Формат і деталі уточнюються під час консультації.',
      },
      {
        question: 'Чи можуть звернутися родичі без пацієнта?',
        answer:
          'Так, родичі можуть звернутися першими, щоб отримати консультацію і зрозуміти правильний порядок дій.',
      },
      {
        question: 'Як зрозуміти, що вже потрібна допомога?',
        answer:
          'Якщо проблема повторюється, посилюється або впливає на родину, роботу і повсякденне життя, відкладати не варто.',
      },
    ],

    finalCtaTitle: 'Отримайте консультацію',
    finalCtaText:
      'Почніть із першого кроку, якщо вам потрібна ясність, допомога і розуміння формату підтримки.',
  },

  ru: {
    heroTitle: 'Лечение алкоголизма',
    heroSubtitle:
      'Системная помощь людям с алкогольной зависимостью и поддержка семьи на пути к устойчивым изменениям.',

    problemTitle: 'Когда уже требуется лечение алкоголизма',
    problemItems: [
      'Проблема повторяется и не исчезает сама.',
      'Человек теряет контроль над употреблением.',
      'Страдают отношения, работа и повседневная жизнь.',
      'Семья живёт в постоянном напряжении.',
    ],

    symptomsTitle: 'Признаки алкогольной зависимости',
    symptomsItems: [
      'Отрицание проблемы.',
      'Регулярное употребление несмотря на последствия.',
      'Конфликты в семье из-за алкоголя.',
      'Невозможность стабильно остановиться самостоятельно.',
    ],

    consequencesTitle: 'Что будет, если откладывать лечение',
    consequencesItems: [
      'Проблема становится глубже и системнее.',
      'Растёт эмоциональное истощение семьи.',
      'Усиливаются конфликты и разрушаются отношения.',
      'Вернуть стабильность становится сложнее.',
    ],

    processTitle: 'Как проходит лечение',
    processItems: [
      'Первичное обращение и консультация.',
      'Оценка ситуации.',
      'Основной этап программы.',
      'Поддержка семьи и сопровождение изменений.',
    ],

    programTitle: 'Что входит в программу',
    programItems: [
      'Индивидуальная работа.',
      'Поддержка в процессе изменений.',
      'Работа с причинами зависимости.',
      'Подготовка к более стабильной жизни.',
    ],

    familyTitle: 'Для родственников',
    familyText:
      'Семья часто обращается первой. Мы помогаем близким лучше понять ситуацию и выбрать правильную стратегию действий.',
    familyItems: [
      'Помогаем действовать без хаоса и крайностей.',
      'Снижаем чувство вины и бессилия.',
      'Даём опору для правильного диалога и решений.',
    ],

    whyUsTitle: 'Почему обращаются именно к нам',
    whyUsItems: [
      'Анонимность.',
      'Структурированный подход.',
      'Поддержка семьи.',
      'Человечное отношение без осуждения.',
      'Системная логика восстановления.',
      'Сопровождение в процессе изменений.',
    ],

    faqTitle: 'FAQ по лечению алкоголизма',
    faqItems: [
      {
        question: 'Можно ли обратиться анонимно?',
        answer:
          'Да, обращение может быть конфиденциальным. Подробности уточняются во время консультации.',
      },
      {
        question: 'Могут ли родственники обратиться без пациента?',
        answer:
          'Да, родственники могут обратиться первыми, чтобы получить консультацию и понять порядок действий.',
      },
      {
        question: 'Как понять, что помощь уже нужна?',
        answer:
          'Если проблема повторяется и влияет на семью, работу и повседневную жизнь, откладывать не стоит.',
      },
    ],

    finalCtaTitle: 'Получите консультацию',
    finalCtaText:
      'Начните с первого шага, если вам нужна ясность и профессиональная помощь.',
  },

  en: {
    heroTitle: 'Alcohol addiction treatment',
    heroSubtitle:
      'Structured support for people with alcohol addiction and guidance for families on the path to recovery.',

    problemTitle: 'When treatment is already needed',
    problemItems: [
      'The problem keeps repeating and does not disappear on its own.',
      'A person loses control over drinking.',
      'Relationships, work and daily life begin to suffer.',
      'Family members live under constant stress.',
    ],

    symptomsTitle: 'Signs of alcohol addiction',
    symptomsItems: [
      'Denial of the problem.',
      'Repeated drinking despite consequences.',
      'Conflicts in family relationships.',
      'Inability to stop consistently.',
    ],

    consequencesTitle: 'What happens if treatment is delayed',
    consequencesItems: [
      'The problem becomes deeper and more systemic.',
      'Family exhaustion increases.',
      'Conflicts become stronger and relationships are damaged.',
      'It becomes harder to restore stability.',
    ],

    processTitle: 'How treatment works',
    processItems: [
      'Initial contact and consultation.',
      'Assessment of the situation.',
      'Main stage of the program.',
      'Family support and recovery guidance.',
    ],

    programTitle: 'What the program includes',
    programItems: [
      'Individual work.',
      'Support during change.',
      'Work with the roots of addictive behavior.',
      'Preparation for a more stable life.',
    ],

    familyTitle: 'For family members',
    familyText:
      'Families often reach out first. We help loved ones understand the situation better and choose a more effective course of action.',
    familyItems: [
      'We help reduce chaos and emotional overload.',
      'We support healthier boundaries and clearer decisions.',
      'We provide guidance for constructive communication.',
    ],

    whyUsTitle: 'Why people choose us',
    whyUsItems: [
      'Confidentiality.',
      'Structured approach.',
      'Family support.',
      'Human-centered communication.',
      'Systemic recovery logic.',
      'Guidance throughout the change process.',
    ],

    faqTitle: 'FAQ about alcohol treatment',
    faqItems: [
      {
        question: 'Can I contact you confidentially?',
        answer:
          'Yes, the first contact can be confidential. Details are clarified during consultation.',
      },
      {
        question: 'Can family members contact you first?',
        answer:
          'Yes, family members can reach out first to get clarity and understand the next steps.',
      },
      {
        question: 'How do I know help is already needed?',
        answer:
          'If the problem keeps repeating and affects relationships, work and daily life, it is better not to delay support.',
      },
    ],

    finalCtaTitle: 'Get a consultation',
    finalCtaText:
      'Start with the first step if you need clarity and professional guidance.',
  },
}
export const DRUGS_SERVICE_CONTENT: Record<Locale, ServiceContent> = {
  uk: {
    heroTitle: 'Лікування наркоманії',
    heroSubtitle:
      'Системна допомога людям із наркотичною залежністю та підтримка родини на шляху до стабільних змін.',

    problemTitle: 'Коли вже потрібне лікування наркоманії',
    problemItems: [
      'Ситуація виходить з-під контролю і повторюється.',
      'Людина не може самостійно стабільно зупинитися.',
      'Руйнуються стосунки, робота і повсякденне життя.',
      'Родина живе у виснаженні, страху та напрузі.',
    ],

    symptomsTitle: 'Ознаки наркотичної залежності',
    symptomsItems: [
      'Заперечення проблеми.',
      'Повторювана залежна поведінка попри наслідки.',
      'Різкі зміни в поведінці та стосунках.',
      'Втрата контролю над своїми рішеннями та діями.',
    ],

    consequencesTitle: 'Що буде, якщо відкладати лікування',
    consequencesItems: [
      'Проблема поглиблюється і стає системною.',
      'Родина втрачає ресурс і стабільність.',
      'Зростає рівень конфлікту, хаосу і тривоги.',
      'Повернути контроль і довіру стає складніше.',
    ],

    processTitle: 'Як проходить лікування',
    processItems: [
      'Первинне звернення та консультація.',
      'Оцінка ситуації та визначення формату допомоги.',
      'Основний етап програми.',
      'Підтримка змін і супровід родини.',
    ],

    programTitle: 'Що входить у програму',
    programItems: [
      'Індивідуальна робота.',
      'Підтримка у процесі змін.',
      'Робота з причинами залежної поведінки.',
      'Формування основ для стабільнішого життя.',
    ],

    familyTitle: 'Для родичів',
    familyText:
      'Близькі часто стикаються з хаосом, страхом і безсиллям раніше, ніж сама людина визнає проблему. Ми допомагаємо родині краще зрозуміти ситуацію і діяти правильно.',
    familyItems: [
      'Даємо опору для чіткіших рішень.',
      'Пояснюємо, як не посилювати руйнівний сценарій.',
      'Допомагаємо знизити хаос і емоційне виснаження.',
    ],

    whyUsTitle: 'Чому звертаються саме до нас',
    whyUsItems: [
      'Анонімність.',
      'Структурований підхід.',
      'Підтримка родини.',
      'Людяне ставлення без осуду.',
      'Системна логіка відновлення.',
      'Супровід у процесі змін.',
    ],

    faqTitle: 'FAQ по лікуванню наркоманії',
    faqItems: [
      {
        question: 'Чи можуть родичі звернутися першими?',
        answer:
          'Так, родичі можуть звернутися першими, щоб отримати консультацію і зрозуміти правильний порядок дій.',
      },
      {
        question: 'Чи можна звернутися анонімно?',
        answer:
          'Так, звернення може бути конфіденційним. Формат і деталі уточнюються під час консультації.',
      },
      {
        question: 'Як зрозуміти, що вже потрібна допомога?',
        answer:
          'Якщо залежна поведінка повторюється, руйнує життя і сім’ю, відкладати допомогу не варто.',
      },
    ],

    finalCtaTitle: 'Отримайте консультацію',
    finalCtaText:
      'Почніть із першого кроку, якщо вам потрібна ясність, допомога і розуміння формату підтримки.',
  },

  ru: {
    heroTitle: 'Лечение наркомании',
    heroSubtitle:
      'Системная помощь людям с наркотической зависимостью и поддержка семьи на пути к устойчивым изменениям.',

    problemTitle: 'Когда уже требуется лечение наркомании',
    problemItems: [
      'Ситуация выходит из-под контроля и повторяется.',
      'Человек не может самостоятельно стабильно остановиться.',
      'Разрушаются отношения, работа и повседневная жизнь.',
      'Семья живёт в истощении, страхе и напряжении.',
    ],

    symptomsTitle: 'Признаки наркотической зависимости',
    symptomsItems: [
      'Отрицание проблемы.',
      'Повторяющееся зависимое поведение несмотря на последствия.',
      'Резкие изменения в поведении и отношениях.',
      'Потеря контроля над решениями и действиями.',
    ],

    consequencesTitle: 'Что будет, если откладывать лечение',
    consequencesItems: [
      'Проблема углубляется и становится системной.',
      'Семья теряет ресурс и стабильность.',
      'Усиливаются конфликт, хаос и тревога.',
      'Вернуть контроль и доверие становится сложнее.',
    ],

    processTitle: 'Как проходит лечение',
    processItems: [
      'Первичное обращение и консультация.',
      'Оценка ситуации.',
      'Основной этап программы.',
      'Поддержка изменений и сопровождение семьи.',
    ],

    programTitle: 'Что входит в программу',
    programItems: [
      'Индивидуальная работа.',
      'Поддержка в процессе изменений.',
      'Работа с причинами зависимого поведения.',
      'Формирование основы для более стабильной жизни.',
    ],

    familyTitle: 'Для родственников',
    familyText:
      'Близкие часто сталкиваются с хаосом, страхом и бессилием раньше, чем сам человек признаёт проблему. Мы помогаем семье лучше понять ситуацию и действовать правильно.',
    familyItems: [
      'Даём опору для более ясных решений.',
      'Объясняем, как не усиливать разрушительный сценарий.',
      'Помогаем снизить хаос и эмоциональное истощение.',
    ],

    whyUsTitle: 'Почему обращаются именно к нам',
    whyUsItems: [
      'Анонимность.',
      'Структурированный подход.',
      'Поддержка семьи.',
      'Человечное отношение без осуждения.',
      'Системная логика восстановления.',
      'Сопровождение в процессе изменений.',
    ],

    faqTitle: 'FAQ по лечению наркомании',
    faqItems: [
      {
        question: 'Могут ли родственники обратиться первыми?',
        answer:
          'Да, родственники могут обратиться первыми, чтобы получить консультацию и понять правильный порядок действий.',
      },
      {
        question: 'Можно ли обратиться анонимно?',
        answer:
          'Да, обращение может быть конфиденциальным. Формат и детали уточняются во время консультации.',
      },
      {
        question: 'Как понять, что помощь уже нужна?',
        answer:
          'Если зависимое поведение повторяется и разрушает жизнь семьи и самого человека, откладывать не стоит.',
      },
    ],

    finalCtaTitle: 'Получите консультацию',
    finalCtaText:
      'Начните с первого шага, если вам нужна ясность и профессиональная помощь.',
  },

  en: {
    heroTitle: 'Drug addiction treatment',
    heroSubtitle:
      'Structured support for people with drug addiction and guidance for families on the path to recovery.',

    problemTitle: 'When treatment is already needed',
    problemItems: [
      'The situation keeps repeating and is no longer under control.',
      'A person cannot stop in a stable way on their own.',
      'Relationships, work and daily life begin to collapse.',
      'Family members live in exhaustion, fear and tension.',
    ],

    symptomsTitle: 'Signs of drug addiction',
    symptomsItems: [
      'Denial of the problem.',
      'Repeated addictive behavior despite consequences.',
      'Sharp changes in behaviour and relationships.',
      'Loss of control over decisions and actions.',
    ],

    consequencesTitle: 'What happens if treatment is delayed',
    consequencesItems: [
      'The problem becomes deeper and more systemic.',
      'The family loses stability and emotional resources.',
      'Conflict, chaos and anxiety grow stronger.',
      'It becomes harder to restore trust and control.',
    ],

    processTitle: 'How treatment works',
    processItems: [
      'Initial contact and consultation.',
      'Assessment of the situation.',
      'Main stage of the program.',
      'Support for change and family guidance.',
    ],

    programTitle: 'What the program includes',
    programItems: [
      'Individual work.',
      'Support during change.',
      'Work with the roots of addictive behaviour.',
      'Building a foundation for a more stable life.',
    ],

    familyTitle: 'For family members',
    familyText:
      'Families often face chaos, fear and emotional exhaustion before the person admits the problem. We help loved ones understand the situation better and act more effectively.',
    familyItems: [
      'We provide support for clearer decisions.',
      'We explain how not to reinforce destructive patterns.',
      'We help reduce chaos and emotional overload.',
    ],

    whyUsTitle: 'Why people choose us',
    whyUsItems: [
      'Confidentiality.',
      'Structured approach.',
      'Family support.',
      'Human-centered communication.',
      'Systemic recovery logic.',
      'Guidance throughout the change process.',
    ],

    faqTitle: 'FAQ about drug addiction treatment',
    faqItems: [
      {
        question: 'Can family members contact you first?',
        answer:
          'Yes, family members can reach out first to get guidance and understand the next steps.',
      },
      {
        question: 'Can I contact you confidentially?',
        answer:
          'Yes, the first contact can be confidential. Details are clarified during consultation.',
      },
      {
        question: 'How do I know support is already needed?',
        answer:
          'If the addictive behaviour keeps repeating and damages daily life and family stability, it is better not to delay help.',
      },
    ],

    finalCtaTitle: 'Get a consultation',
    finalCtaText:
      'Start with the first step if you need clarity and professional guidance.',
  },
}

export const GAMBLING_SERVICE_CONTENT: Record<Locale, ServiceContent> = {
  uk: {
    heroTitle: 'Лікування лудоманії',
    heroSubtitle: 'TODO',
    problemTitle: 'TODO',
    problemItems: ['TODO'],
    symptomsTitle: 'TODO',
    symptomsItems: ['TODO'],
    consequencesTitle: 'TODO',
    consequencesItems: ['TODO'],
    processTitle: 'TODO',
    processItems: ['TODO'],
    programTitle: 'TODO',
    programItems: ['TODO'],
    familyTitle: 'TODO',
    familyText: 'TODO',
    familyItems: ['TODO'],
    whyUsTitle: 'TODO',
    whyUsItems: ['TODO'],
    faqTitle: 'TODO',
    faqItems: [{ question: 'TODO', answer: 'TODO' }],
    finalCtaTitle: 'TODO',
    finalCtaText: 'TODO',
  },
  ru: {
    heroTitle: 'Лечение лудомании',
    heroSubtitle: 'TODO',
    problemTitle: 'TODO',
    problemItems: ['TODO'],
    symptomsTitle: 'TODO',
    symptomsItems: ['TODO'],
    consequencesTitle: 'TODO',
    consequencesItems: ['TODO'],
    processTitle: 'TODO',
    processItems: ['TODO'],
    programTitle: 'TODO',
    programItems: ['TODO'],
    familyTitle: 'TODO',
    familyText: 'TODO',
    familyItems: ['TODO'],
    whyUsTitle: 'TODO',
    whyUsItems: ['TODO'],
    faqTitle: 'TODO',
    faqItems: [{ question: 'TODO', answer: 'TODO' }],
    finalCtaTitle: 'TODO',
    finalCtaText: 'TODO',
  },
  en: {
    heroTitle: 'Gambling addiction treatment',
    heroSubtitle: 'TODO',
    problemTitle: 'TODO',
    problemItems: ['TODO'],
    symptomsTitle: 'TODO',
    symptomsItems: ['TODO'],
    consequencesTitle: 'TODO',
    consequencesItems: ['TODO'],
    processTitle: 'TODO',
    processItems: ['TODO'],
    programTitle: 'TODO',
    programItems: ['TODO'],
    familyTitle: 'TODO',
    familyText: 'TODO',
    familyItems: ['TODO'],
    whyUsTitle: 'TODO',
    whyUsItems: ['TODO'],
    faqTitle: 'TODO',
    faqItems: [{ question: 'TODO', answer: 'TODO' }],
    finalCtaTitle: 'TODO',
    finalCtaText: 'TODO',
  },
}

export function getServiceContent(routeKey: ServiceRouteKey, locale: Locale): ServiceContent | null {
  const contentByLocale = {
    alcohol: ALCOHOL_SERVICE_CONTENT,
    drugs: DRUGS_SERVICE_CONTENT,
    gambling: GAMBLING_SERVICE_CONTENT,
  }[routeKey]

  return contentByLocale?.[locale] ?? null
}