import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-pre-next',
  styleUrl: 'g-pre-next.css',
  shadow: true,
})
export class GPreNext {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
