import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { AuthComponent } from "./auth.component";
import { HttpAppComponent } from "src/app/http/http-app/http-app.component";

@NgModule({
    declarations: [
        AuthComponent,
        HttpAppComponent,

    ],
    imports: [
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: AuthComponent}
        ])
    ]
})
export class AuthModule {}