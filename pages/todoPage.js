import { Actions } from "../utils/actions";
export class todoPage {
    constructor (page) {
        this.page = page
        this.actions = new Actions(page);
    }

    //locators
    get toDoInput(){
        return this.actions.getByTestId('text-input');
    }

    get toDoItemList(){
        return this.actions.getByTestId('todo-item-label');
    }
   
    //functions

    async navigateTo(url){
        await this.actions.navigateTo(url);
    }

    async fillToDoInput(text) {
        await this.actions.fillInput(this.toDoInput,text);
    }

    async pressEnterKey(){
        await this.actions.pressKey(this.toDoInput, 'Enter');
    }

    async expectValueToBe(expectedValue, index){
        await this.actions.nthExpectValueToBe(this.toDoItemList,expectedValue, index);
    }
}