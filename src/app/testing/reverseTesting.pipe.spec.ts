import { ReverseTestingPipe } from "./reverseTesting.pipe";


describe('Component: User', () => {
    it('should create the app', () => {
        let reversePipe = new ReverseTestingPipe();
        expect(reversePipe.transform('hello')).toEqual('olleh');
    })
});
