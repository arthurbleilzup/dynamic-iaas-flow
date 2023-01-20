import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Screen } from 'src/app/models/screen'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() public children: Screen.Component[] = []

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  public ngOnInit(): void {
    this.changeDetector.detectChanges()
  }

  public getGridColumnsStyle(childrenCount: number): string {
    let i = 0
    let array = Array(childrenCount)

    while(i < childrenCount) {
      array[i++] = i
    }

    const percentage = 100 / childrenCount
    const gap = 16 / childrenCount
    const size = percentage === 100 ? '100%' : `calc(${percentage}% - ${gap}px)`
    return array.map(a => size).join(' ')
  }
}
