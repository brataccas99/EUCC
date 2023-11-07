import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FaqComponent } from './pages/faq/faq.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'chat', component: ChatPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', component: WelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
