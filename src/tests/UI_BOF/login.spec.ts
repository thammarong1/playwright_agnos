import { test, expect } from "@playwright/test";
import { Login } from "../../pagesObject/UI_BOF/login/login"; 
import { functionUiWeb } from "../../helpers/UI_BOF/function";
import { Home } from "../../pagesObject/UI_BOF/homePage/home";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // config environment


test.beforeAll(async () => {
  console.log('---- Start Test -----');
});

test.describe('Verify Login Page', () => {
  //** กำหนดเรียกใช้ข้อมูลจาก env โดยใช้สำหรับใน describe(Verify Login Page) */
const username_Valid = process.env.Username_Valid as string;
console.log("username_Valid :", username_Valid);
const username_Invalid = `${process.env.Username_Invalid}`;
const password_Valid = process.env.Password_Valid as string;
const password_Invalid = `${process.env.Password_Invalid}`;
//** สิ้นสุดกำหนดใช้ข้อมูลจาก env */

  test(`Verify Login success`, async ({ page }) => {
    const login = new Login(page);  // สร้าง instance ของ Login class
    const home = new Home(page);     // สร้าง instance ของ Home class
    const function_ui_web = new functionUiWeb(page); // สร้าง instance เรียกใช้ function UI web

    await login.LandingLoginPage();
    await login.InputEmail(username_Valid);
    await login.InputPassword(password_Valid);
    await login.ClickButtonLogin();
    await home.showMessageHeaderHomePage();
    await function_ui_web.waitForSeconds(1);
  });

  test(`Verify Login failed - Username incorrect`, async ({ page }) => {
    const login = new Login(page);  // สร้าง instance ของ Login class
    //const home = new Home(page);     // สร้าง instance ของ Home class
    const function_ui_web = new functionUiWeb(page);
  
    await login.LandingLoginPage();
    await login.InputEmail(username_Invalid);
    await login.InputPassword(password_Valid);
    await login.ClickButtonLogin();
    await login.showMessageLoginFailed();
    await function_ui_web.waitForSeconds(1);
 });

}); // ปิด describe






