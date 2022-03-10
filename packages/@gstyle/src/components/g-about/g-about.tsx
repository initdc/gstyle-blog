import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-about',
  styleUrl: 'g-about.css',
  shadow: true,
})
export class GAbout {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
