import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cpf"
})
export class CpfPipe implements PipeTransform {
  transform(cpf: string) {
    if (!cpf) { return; }

    const notNumberRegx = /\D/g;
    let cpfString = cpf.trim().replace(notNumberRegx, '');

    if (cpfString.length < 11) {
      cpfString = cpfString.padStart(11, "0");
    } else if (cpfString.length > 11) {
      cpfString = cpfString.slice(0, 11);
    }

    const s: string[] = cpfString.match(/.{1,3}/g);
    return `${s[0]}.${s[1]}.${s[2]}-${s[3]}`;
  }
}
