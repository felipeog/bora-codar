import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'section-header',
  styleUrl: 'section-header.css',
  shadow: true,
})
export class SectionHeader {
  @Prop() title: string;
  @Prop() text: string;

  render() {
    return (
      <Host>
        <h1>{this.title ?? ''}</h1>
        <p>{this.text ?? ''}</p>
      </Host>
    );
  }
}
