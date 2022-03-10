import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-motto',
  styleUrl: 'g-motto.css',
  shadow: true,
})
export class GMotto {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
