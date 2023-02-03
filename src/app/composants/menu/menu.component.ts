import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
menu: any;
     ngOnInit(): void {

     }
     public menuProperties: Array<Menu>=[
          { id:'1',
           titre:'Tableau de bord',
           icon:'fa-solid fa-bars',
           url:'',
           sousMenu:[
            {
              id:'11',
              titre:'Vue d ensemble',
              icon:'',
              url:'',
            },
            {
              id:'12',
              titre:'Statistique',
              icon:'',
              url:'statistique',
            }
           ]
          },
           {
            id:'2',
            titre:'Article',
            icon:'',
            url:'',
            sousMenu:[
              {
                id:'21',
                titre:'Articles',
                icon:'',
                url:'nouvelarticle',
              },
              {
                id:'22',
                titre:'Mouvements de stocks',
                icon:'',
                url:'mvtstk',
              }
             ]
          },
          {
            id:'3',
            titre:'Clients',
            icon:'fa-solid fa-user-group',
            url:'',
            sousMenu:[
              {
                id:'31',
                titre:'Clients',
                icon:'',
                url:'clients',
              },
              {
                id:'32',
                titre:'Commandes Clients',
                icon:'',
                url:'',
              }
             ]
          },
          {
            id:'4',
            titre:'Fournisseurs',
            icon:'fa-solid fa-user-group',
            url:'',
            sousMenu:[
              {
                id:'41',
                titre:'Fournisseurs',
                icon:'',
                url:'fournisseurs',
              },
              {
                id:'42',
                titre:'Commandes Fournisseurs',
                icon:'',
                url:'',
              }
             ]
          },
          {
            id:'5',
            titre:'Parametrages',
            icon:'fa fa-cog fa-spin',
            url:'',
            sousMenu:[
              {
                id:'51',
                titre:'Categories',
                icon:'',
                url:'',
              },
              {
                id:'52',
                titre:'Utilisateurs',
                icon:'',
                url:'',
              }
             ]
          }
    ];
    constructor(
      private router :Router
    ){}
    navigate(url?:string):void{
        this.router.navigate([url]);
    }
}
