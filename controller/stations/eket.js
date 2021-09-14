import transmissionData from '../TransmissionData';

export var eket = {
    name: "EKET TS",
    id: "eket",
    is132: true,
    lines: [
        //Added by me
        {
            name: "i1e",
            id: "i1e",
            connectionRoot: false,
            transmissionData
        },
        {
            name: "e1m",
            id: "e1m",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'e1m-v-0',
                    start: true,
                    end: true,
                    position: 0,
                    arrowDirection: 'both'
                },
            ],
            transmissionData
        },
        {
            name: "e2m",
            id: "e2m",
            connectionRoot: true,
            is132Connection: true,
            connections: [
                {
                    alignment: 'v',
                    direction: 'down',
                    name: 'e2m-v-0',
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