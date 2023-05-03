import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth/auth-interceptor.service";

@NgModule({
    providers:[
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
        // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
        // {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true}
    ]
})
export class CoreModule {}