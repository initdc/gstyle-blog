import { newE2EPage } from '@stencil/core/testing';

describe('g-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-drawer></g-drawer>');

    const element = await page.find('g-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
