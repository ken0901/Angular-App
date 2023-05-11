import { Pipe } from "@angular/core";

@Pipe({
    name:'reverseTesting'
})
export class ReverseTestingPipe {
    transform(value: string){
        return value.split("").reverse().join("");
    }
}