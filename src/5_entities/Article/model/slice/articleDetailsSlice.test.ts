import { fetchArticleById } from '../services/fetchArticleById'
import { ArticleDataType, ArticleType, type IArticle } from '../types/article'
import { type ArticleDetailsSchema } from '../types/articleDetailsSchema'
import { articleDetailsReducer } from './articleDetailsSlice'

const data: IArticle = {
    id: '1',
    title: 'Технологический прогресс',
    subtitle: 'Революция в индустрии',
    img: 'https://3.downloader.disk.yandex.ru/preview/a59174e1005f68e2bbc6d43468e264c97531e00bdad96030ee0d6a52ca91052a/inf/fk-E4z_2u3z4uJ_-YcoEw-vT7v6BQRAiZuhlPSQtNFNvsxSnW3GZF0uxjB7DKC21rtlKBde_JXSJsLKr8IJyNw%3D%3D?uid=233854961&filename=business-4241792_1920.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=233854961&tknv=v2&size=2880x1630',
    views: 1500,
    dataCreate: '2023-09-01',
    type: [ArticleType.IT, ArticleType.ECONOMICS],
    data: [
        {
            id: '1',
            type: ArticleDataType.TEXT,
            title: 'Введение в технологический прогресс',
            paragraphs: [
                'В&nbsp;наши дни технологический прогресс является неотъемлемой частью повседневной жизни. Это явление, характеризующееся неуклонным развитием науки и&nbsp;технологий, оказывает глубокое влияние на&nbsp;экономику, социокультурные аспекты, а&nbsp;также на&nbsp;природное окружение.',
                'В&nbsp;начале, технологический прогресс проявлялся в&nbsp;простых формах, включая создание первых инструментов и&nbsp;машин. С&nbsp;развитием промышленной революции, технологическое развитие ускорилось, давая толчок для массового производства и&nbsp;урбанизации. В&nbsp;последние десятилетия, эра информационных технологий и&nbsp;интернета дала начало новой волне технологической инновации, изменяя способы коммуникации и&nbsp;доступ к&nbsp;информации.',
                'Сегодня технологический прогресс характеризуется непрерывной эволюцией искусственного интеллекта, биотехнологий, космических исследований, а&nbsp;также зелёных технологий. Эти инновации способствуют решению множества глобальных проблем, включая изменение климата, болезни и&nbsp;доступ к&nbsp;образованию.',
                'Технологический прогресс несёт в&nbsp;себе как позитивные, так и&nbsp;негативные последствия. С&nbsp;одной стороны, он&nbsp;предоставляет новые возможности для улучшения качества жизни и&nbsp;экономического роста. С&nbsp;другой стороны, он&nbsp;может способствовать увеличению социального неравенства, потере рабочих мест и&nbsp;экологическим кризисам.',
                'Технологический прогресс&nbsp;&mdash; это движущая сила, способствующая развитию человечества на&nbsp;различных уровнях. Несмотря на&nbsp;свои вызовы, он&nbsp;продолжает открывать новые горизонты и&nbsp;возможности для инноваций и&nbsp;улучшений в&nbsp;различных сферах жизни. Стремление к&nbsp;непрерывному усовершенствованию и&nbsp;адаптации к&nbsp;изменяющемуся миру остаётся центральной осью технологического прогресса, подталкивая нас к&nbsp;более процветающему и&nbsp;устойчивому будущему.',
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
            src: 'https://downloader.disk.yandex.ru/preview/e0a56f30da228444029e4ae0c216c916167576922aacb0b8bd803ff996571dbd/650181cf/AktTdPH7nahFOyz10H11_VMdhFTDRxEmQVtR_DC03sFmYsPw4-Cau66YJkmI4ttzX-3JBxamw9dwYOLi9-QcZw%3D%3D?uid=0&filename=success-2081168_1920.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
            title: 'Иллюстрация 1 - Технологический прогресс',
        },
        {
            id: '4',
            type: ArticleDataType.TEXT,
            title: 'Ключевые моменты развития',
            paragraphs: [
                'Технологическое развитие&nbsp;&mdash; это один из&nbsp;самых значимых факторов, влияющих на&nbsp;динамику прогресса современного общества. В&nbsp;ходе истории человечества мы&nbsp;сталкивались с&nbsp;рядом ключевых моментов, которые значительно трансформировали наш мир. Давайте рассмотрим некоторые из&nbsp;них.',
                'С&nbsp;момента первой промышленной революции в&nbsp;XVIII&nbsp;веке, технологический прогресс демонстрировал свою способность кардинально изменять общество. Каждая последующая революция (вторая, третья и&nbsp;четвертая или цифровая) привносила новые технологии и&nbsp;методы производства, открывая новые горизонты возможностей.',
                'В&nbsp;конце&nbsp;XX века мир озадачил появлением интернета, который радикально изменил способы общения, доступ к&nbsp;информации и&nbsp;бизнес-модели. Это привело к&nbsp;глобализации и&nbsp;созданию мировой сети, связывающей людей и&nbsp;организации как никогда раньше.',
                'Сегодня мы&nbsp;стоим на&nbsp;пороге новой эры, где искусственный интеллект и&nbsp;машинное обучение начинают играть решающую роль в&nbsp;многих аспектах нашей жизни. Эти технологии обещают революционизировать всё от&nbsp;производства до&nbsp;медицины и&nbsp;транспорта.',
            ],
        },
        {
            id: '5',
            type: ArticleDataType.CODE,
            code: "const techProgress = require('tech-progress');\n\nconst revolution = techProgress.create();\n\nrevolution.start();",
        },
    ],
}

describe('profileSlice', () => {
    test('test fetching article service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        }

        expect(
            articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending),
        ).toEqual({
            isLoading: true,
        })
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        }

        expect(
            articleDetailsReducer(
                state as ArticleDetailsSchema,
                fetchArticleById.fulfilled(data, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            data,
        })
    })
})
