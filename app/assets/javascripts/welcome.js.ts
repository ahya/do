module Welcome {

    export class Greetter {

        constructor(private yourName: string) {}

        sayHello() {
            return this.yourName;
        }

    }

    class App {

        constructor() {
            console.log(new Greetter("Hogeyan"));
        }

    }

    new App();

}
