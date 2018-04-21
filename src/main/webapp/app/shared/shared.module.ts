import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    LogNGatewaySharedLibsModule,
    LogNGatewaySharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        LogNGatewaySharedLibsModule,
        LogNGatewaySharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        LogNGatewaySharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LogNGatewaySharedModule {}
