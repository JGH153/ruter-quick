import { Component, OnInit } from '@angular/core';
import { StopInfoService } from './../shared.services/stop-info.service'

import * as moment from 'moment';

@Component({
    selector: 'rq-next-depature',
    templateUrl: './next-depature.component.html',
    styleUrls: ['./next-depature.component.scss']
})
export class NextDepatureComponent implements OnInit {

    dataTokenID = null;
    directionOne;
    directionTwo;
    dataLoaded = false;

    constructor(
        private _stopInfoService: StopInfoService,
    ) { }

    ngOnInit() {
        this.loadStopInfoAsync();
    }

    async loadStopInfoAsync(){

        let lørenID = 3011490
        this.dataTokenID = await this._stopInfoService.loadStopDepartures(3011490);

        this.directionOne = this._stopInfoService.getLoadedDataLineDepatures(this.dataTokenID, 0);
        this.directionTwo = this._stopInfoService.getLoadedDataLineDepatures(this.dataTokenID, 1);
        this.dataLoaded = true;

    }

    getTimeToDep(current){
        let nowTime = moment();
        let depature = moment(current, "HH:mm");
        if(depature < nowTime){
            depature.add(24, "hours");
        }
        return depature.diff(nowTime, 'minutes');
    }

}
