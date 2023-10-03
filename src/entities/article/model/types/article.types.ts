import { IUser } from 'entities/user';

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface IArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface IArticleCodeBlock extends IArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface IArticleImageBlock extends IArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface IArticleTextBlock extends IArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export enum EArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum EArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface IArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: EArticleType[];
    blocks: ArticleBlock[];
    user: IUser;
}
