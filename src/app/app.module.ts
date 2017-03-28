import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ClusterPersistenceService } from './cluster-persistence.service';
import { SessionOpsComponent } from './session-ops/session-ops.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionOpsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClusterPersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
