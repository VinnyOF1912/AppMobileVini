import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
    { title: 'Navegação', url: '/navegacao', icon: 'code'},
    { title: 'Visualização', url: '/visualizacao', icon: 'eye'},
    { title: 'Visualização1', url: '/visualizacao1', icon: 'eye'},
    { title: 'Visualização2', url: '/visualizacao2', icon: 'eye'},
    { title: 'Visualização3', url: '/visualizacao3', icon: 'eye'},
    { title: 'Visualização4', url: '/visualizacao4', icon: 'eye'},
    { title: 'Alerta', url: '/alert', icon: 'alert-circle'},
    { title: 'Action Sheet', url: '/actionsheet', icon: 'alert'},
    { title: 'Badge', url: '/badge', icon: 'list'},
    { title: 'Pagina Alertas', url: '/paginaalertas', icon: 'alert'},
    { title: 'Pagina Action Sheet', url: '/paginaactionsheet', icon: 'alert'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
