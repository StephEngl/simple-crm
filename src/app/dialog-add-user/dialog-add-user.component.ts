import { Component } from '@angular/core';
import { MatDialogClose, MatDialogActions } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  user: User = {
    firstName: '',
    lastName: '',
    birthDate: 0, // oder new Date().getTime(), je nach Verwendung
    street: '',
    zipCode: 0,
    city: '',
  };
}
