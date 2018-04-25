import { Comment } from './Comment'

export class Article {
    id: number;
    titulo: string;
    autor: string;
    conteudo: string;
    categoria: string;
    comments: Comment[];
}