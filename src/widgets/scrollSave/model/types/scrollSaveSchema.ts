// <Адрес страницы, позиция скролла>
export type IScrollSchema = Record<string, number>

export interface IScrollSaveSchema {
    scroll: IScrollSchema;
}
