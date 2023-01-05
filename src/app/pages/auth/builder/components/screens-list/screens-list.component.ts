import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Screen } from 'src/app/models/screen'

interface ScreenItem {
  screen: Screen,
  selected: boolean,
}

@Component({
  selector: 'app-screens-list',
  templateUrl: './screens-list.component.html',
  styleUrls: ['./screens-list.component.scss']
})
export class ScreensListComponent {
  public screensList: ScreenItem[] = []

  @Output() public screenSelectedChanged: EventEmitter<Screen> = new EventEmitter<Screen>()

  @Input() public set screens(screens: Screen[]) {
    this.screensList = screens.map(screen => ({
      screen,
      selected: false,
    }))

    if (this.screensList && this.screensList.length && !this.screensList.some(s => s.selected)) {
      this.screensList[0].selected = true
      this.screenSelectedChanged.emit(this.screensList[0].screen)
    }
  }

  public selectScreen(item: ScreenItem): void {
    const previous = this.screensList.find(s => s.selected)
    if (previous) {
      previous.selected = false
    }
    item.selected = true

    this.screenSelectedChanged.emit(item.screen)
  }
}
