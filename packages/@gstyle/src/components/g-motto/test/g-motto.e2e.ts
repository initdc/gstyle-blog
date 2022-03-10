import { newE2EPage } from '@stencil/core/testing';

describe('g-motto', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-motto></g-motto>');

    const element = await page.find('g-motto');
    expect(element).toHaveClass('hydrated');
  });
});
