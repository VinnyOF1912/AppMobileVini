import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  alertCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  
  async alert() {
    const alert = await this.alertCtrl.create({
      cssClas: 'my-custom-class' ,
      header: 'Alerta' ,
      subHeader: 'Atenção' ,
      message: 'Esta é uma mensagem de Alerta!!' ,
      buttons: ['ok']
    })
    await alert.present();
  }
  async alertaMultiplosBotoes() {
    const alert = await this.alertCtrl.create({
      cssClas: 'my-custom-class' ,
      header: 'Alerta Múltiplos' ,
      subHeader: 'Múltiplos Botões' ,
      message: 'Este é um alerta com múltiplos botões' ,
      buttons: ['Cancelar' , 'Abrir' , 'Excluir']
    })
    await alert.present();
  }
}
