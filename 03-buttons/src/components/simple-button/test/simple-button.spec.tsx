import { newSpecPage } from '@stencil/core/testing';
import { SimpleButton } from '../simple-button';

describe('simple-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SimpleButton],
      html: `<simple-button></simple-button>`,
    });
    expect(page.root).toEqualHtml(`
      <simple-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </simple-button>
    `);
  });
});
