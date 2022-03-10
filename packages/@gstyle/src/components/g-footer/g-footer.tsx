import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-footer',
  styleUrl: 'g-footer.css',
  shadow: true,
})
export class GFooter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
