import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/characters';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.page.html',
  styleUrls: ['./characters-list.page.scss'],
})
export class CharactersListPage implements OnInit {

  characters: Character[] = [];
  currentPage = 1;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.charactersService.getAllCharacters(this.currentPage).subscribe({
      next: data => {
        this.characters.push(...data.results);
        console.log(data);
      }
    });
  }

}
