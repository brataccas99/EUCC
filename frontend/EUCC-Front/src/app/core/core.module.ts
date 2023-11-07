import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { IconsModule } from '../shared/icons/icons.module';
import { CarouselComponent } from '../shared/carousel/carousel.component';

@NgModule({
  declarations: [NavbarComponent, FeaturesComponent, CarouselComponent],
  imports: [CommonModule, CoreRoutingModule, IconsModule],
  exports: [NavbarComponent, FeaturesComponent],
})
export class CoreModule {}
