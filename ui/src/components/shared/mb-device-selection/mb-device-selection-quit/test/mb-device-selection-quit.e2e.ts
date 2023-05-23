/**
 * Copyright (c) Microblink Ltd. All rights reserved.
 */
 
import { newE2EPage } from '@stencil/core/testing';

describe('mb-device-selection-quit', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mb-device-selection-quit></mb-device-selection-quit>');

    const element = await page.find('mb-device-selection-quit');
    expect(element).toHaveClass('hydrated');
  });
});
