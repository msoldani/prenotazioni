import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Lista } from './lista/lista.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prenotazioni';
  lista: Lista[];

  data: Object;
  loading: boolean;
  oArt: Observable<Lista[]>;
  postArt: Observable<Object>;
  tempArt: Lista;
  num: number = 0;

  constructor(public http: HttpClient) {
    //Fai la get e ottieni la lista di articoli e riempi il vettore articles
    this.lista = new Array<Lista>();
    this.oArt = this.http.get<Lista[]>('https://jsonplaceholder.typicode.com/posts');
    this.oArt.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
   // this.articles = data; //Se non ci fossero metodi, basterebbe fare così
    for(let element of data)
    {
       this.lista.push(new Lista(element.nome, element.cognome, element.indirizzo, element.telefono, element.email, element.data, element.ora));
    }
  /*  data.forEach(element => {
      this.articles.push(new Article(element.title, element.body));
    });*/
  }
 //indirizzo telefono email data
  makeCompactRequest(nome: HTMLInputElement, cognome: HTMLInputElement, indirizzo: HTMLInputElement, telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement, ora: HTMLInputElement): boolean {


    //mandi un apost al server
    console.log(`Aggiungo la prenotazione: ${nome.value} -  ${cognome.value} - ${indirizzo.value} - ${telefono.value} - ${email.value} - ${data.value} - ${ora.value}`);

    this.tempArt = new Lista(nome.value, cognome.value, indirizzo.value, telefono.value, email.value, data.valueAsDate, ora.valueAsDate);
    this.loading = true;
    this.postArt = this.http.post('https://jsonplaceholder.typicode.com/posts', JSON.stringify(this.tempArt));


    this.postArt.subscribe(data => {
      this.data = data;

      //console.log(data);
      this.loading = false;

      this.lista.push(this.tempArt);

    });

    return false;
  }
}
