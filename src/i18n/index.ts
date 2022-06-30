import en from './en.json';
import pt from './pt.json';
import es from './es.json';

export const translate  = (key: string, lang: string): string => {
    let langData: {[key: string]: string} = {};

    if(lang === 'EN')
        langData = en;
    else if(lang === 'PT')
        langData = pt;
    else if(lang === 'ES')
        langData = es;

    return langData[key];
}