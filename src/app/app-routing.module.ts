import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { DocumentSelectComponent } from './components/content/document-select/document-select.component';
import { DocumentComponent } from './components/content/document/document.component';
import { QuickAnnoComponent } from './components/tools/quick-anno/quick-anno.component';
import { KnowledgeBaseComponent } from './components/tools/knowledge-base/knowledge-base.component';
import { ToolGuard } from './guards/tool.guard';

const routes: Routes = [
    {
        path: 'login',
        canActivate: [LoginGuard],
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
    },
    {
        path: 'document',
        canActivate: [AuthGuard],
        component: DocumentComponent,
    },
    {
        path: 'quickanno',
        canActivate: [ToolGuard],
        component: QuickAnnoComponent,
    },
    {
        path: 'knowledgebase',
        canActivate: [ToolGuard],
        component: KnowledgeBaseComponent,
    },
    {
        path: 'selectdocument',
        canActivate: [AuthGuard],
        component: DocumentSelectComponent,
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
