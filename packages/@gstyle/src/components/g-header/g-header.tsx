import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-header',
  styleUrl: 'g-header.css',
  shadow: true,
})
export class GHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
