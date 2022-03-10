import { newE2EPage } from '@stencil/core/testing';

describe('g-summary', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-summary></g-summary>');

    const element = await page.find('g-summary');
    expect(element).toHaveClass('hydrated');
  });
});
