const {test, expect} = require('@playwright/test');
const { PlayWrightHooks } = require('../Hooks/AllHooks');

test('Verify the landing page', async ({page}) =>{
    const hooks = new PlayWrightHooks(page);
    await hooks.beforeAll();
    await expect(page).toHaveTitle('Automation Exercise');

})