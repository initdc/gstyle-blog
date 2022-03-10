import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'g-blog',
  styleUrl: 'g-blog.css',
  shadow: true,
})
export class GBlog {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
