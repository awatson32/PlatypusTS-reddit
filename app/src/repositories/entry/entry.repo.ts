import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import EntryService from '../../services/entry/entry.svc';

export default class EntryRepository extends BaseRepository {
    
    constructor(private entrySvc: EntryService) {
        super();
    }
    
    getRedditList(): async.IThenable<Array<models.IEntry>> {
        let entryArray: Array<any> = [];
        return this.entrySvc.getRedditList().then((success) => {
            for(let i = 0; i < success.length; i++) {
                let entry = {
                    "title": success[i].data.title,
                    "author": success[i].data.author,
                    "id": success[i].data.id,
                    "thumbnail": success[i].data.thumbnail
                };
                entryArray.push(entry);    
                }
                return entryArray;
        });

    }
}


register.injectable('entry-repo', EntryRepository, [EntryService]);