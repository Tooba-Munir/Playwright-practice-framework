import { test, expect } from '@playwright/test';
import * as dataForTest from '../utils/data.js';
import { todoPage } from '../pages/todoPage.js';
test('To Do MVC React App Test', async ({ page }) => {

  const todo = new todoPage(page);
  await todo.navigateTo(dataForTest.URL);
  //fill data
  for (const item of dataForTest.TODO_ITEMS){
    await todo.fillToDoInput(item);
    await todo.pressEnterKey();
  }
  //verify
  for (let i =0; i<dataForTest.TODO_ITEMS.length; i++)
{
 await todo.expectValueToBe(dataForTest.TODO_ITEMS[i],i);
}
});