import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-drawer',
  styleUrl: 'g-drawer.css',
  shadow: true,
})
export class GDrawer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
