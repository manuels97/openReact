// import { LEVELS } from "./levels.enum";

export class Task {
    name = '';
    Email = '';
    conectado = false;
    // level = LEVELS.NORMAL;

    constructor(name, description, completed, level){
        this.name = name;
        this.Email = description;
        this.conectado = completed;
        // this.level = level
    }

}