import { expect } from "@playwright/test";

export class Actions {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);        // async - browser action
    }

    async clickElement(locator) {
        await locator.click();            // async - browser action
    }

    getByTestId(testId) {
        return this.page.getByTestId(testId); // no async - just returns locator
    }

    async fillInput(locator, text) {
        await locator.fill(text);         // async - browser action
    }

    async pressKey(locator, key) {
        await locator.press(key);         // async - browser action
    }

    async nthExpectValueToBe(locator, expectedValue, index){
        await expect(locator.nth(index)).toHaveText(expectedValue); // async - browser action
    }
}