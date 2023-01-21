import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true,
})
export class SimpleButton {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
