import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'section-header',
  styleUrl: 'section-header.css',
  shadow: true,
})
export class SectionHeader {
  render() {
    return (
      <Host>
        section-header
        <slot></slot>
      </Host>
    );
  }
}
