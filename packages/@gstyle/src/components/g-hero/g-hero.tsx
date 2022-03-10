import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-hero',
  styleUrl: 'g-hero.css',
  shadow: true,
})
export class GHero {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
