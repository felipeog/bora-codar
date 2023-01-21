import { newSpecPage } from '@stencil/core/testing';
import { SectionHeader } from '../section-header';

describe('section-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SectionHeader],
      html: `<section-header></section-header>`,
    });
    expect(page.root).toEqualHtml(`
      <section-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </section-header>
    `);
  });
});
