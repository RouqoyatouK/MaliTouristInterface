import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: 'accueil', icon: 'mail' },
    { title: 'Pays', url: 'pays', icon: 'paper-plane' },
    { title: 'Regions', url: 'regions', icon: 'heart' },
    { title: 'Commentaires', url: 'commentaire', icon: 'archive' },

  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
