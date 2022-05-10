import { Component, OnInit } from '@angular/core';
import { HardwareService } from './hardware.service';
import { Hardware } from './hardware-model';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css']
})

export class HardwareComponent implements OnInit {
 
  hardwares: Hardware[];
  selectedHardware: Hardware;

  constructor(private hardwareService: HardwareService) { }
  
  ngOnInit(): void {
    this.getHardware();
  }
  getHardware(): void{
    this.hardwareService.getHardwares().subscribe(hardwares => this.hardwares = hardwares);
  }
  onSelect(hardware: Hardware): void{
    this.selectedHardware = hardware;
  }
}
