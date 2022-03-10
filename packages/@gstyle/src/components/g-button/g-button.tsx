import { Component, h, Prop } from '@stencil/core';



@Component({
  tag: 'g-button',
  styleUrl: 'g-button.css',
  shadow: false,
})
export class GButton {

  @Prop() size: string;
  @Prop() type: string;
  @Prop() color: string;
  @Prop() href?: string;

  render() {
    return this.href ? (
      <a class="g-button" href={this.href}>
        <slot>g-anchor</slot>
      </a>
    ) : (
      <button class="g-button">
        <slot>g-button</slot>
      </button>
    );
  }
}
