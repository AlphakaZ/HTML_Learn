class Task{
    constructor(title){
        this.title = title;
        this.checked = false;
        this.index = getMaxIndexFromList() + 1;
    }
}
