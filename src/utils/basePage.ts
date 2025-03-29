import { Page } from '@playwright/test';

export class basePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}