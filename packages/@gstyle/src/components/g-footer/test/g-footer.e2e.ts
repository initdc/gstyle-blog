import { newE2EPage } from '@stencil/core/testing';

describe('g-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-footer></g-footer>');

    const element = await page.find('g-footer');
    expect(element).toHaveClass('hydrated');
  });
});
