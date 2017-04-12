import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ClusterPersistenceService } from './cluster-persistence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

   constructor( private _persistenceSvc: ClusterPersistenceService,
                private _changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit()
   {
      let me = this.constructor.name + ".ngOnInit(): ";
      this._persistenceSvc.init();
      this._persistenceSvc.connectToDatabase();
      this._persistenceSvc.clusterNamesObservable.subscribe(() => {
         console.log( me + `detecting changes`);
         this._changeDetectorRef.detectChanges()
      });
   }
}
