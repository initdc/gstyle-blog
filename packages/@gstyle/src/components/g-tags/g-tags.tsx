import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-tags',
  styleUrl: 'g-tags.css',
  shadow: true,
})
export class GTags {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
