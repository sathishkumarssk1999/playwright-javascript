const {test, expect} = require('@playwright/test')


// run a test with --grep sanity
test('tag name@sanity',async ({page}) => {
    console.log("test 1 sanity");
})

// run a test with --grep sanity
test('tag second@sanity',async ({page}) => {
    console.log("test 2 sanity");
})

// run a test with --grep smoke
test('tag third@smoke',async ({page}) => {
    console.log("test 3 smoke");
})

// run a test with --grep smoke
test('tag fourth@smoke',async ({page}) => {
    console.log("test 4 smoke");
})

// run a test with --grep @sanity@smoke
test('tag fifth@sanity@smoke',async ({page}) => {
    console.log("test 5 sanity and smoke");
})

