import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-search',
  styleUrl: 'g-search.css',
  shadow: true,
})
export class GSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
