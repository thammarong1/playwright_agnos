import { Page, test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // config environment

//** กำหนดตัวแปรชุดข้อมูล */
const messageLoginUsernameFailed = 'Wrong email or password.';
//** สิ้นสุดกำหนดตัวแปรชุดข้อมูล */

export class Login {
  private page: Page;
  constructor(page: Page) {
    this.page = page; // กำหนดค่า page ให้กับ instance variable
  }

  //** Step */
  async LandingLoginPage() {
    await this.page.goto(`${process.env.URL_login}`)
  }
  async InputEmail(username: string) {
    const inputEmail = this.page.locator('#Email');
    await inputEmail.fill(username);
  //  await this.page.locator('#Email').fill(username);
  }
  async InputPassword(password: string) {
    const inputPassword= this.page.locator('#password');
    await inputPassword.fill(password);
  }
  async ClickButtonLogin() {
    const buttonLogin = this.page.getByRole('button', { name: 'Sign in' });
    await buttonLogin.click({force: true});
  }
  async showMessageLoginFailed() {
    const msgLoginFailed = this.page.getByText(messageLoginUsernameFailed);
    await expect (msgLoginFailed).toBeVisible();
    //await expect(this.page.getByText(messageLoginUsernameFailed)).toBeVisible();
  }
}


/**
  locator('#Email')
  locator('#password')
  getByRole('button', { name: 'Sign in' })
  getByText('Wrong email or password.')
 */