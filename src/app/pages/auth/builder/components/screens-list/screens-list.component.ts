import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
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
  private _screens: Screen[] = []
  public showAddScreenModal: boolean = false
  public screensList: ScreenItem[] = []
  public addScreenForm: FormGroup<{ screenName: FormControl<string | null> }>

  @Output() public screenSelectedChanged: EventEmitter<Screen> = new EventEmitter<Screen>()

  @Input() public set screens(screens: Screen[]) {
    this._screens = screens
    this.screensList = screens.map(screen => ({
      screen,
      selected: false,
    }))

    if (this.screensList && this.screensList.length && !this.screensList.some(s => s.selected)) {
      this.screensList[0].selected = true
      this.screenSelectedChanged.emit(this.screensList[0].screen)
    }
  }

  constructor(private formBuilder: FormBuilder) {
    this.addScreenForm = this.formBuilder.group({
      screenName: ['', [Validators.required]],
    })
  }

  public selectScreen(item: ScreenItem): void {
    const previous = this.screensList.find(s => s.selected)
    if (previous) {
      previous.selected = false
    }
    item.selected = true

    this.screenSelectedChanged.emit(item.screen)
  }

  public showAddScreen(): void {
    this.showAddScreenModal = true
  }

  public addScreen(): void {
    this._screens.push({
      stepNumber: this._screens.length + 2,
      title: this.addScreenForm.controls.screenName.value!,
      components: [],
      operations: [],
    })
    this.screens = this._screens
    this.resetCleanAddScreenForm()
  }

  public cancelAddScreen(): void {
    this.resetCleanAddScreenForm()
  }

  private resetCleanAddScreenForm() {
    this.addScreenForm.reset()
    this.showAddScreenModal = false
  }
}
