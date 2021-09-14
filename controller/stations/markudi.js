import transmissionData from '../TransmissionData';

export var markudi = {
    name: "MARKUDI TS",
    id: "markudi",
    lines: [
        {
            name: "a1s",
            id: "a1s",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "a2s",
            id: "a2s",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "u1a",
            id: "u1a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'u1a-h-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "u2a",
            id: "u2a",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'u2a-h-0',
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