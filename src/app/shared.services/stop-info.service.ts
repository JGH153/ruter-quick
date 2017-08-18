import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StopInfoService {

    private loadedData = []

    constructor(
        private _http: Http,
    ) { }

    //adds 0 if only one in length
    handleZero(value:number):string{
        if(value.toString().length === 1){
            return "0"+value.toString()
        }else{
            return value.toString();
        }
    }

    getDate(){
        let nowDate = new Date();
        let dd:string = this.handleZero(nowDate.getDate())
        let mm:string  = this.handleZero(nowDate.getMonth()+1); //January is 0!
        return dd+"."+(mm)+"."+nowDate.getFullYear()
    }

    getNowTime(){
        let nowDate = new Date();
        let h:string = this.handleZero(nowDate.getHours());
        let m:string = this.handleZero(nowDate.getMinutes());
        return h+"%3A"+m;
    }

    async loadStopDepartures(stopID : number){

        let nowDate = new Date();

        stopID = 3011490;
        let startTime = this.getNowTime();
        let date = this.getDate();
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = "https://ruter.no/webapi/getstopdepartures?stopId="+stopID
            + "&startTime=" + startTime
            + "&date=" + date;
        const responce = await this._http.get(proxy+url).toPromise();
        this.loadedData.push(responce.json());
        return this.loadedData.length-1;

    }

    getLoadedDataLineDepatures(tokenID, line){ //line 1 or 2

        let data = this.loadedData[tokenID];
        let depatures = data['platforms'][line]['lines']['0']['departures'];

        let tempArr = [];
        depatures.forEach(current => {
            tempArr.push(current['departureTime'])
        });

        let returnJson = {
            'name' : data['platforms'][line]['lines']['0']['destination'],
            'depatures' : tempArr
        }

        return returnJson;
    }

    getLoadedData(tokenID){
        return this.loadedData[tokenID];
    }

}
