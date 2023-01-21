import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cursor-preview',
  styleUrl: 'cursor-preview.css',
  shadow: true,
})
export class CursorPreview {
  render() {
    return (
      <Host>
        cursor-preview
        <slot></slot>
      </Host>
    );
  }
}
