import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-nav',
  styleUrl: 'g-nav.css',
  shadow: true,
})
export class GNav {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
