import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true,
})
export class SimpleButton {
  @Prop() type: EntityType;
  @Prop() variant: EntityVariant;

  render() {
    return (
      <button class={`${this.type ?? 'default'} ${this.variant ?? 'primary'}`}>
        <slot></slot>
      </button>
    );
  }
}
