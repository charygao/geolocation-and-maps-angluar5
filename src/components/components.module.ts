import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { MenuToggleComponent } from './menu-toggle/menu-toggle';
import { SendEmailComponent } from './send-email/send-email';
import { ZipUploadComponent } from './zip-upload/zip-upload';
@NgModule({
	declarations: [MenuComponent,
    MenuToggleComponent,
    SendEmailComponent,
    ZipUploadComponent],
	imports: [],
	exports: [MenuComponent,
    MenuToggleComponent,
    SendEmailComponent,
    ZipUploadComponent]
})
export class ComponentsModule {}
