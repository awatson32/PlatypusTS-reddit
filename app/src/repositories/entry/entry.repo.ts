import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import EntryService from '../../services/entry/entry.svc';

export default class EntryRepository extends BaseRepository {
    
    constructor(private entrySvc: EntryService) {
        super();
    }
    
    getRedditList(): async.IThenable<Array<models.IEntry>> {
        let f = [];
        return this.entrySvc.getRedditList();
    }
}


register.injectable('entry-repo', EntryRepository, [EntryService]);