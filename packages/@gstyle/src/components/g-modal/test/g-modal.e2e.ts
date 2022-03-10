import { newE2EPage } from '@stencil/core/testing';

describe('g-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-modal></g-modal>');

    const element = await page.find('g-modal');
    expect(element).toHaveClass('hydrated');
  });
});
