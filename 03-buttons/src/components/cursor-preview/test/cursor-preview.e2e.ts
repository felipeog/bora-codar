import { newE2EPage } from '@stencil/core/testing';

describe('cursor-preview', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cursor-preview></cursor-preview>');

    const element = await page.find('cursor-preview');
    expect(element).toHaveClass('hydrated');
  });
});
