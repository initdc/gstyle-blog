import { newE2EPage } from '@stencil/core/testing';

describe('g-pre-next', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-pre-next></g-pre-next>');

    const element = await page.find('g-pre-next');
    expect(element).toHaveClass('hydrated');
  });
});
