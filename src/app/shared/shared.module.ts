import { NgModule } from "@angular/core";
import { AlertComponet } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropdownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { ShortenPipe } from "../pipe/shorten.pipe";
import { FilterPipe } from "../pipe/filter.pipe";
import { ReversePipe } from "../pipe/reverse.pipe";
import { SortPipe } from "../pipe/sort.pipe";

@NgModule({
    declarations: [
        AlertComponet,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        ShortenPipe,
        FilterPipe,
        ReversePipe,
        SortPipe,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponet,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ]
})
export class SharedModule {}