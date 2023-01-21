import { newSpecPage } from '@stencil/core/testing';
import { CursorPreview } from '../cursor-preview';

describe('cursor-preview', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CursorPreview],
      html: `<cursor-preview></cursor-preview>`,
    });
    expect(page.root).toEqualHtml(`
      <cursor-preview>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cursor-preview>
    `);
  });
});
