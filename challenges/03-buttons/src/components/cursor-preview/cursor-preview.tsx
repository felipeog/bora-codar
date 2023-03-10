import { Component, Host, h, Prop } from '@stencil/core';
import defaultSvg from './svg/default.svg';
import disabledSvg from './svg/disabled.svg';
import loadingSvg from './svg/loading.svg';
import movableSvg from './svg/movable.svg';

@Component({
  tag: 'cursor-preview',
  styleUrl: 'cursor-preview.css',
  shadow: true,
})
export class CursorPreview {
  @Prop() type: EntityType;

  cursors = {
    default: defaultSvg,
    hover: defaultSvg,
    focus: defaultSvg,
    disabled: disabledSvg,
    loading: loadingSvg,
    movable: movableSvg,
  };

  render() {
    return (
      <Host>
        <img src={this.cursors[this.type ?? 'default']} alt="" />
        <slot></slot>
      </Host>
    );
  }
}
