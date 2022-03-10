import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-list',
  styleUrl: 'g-list.css',
  shadow: true,
})
export class GList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
