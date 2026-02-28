import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-industries',
  imports: [MatIconModule],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndustriesComponent {
 industries = [
    { name: 'E-Commerce', icon: 'shopping_cart' },
    { name: 'Startups', icon: 'lightbulb' },
    { name: 'Logistics', icon: 'local_shipping' },
    { name: 'Banking', icon: 'account_balance' },
    { name: 'Government', icon: 'gavel' },
    { name: 'Real Estate', icon: 'home' },
    { name: 'Automobile', icon: 'directions_car' },
    { name: 'Political', icon: 'how_to_vote' },
    { name: 'Education', icon: 'school' },
    { name: 'Health Care', icon: 'medical_services' }
  ];
}
