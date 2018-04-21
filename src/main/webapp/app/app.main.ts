import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { LogNGatewayAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic().bootstrapModule(LogNGatewayAppModule)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
