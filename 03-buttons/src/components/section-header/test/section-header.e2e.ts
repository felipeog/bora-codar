import { newE2EPage } from '@stencil/core/testing';

describe('section-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<section-header></section-header>');

    const element = await page.find('section-header');
    expect(element).toHaveClass('hydrated');
  });
});
