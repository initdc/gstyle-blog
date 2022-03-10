import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-modal',
  styleUrl: 'g-modal.css',
  shadow: true,
})
export class GModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
