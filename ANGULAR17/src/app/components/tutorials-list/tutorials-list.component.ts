import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrl: './tutorials-list.component.css'
})
export class TutorialsListComponent implements OnInit{

  tutorials: any;
  currentTutorial: any = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
      this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
    .subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: any): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
    .subscribe(
      response => {
        console.log(response);
        this.retrieveTutorials();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title)
    .subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
