import transmissionData from '../TransmissionData';

export var jebbaGs = {
    name: "JEBBA GS",
    id: "jebbaGs",
    gs: true,
    gsId: 'jebbaPs',
    has132: false,
    lines: [
        {
            name: "b8j",
            id: "b8j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'left',
                    name: 'b8j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "b9j",
            id: "b9j",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'left',
                    name: 'b9j-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        }
    ]
};