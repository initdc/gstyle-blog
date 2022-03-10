import { newE2EPage } from '@stencil/core/testing';

describe('g-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-card></g-card>');

    const element = await page.find('g-card');
    expect(element).toHaveClass('hydrated');
  });
});
