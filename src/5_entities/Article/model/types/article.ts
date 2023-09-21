import { type IUser } from '5_entities/User'

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleDataType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBase {
    id: string
    type: ArticleDataType
}

export interface ArticleCode extends ArticleBase {
    type: ArticleDataType.CODE
    code: string
}

export interface ArticleImage extends ArticleBase {
    type: ArticleDataType.IMAGE
    src: string
    title: string
}

export interface ArticleText extends ArticleBase {
    type: ArticleDataType.TEXT
    paragraphs: string[]
    title?: string
}

export type ArticleData = ArticleCode | ArticleImage | ArticleText

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    ROW = 'row',
    TILE = 'tile',
}

export interface IArticle {
    id: string
    user: IUser
    title: string
    subtitle: string
    img: string
    views: number
    dataCreate: string
    type: ArticleType[]
    data: ArticleData[]
}
