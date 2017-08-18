import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TextFileParserService } from './shared.services/text-file-parser.service'
import { StopInfoService } from './shared.services/stop-info.service';
import { NextDepatureComponent } from './next-depature/next-depature.component'

@NgModule({
    declarations: [
        AppComponent,
        NextDepatureComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
    ],
    providers: [
        TextFileParserService,
        StopInfoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
