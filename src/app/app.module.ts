//MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TaskListsComponent } from './components/home/task-lists/task-lists.component';
import { AddTaskDialogComponent } from './components/dialogs/add-task-dialog/add-task-dialog.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';

//SERVICES
import { ConfirmationDialogService } from './components/dialogs/confirmation-dialog/confirmation-dialog.service';

// REDUCER
import { taskReducer } from './state/app.reducer';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    AddTaskDialogComponent,
    TaskListsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      task: taskReducer
    }),
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
    }),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR })
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent, AddTaskDialogComponent]
})
export class AppModule { }
