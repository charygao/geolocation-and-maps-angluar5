import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { MenuToggleComponent } from './menu-toggle/menu-toggle';
import { SendEmailComponent } from './send-email/send-email';
import { ZipUploadComponent } from './zip-upload/zip-upload';
import { DayThreeComponent } from './day-three/day-three';
@NgModule({
	declarations: [MenuComponent,
    MenuToggleComponent,
    SendEmailComponent,
    ZipUploadComponent,
    DayThreeComponent],
	imports: [],
	exports: [MenuComponent,
    MenuToggleComponent,
    SendEmailComponent,
    ZipUploadComponent,
    DayThreeComponent]
})
export class ComponentsModule {}
