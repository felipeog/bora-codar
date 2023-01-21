import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <cursor-preview></cursor-preview>
          <section-header></section-header>
          <simple-button></simple-button>
        </main>
      </div>
    );
  }
}
