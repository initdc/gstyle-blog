import { newE2EPage } from '@stencil/core/testing';

describe('g-notify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<g-notify></g-notify>');

    const element = await page.find('g-notify');
    expect(element).toHaveClass('hydrated');
  });
});
