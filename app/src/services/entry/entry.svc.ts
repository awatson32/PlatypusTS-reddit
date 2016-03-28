import {async, register} from 'platypus';
import BaseService from '../base/base.svc';


export default class EntryService extends BaseService {
    
    getRedditList(): async.IAjaxThenable<Array<models.IEntry>> {
        return this.http.json<Array<models.IEntry>>({
            method: 'GET',
            url: this.host
        }).then((success) => {
            return success.response;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('entry-svc', EntryService);
