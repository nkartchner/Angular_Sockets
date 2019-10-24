import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then((mod) => mod.ChatModule)
  },
  // Change the "redirectTo='chat'" to "redirectTo:'login'" to load the auth module
  { path: '', pathMatch: 'full', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
