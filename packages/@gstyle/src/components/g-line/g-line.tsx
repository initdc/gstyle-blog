import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-line',
  styleUrl: 'g-line.css',
  shadow: true,
})
export class GLine {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
