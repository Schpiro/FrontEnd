import { Component, OnInit } from '@angular/core';
import { Hardware } from '../hardware-model';
import { HardwareService } from '../hardware.service';

@Component({
  selector: 'app-hardware-create',
  templateUrl: './hardware-create.component.html',
})
export class HardwareCreateComponent implements OnInit {

  hardware: Hardware;
  types: String[];

  constructor(private hardwareService: HardwareService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  add(code: string, hardwareName: string, typesHash: string, stock: string, price: string): void{
    const stockNo = Number.parseInt(stock);
    const priceNo = Number.parseInt(price);
    const codeNo = Number.parseInt(code);
    document.location.reload()
    let hardware: Hardware = {name: hardwareName, price: priceNo, code: codeNo, type: typesHash, availableStock: stockNo};
    this.hardwareService.addHardware(hardware).subscribe(res => {
        console.log(res);
    });
  }

  getTypes(): void{
    this.hardwareService.getTypes().subscribe(types => this.types = types);
  }
}