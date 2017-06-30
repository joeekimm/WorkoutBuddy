const sum = (a,b) => {
    return a + b;
};

test('sum should return 3', () => {
   const res = sum(1,2);
   expect(res).toEqual(3);
});