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


  /* await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('D');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Dishes');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('W');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Work');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('S');
  await page.getByTestId('text-input').press('CapsLock');
  await page.getByTestId('text-input').fill('Study');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Dishes' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-item-label')).toBeVisible();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByTestId('footer-navigation').click(); */
});