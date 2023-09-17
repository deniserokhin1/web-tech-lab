import type { Meta, StoryObj } from '@storybook/react'
import ArticleDetailsPage from './ArticleDetailsPage'
import { Theme } from '1_app/providers/ThemeProvider'
import { ThemeDecorator } from '6_shared/config/storybook/Decorators/ThemeDecorator'
import { type IArticle } from '5_entities/Article'
import { ArticleDataType, ArticleType } from '5_entities/Article/model/types/article'
import { StoreDecorator } from '6_shared/config/storybook/Decorators/StoreDecorator'
import img1 from '6_shared/assets/img/technical-progress-1.jpg'
import img2 from '6_shared/assets/img/technical-progress-2.jpg'

const article: IArticle = {
    id: '1',
    title: 'Технологический прогресс',
    subtitle: 'Революция в индустрии',
    img: img1,
    views: 1500,
    dataCreate: '2023-09-01',
    type: [ArticleType.IT, ArticleType.ECONOMICS],
    data: [
        {
            id: '1',
            type: ArticleDataType.TEXT,
            title: 'Введение в технологический прогресс',
            paragraphs: [
                'В  наши дни технологический прогресс является неотъемлемой частью повседневной жизни. Это явление, характеризующееся неуклонным развитием науки и  технологий, оказывает глубокое влияние на  экономику, социокультурные аспекты, а  также на  природное окружение.',
                'В  начале, технологический прогресс проявлялся в  простых формах, включая создание первых инструментов и  машин. С  развитием промышленной революции, технологическое развитие ускорилось, давая толчок для массового производства и  урбанизации. В  последние десятилетия, эра информационных технологий и  интернета дала начало новой волне технологической инновации, изменяя способы коммуникации и  доступ к  информации.',
                'Сегодня технологический прогресс характеризуется непрерывной эволюцией искусственного интеллекта, биотехнологий, космических исследований, а  также зелёных технологий. Эти инновации способствуют решению множества глобальных проблем, включая изменение климата, болезни и  доступ к  образованию.',
                'Технологический прогресс несёт в  себе как позитивные, так и  негативные последствия. С  одной стороны, он  предоставляет новые возможности для улучшения качества жизни и  экономического роста. С  другой стороны, он  может способствовать увеличению социального неравенства, потере рабочих мест и  экологическим кризисам.',
                'Технологический прогресс это движущая сила, способствующая развитию человечества на  различных уровнях. Несмотря на  свои вызовы, он  продолжает открывать новые горизонты и  возможности для инноваций и  улучшений в  различных сферах жизни. Стремление к  непрерывному усовершенствованию и  адаптации к  изменяющемуся миру остаётся центральной осью технологического прогресса, подталкивая нас к  более процветающему и  устойчивому будущему.',
            ],
        },
        {
            id: '2',
            type: ArticleDataType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="progress"></p>\n\n    <script>\n      document.getElementById("progress").innerHTML = "Welcome to the Tech Revolution";\n    </script>\n  </body>\n</html>',
        },
        {
            id: '3',
            type: ArticleDataType.IMAGE,
            src: img2,
            title: 'Иллюстрация 1 - Технологический прогресс',
        },
        {
            id: '4',
            type: ArticleDataType.TEXT,
            title: 'Ключевые моменты развития',
            paragraphs: [
                'Технологическое развитие это один из  самых значимых факторов, влияющих на  динамику прогресса современного общества. В  ходе истории человечества мы  сталкивались с  рядом ключевых моментов, которые значительно трансформировали наш мир. Давайте рассмотрим некоторые из  них.',
                'С  момента первой промышленной революции в  XVIII  веке, технологический прогресс демонстрировал свою способность кардинально изменять общество. Каждая последующая революция (вторая, третья и  четвертая или цифровая) привносила новые технологии и  методы производства, открывая новые горизонты возможностей.',
                'В  конце  XX века мир озадачил появлением интернета, который радикально изменил способы общения, доступ к  информации и  бизнес-модели. Это привело к  глобализации и  созданию мировой сети, связывающей людей и  организации как никогда раньше.',
                'Сегодня мы  стоим на  пороге новой эры, где искусственный интеллект и  машинное обучение начинают играть решающую роль в  многих аспектах нашей жизни. Эти технологии обещают революционизировать всё от  производства до  медицины и  транспорта.',
            ],
        },
        {
            id: '5',
            type: ArticleDataType.CODE,
            code: "const techProgress = require('tech-progress');\n\nconst revolution = techProgress.create();\n\nrevolution.start();",
        },
    ],
}

const meta = {
    title: '2_pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ArticleDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {},
}
Light.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
            ids: ['1', '2'],
            entities: {
                1: {
                    id: '1',
                    text: 'Comment 1',
                    user: { id: '1', username: 'Den' },
                },
                2: {
                    id: '2',
                    text: 'Comment 2',
                    user: { id: '1', username: 'Leon' },
                },
            },
        },
    }),
]

export const Dark: Story = {
    args: {},
}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: {
            ids: ['1', '2'],
            entities: {
                1: {
                    id: '1',
                    text: 'Comment 1',
                    user: { id: '1', username: 'Den' },
                },
                2: {
                    id: '2',
                    text: 'Comment 2',
                    user: { id: '1', username: 'Leon' },
                },
            },
        },
    }),
]
