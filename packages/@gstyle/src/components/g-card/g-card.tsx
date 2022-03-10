import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-card',
  styleUrl: 'g-card.css',
  shadow: true,
})
export class GCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
