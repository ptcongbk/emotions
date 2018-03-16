import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TextEmotionsComponent } from './text-emotions/text-emotions.component';
import { HateComponent } from './hate/hate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NeighborsComponent } from './neighbors/neighbors.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { FilterTextComponent } from './filter-text/filter-text.component';
import { FilterImageComponent } from './filter-image/filter-image.component';
import { ViolenceComponent } from './violence/violence.component';
import { FaceEmotionComponent } from './face-emotion/face-emotion.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { AnnotationComponent } from './annotation/annotation.component';
//  Test
import { EmbeddingsComponent } from './embeddings/embeddings.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path : 'text-emotions',
    canActivate: [AuthGuard],
    component : TextEmotionsComponent
  },
  {
    path: 'hate',
    canActivate: [AuthGuard],
    component: HateComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'neighbors',
    canActivate: [AuthGuard],
    component: NeighborsComponent
  },
  {
    path: 'emotions',
    component: EmotionsComponent
  },
  {
    path: 'test',
    canActivate: [AuthGuard],
    component: EmbeddingsComponent
  },
  {
    path: 'text-filter',
    canActivate: [AuthGuard],
    component: FilterTextComponent
  },
  {
    path: 'image-filter',
    canActivate: [AuthGuard],
    component: FilterImageComponent
  },
  {
    path: 'violence',
    canActivate: [AuthGuard],
    component: ViolenceComponent
  },
  {
    path: 'face-emotion',
    canActivate: [AuthGuard],
    component: FaceEmotionComponent
  },
  {
    path: 'image',
    canActivate: [AuthGuard],
    component: ImageComponent
  },
  {
    path: 'annotation',
    canActivate: [AuthGuard],
    component: AnnotationComponent
  }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
