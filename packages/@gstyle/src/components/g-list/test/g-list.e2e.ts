import { newE2EPage } from '@stencil/core/testing';

describe('g-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-list></g-list>');

    const element = await page.find('g-list');
    expect(element).toHaveClass('hydrated');
  });
});
