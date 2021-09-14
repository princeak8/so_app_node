import transmissionData from '../TransmissionData';

export var shiroroGs = {
    name: "SHIRORO GS",
    id: "shiroroGs",
    gs: true,
    gsId: 'shiroroPs',
    has132: false,
    lines: [
        {
            name: "j3r",
            id: "j3r",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "j7r",
            id: "j7r",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r1m",
            name: "r1m",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r4b",
            id: "r4b",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r4b-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "r2m",
            id: "r2m",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "r5g",
            id: "r5g",
            connectionRoot: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'r5g-v-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'up'
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'r5g-h-1',
                    start: false,
                    end: true,
                    position: 1,
                    arrowDirection: 'right'
                }
            ],
            transmissionData
        }
    ]
};