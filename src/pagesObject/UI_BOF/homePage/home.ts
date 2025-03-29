import { Page, test, expect } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.ENV || 'sit'}` }); // config environment

  //** กำหนดตัวแปรชุดข้อมูล */
const messageLoginSucces = 'Diagnosis List';
  //** สิ้นสุดกำหนดตัวแปรชุดข้อมูล */

export class Home {
  private page: Page;
  constructor(page: Page) {
    this.page = page; // กำหนดค่า page ให้กับ instance variable
  }

  //** Step */
  async showMessageHeaderHomePage() {
        const msgHeaderHome = this.page.getByText(messageLoginSucces).nth(1);
        await expect (msgHeaderHome).toBeVisible();
  }
}

/**
  เข้าหน้า home เห็น msg --->>> getByText('Diagnosis List').nth(1)
 */