import { newE2EPage } from '@stencil/core/testing';

describe('simple-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<simple-button></simple-button>');

    const element = await page.find('simple-button');
    expect(element).toHaveClass('hydrated');
  });
});
