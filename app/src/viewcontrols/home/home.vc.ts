import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import EntryRepository from '../../repositories/entry/entry.repo';


export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
        entries: <Array<models.IEntry>>[],
        success: [],
        data: {}
    };
    
    constructor(private entryRepo: EntryRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.entryRepo.getRedditList().then((success) => {
            console.log("We made it to the reddit.");
            console.log(success);
            this.context.entries = success;
        }, (err) => {
            console.log("Uh, oh. Something's not right.");
            console.log(err);            
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [EntryRepository]);
