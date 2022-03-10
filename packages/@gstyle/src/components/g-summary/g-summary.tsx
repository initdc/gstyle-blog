import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-summary',
  styleUrl: 'g-summary.css',
  shadow: true,
})
export class GSummary {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
