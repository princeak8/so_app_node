import transmissionData from '../TransmissionData';

export var owerri = {
    name: "OWERRI TS",
    id: "owerri",
    is132: true,
    lines: [
        //Added by me
        {
            name: "a1o",
            id: "a1o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a1o-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'a1o-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a1o-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            transmissionData
        },
        {
            name: "a2o",
            id: "a2o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a2o-h-0',
                    start: true,
                    end: false,
                    position: 0,
                    arrowDirection: 'left'
                },
                {
                    alignment: 'v',
                    direction: 'up',
                    name: 'a2o-v-1',
                    start: false,
                    end: false,
                    position: 1
                },
                {
                    alignment: 'h',
                    direction: 'right',
                    name: 'a2o-h-2',
                    start: false,
                    end: true,
                    position: 2,
                    arrowDirection: 'right'
                },
            ],
            transmissionData
        },
        {
            name: "h1o",
            id: "h1o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'h1o-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                }
            ],
            transmissionData
        },
        {
            name: "h2o",
            id: "h2o",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'h2o-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                }
            ],
            transmissionData
        },
    ]
};