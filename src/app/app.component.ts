import { Component, OnInit } from '@angular/core';

import { TextFileParserService } from './shared.services/text-file-parser.service'
import { StopInfoService } from './shared.services/stop-info.service'

@Component({
  selector: 'rq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
    title = 'rq';

    constructor(
        private _parserService: TextFileParserService,
        private _stopInfoService: StopInfoService,
    ){

    }

    ngOnInit() {

        this.handleAsyncDataLoad();

    }

    async handleAsyncDataLoad(){

        let data = await this._parserService.parseData("agency.txt");
        //console.log(data[2]);

    }

}
