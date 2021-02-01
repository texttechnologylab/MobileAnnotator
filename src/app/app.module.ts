import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu/menu-bar/menu-bar.component';
import { ContentholderComponent } from './components/content/contentholder/contentholder.component';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { MaterialModule } from './modules/material/material.module';
import { LanguageModule } from './modules/language/language.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/user/login/login.component';
import { SnackBarComponent } from './components/menu/snack-bar/snack-bar.component';
import { DocumentSelectComponent } from './components/content/document-select/document-select.component';
import { DocumentComponent } from './components/content/document/document.component';
import { QuickAnnoComponent } from './components/tools/quick-anno/quick-anno.component';
import { LoadProgressComponent } from './components/menu/load-progress/load-progress.component';
import { PickerComponent } from './components/popups/picker/picker.component';
import { HammerConfig } from './hammerConfig';
import { FilterComponent } from './components/popups/filter/filter.component';
import { KnowledgeBaseComponent } from './components/tools/knowledge-base/knowledge-base.component';
import { CommentsComponent } from './components/popups/comments/comments.component';
import { KnowledgePickerComponent } from './components/tools/knowledge-base/knowledge-picker/knowledge-picker.component';
import { ToolBarComponent } from './components/menu/tool-bar/tool-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContentholderComponent,
    DashboardComponent,
    LoginComponent,
    SnackBarComponent,
    DocumentSelectComponent,
    DocumentComponent,
    QuickAnnoComponent,
    LoadProgressComponent,
    PickerComponent,
    FilterComponent,
    KnowledgeBaseComponent,
    CommentsComponent,
    KnowledgePickerComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LanguageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [
    CookieService, {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  entryComponents: [
    SnackBarComponent,
    DashboardComponent,
    LoadProgressComponent,
    PickerComponent,
    FilterComponent,
    CommentsComponent,
    KnowledgePickerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
