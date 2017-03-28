import { Component, OnInit } from '@angular/core';

// import { Cluster } from '../cluster';
import { ClusterPersistenceService } from '../cluster-persistence.service';
import { User } from '../user';

@Component({
  selector: 'app-session-ops',
  templateUrl: './session-ops.component.html',
  styleUrls: ['./session-ops.component.css']
})
export class SessionOpsComponent implements OnInit
{
   public user: User;
   
//   public get clusterName(): string { return this._cluster.name};
//   public set clusterName( aName: string) { this._cluster.name = aName};
   
   private getUser(): void
   {
      // ".then()" --> hooks up promise resolution event, I think.  Resolution will drive a UI "digest" cycle that will
      // result in the UI being updated with new data.  At this point, I'll just go ahead and call Angular "amazing".

      this._persistenceSvc.user.then( 
         user => {
            console.log( `user = ${user}`);
            // console.log( `cluster has ${this._cluster.numSystems} systems`);
            this.user = user;
         });
   }

   constructor( /* private _cluster: Cluster, */ private _persistenceSvc: ClusterPersistenceService) { }

   ngOnInit()
   {
      this.getUser();           // I think this basically hooks up the promise resolution event.
   }

   public login()
   {
      let me = this.constructor.name + ".login(): ";
      console.log( me + "logging in");
      this._persistenceSvc.login();
      // alert( me + 'done');
   }

   public logout()
   {
      let me = this.constructor.name + ".logout(): ";
      console.log( me + "logging out");
      this.user = null;         // Not waiting for an authChanged event for two reasons: (1) the promise has certainly
                                // already been resolved, and promises are one-time-only events, and (2) we already know
                                // what the outcome of this call will be.
      this._persistenceSvc.logout();
   }

   public saveCluster(){}
}
