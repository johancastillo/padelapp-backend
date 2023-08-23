
import {Document} from 'mongoose'

export interface Article extends Document {
    title: string;
    description: string;
    cover: string;
    photos: Array<String>;
    author: string;
    banner: string;
    resumen: string;
}
