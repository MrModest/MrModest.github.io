import axios from 'axios';

export default class Repository {
    static root = process.env.PUBLIC_URL;
    static dataRoot = Repository.root + '/data';
    static logosRoot = Repository.dataRoot + '/logos';

    static getStaticDataUrl(langCode){
        return Repository.dataRoot + '/staticData.' + langCode + '.json';
    }

    static getLogoFullUrl(relatedPath){
        return this.logosRoot + relatedPath;
    }

    static async getStaticData() {
        const staticDatas = await Promise.all([
            axios.get(Repository.getStaticDataUrl('en')),
            axios.get(Repository.getStaticDataUrl('ru'))
        ]);

        return {
            en: staticDatas[0].data,
            ru: staticDatas[1].data,
        }
    }
}