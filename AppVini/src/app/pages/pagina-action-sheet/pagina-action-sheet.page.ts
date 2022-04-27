import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-action-sheet',
  templateUrl: './pagina-action-sheet.page.html',
  styleUrls: ['./pagina-action-sheet.page.scss'],
})
export class PaginaActionSheetPage implements OnInit {
  actionSheetCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  async actionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Deletar',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () =>{
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartilhar',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Toque (modal aberto)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
      }
      }, {
        text: 'Favorito',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  }
