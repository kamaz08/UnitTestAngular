import { MessageService } from "../message.service";

describe('MessageService', () => {
    let service: MessageService;

    beforeEach(()=> {
        service = new MessageService();
    })

    it('should have no messages to start', () => {
        expect(service.messages.length).toBe(0);


    })

    it('should have add messages when add is called', () => {
        service.add('message');

        expect(service.messages.length).toBe(1);
    })

    it('should remove all messages when clear is called', () => {
        service.add('message');

        service.clear();

        expect(service.messages.length).toBe(0);
    })
    
})