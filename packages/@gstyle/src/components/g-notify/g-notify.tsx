import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-notify',
  styleUrl: 'g-notify.css',
  shadow: true,
})
export class GNotify {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
