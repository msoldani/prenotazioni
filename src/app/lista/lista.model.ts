export class Lista {
  nome: string;
  cognome: string;
  indirizzo: string;
  telefono: string;
  email: string;
  data: Date;
  ora: Date;

  constructor(nome: string, cognome: string, indirizzo: string, telefono: string, email: string, data: Date, ora: Date) {
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
    this.email = email;
    this.data = data;
    this.ora = ora;
  }
  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {// e.g. http://foo.com/path/to/bar
     /*const domainAndPath: string = this.body.split('//')[1]; // e.g. foo.com/path/to/bar
     return domainAndPath.split('/')[0];*/
    }
    catch (err) {
      return null;
    }
  }

}
