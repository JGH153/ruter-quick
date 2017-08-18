import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TextFileParserService {

    constructor(
        private _http: Http,
    ) { }


    async parseData(dataFileName:string){

        const url = "./assets/data/" + dataFileName;
        const responce = await this._http.get(url).toPromise();
        let jsonData =  this.processDataFromRequestToJsonArray(responce["_body"])
        return jsonData;

    }

    processDataFromRequestToJsonArray(data){
        //split by lines
        let arrayOfLines = data.match(/[^\r\n]+/g);
        //split by comma
        let idRow = arrayOfLines[0].split(",");
        //remove from array
        arrayOfLines.splice(0, 1);

        let returnArray = [];

        //loop over rest of data lines and create json object for each line using idRow
        arrayOfLines.forEach(current =>{
            let jsonLine = {}
            let currentArr = current.split(",");
            let i = 0;
            currentArr.forEach(currentSub =>{
                jsonLine[idRow[i]] = currentSub;
                i ++;
            });
            returnArray.push(jsonLine);
        });

        return returnArray;
    }

}
