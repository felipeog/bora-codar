import { Component, h, Prop } from '@stencil/core';
import loadingSvg from './svg/loading.svg';
import movableSvg from './svg/movable.svg';

@Component({
  tag: 'simple-button',
  styleUrl: 'simple-button.css',
  shadow: true,
})
export class SimpleButton {
  @Prop() type: EntityType;
  @Prop() variant: EntityVariant;
  @Prop() customStyles: {
    [key: string]: string | undefined;
  };

  render() {
    return (
      <button class={`${this.type ?? 'default'} ${this.variant ?? 'primary'}`} disabled={this.type === 'disabled'} style={this.customStyles}>
        {this.type === 'loading' && <img src={loadingSvg} alt="" />}
        {this.type === 'movable' && <img src={movableSvg} alt="" />}
        <slot></slot>
      </button>
    );
  }
}
