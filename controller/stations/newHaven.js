import transmissionData from '../TransmissionData';

export var newHaven = {
    name: "NEW HAVEN TS",
    id: "newHaven",
    lines: [
        {
            name: "h1u",
            id: "h1u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "h2u",
            id: "h2u",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "t3h",
            id: "t3h",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 't3h-v-0',
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