import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-page-number',
  styleUrl: 'g-page-number.css',
  shadow: true,
})
export class GPageNumber {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
