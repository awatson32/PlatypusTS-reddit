import {async, register} from 'platypus';
import BaseService from '../base/base.svc';


export default class EntryService extends BaseService {
    
    getRedditList(): async.IAjaxThenable<Array<models.IEntry>> {
        return this.http.json<any>({
            method: 'GET',
            url: this.host + 'Showerthoughts.json'
        }).then((success) => {
            return success.response.data.children;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('entry-svc', EntryService);
