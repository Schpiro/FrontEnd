import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Hardware } from '../hardware-model';
import { HardwareService } from '../hardware.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hardware-detail-component',
  templateUrl: './hardware-detail.component.html',
  styleUrls: ['./hardware-detail.component.css']
})
export class HardwareDetailComponent implements OnInit {

  @Input() hardware: Hardware;

  constructor(
    private route: ActivatedRoute,
    private hardwareService: HardwareService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const code = params.get('code');
        return this.hardwareService.getHardwareByCode(code);
      }
      )
    ).subscribe((hardware: Hardware) => {
      this.hardware = hardware;
    });
  }

  delete(hardware: Hardware): void{
    this.hardwareService.deleteHardware(hardware).subscribe(res => {
      console.log(res)
      document.location.reload()
    });
    console.info(hardware.code)
  }
}
