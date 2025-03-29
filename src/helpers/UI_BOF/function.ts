import { test, expect, Page } from '@playwright/test';

export class functionUiWeb{
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }
//** All function Ui-Web */
   
// waitForSeconds สำหรับการรอเวลา
    async waitForSeconds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}
/*
getByLabel('Username')
getByLabel('Password')
getByRole('button', { name: 'Login' })
*/